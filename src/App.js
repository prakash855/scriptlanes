import axios from "axios";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Table from "./components/Table";
import "./App.css";
import { API } from "./baseURL";
import { currentDate, filterHandler, sortHandler } from "./utils";
import CustomizedDialogs from "./components/FeatureModal";

function App() {
  const [dateInput, setDateInput] = useState("");
  const [centers, setCenters] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ type: "", isSorted: false });
  const [isRequested, setIsRequested] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { centers },
      } = await axios.get(`${API}${dateInput.split("-").reverse().join("-")}`);
      setCenters(centers);
      setIsRequested(true);
    } catch (e) {
      console.log(e);
    }
  };

  const getSortedBy = (type, isSorted) => {
    setSortBy({ type, isSorted });
  };
  const filteredItems = filterHandler(centers, search);

  const sortedCenters = sortHandler(filteredItems, sortBy);

  return (
    <div className="App">
      {open && (
        <CustomizedDialogs
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
      )}
      <div className="head">
        <div className="input">
          <TextField
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            type="date"
            inputProps={{ min: currentDate }}
            variant="outlined"
            size="small"
          />
          <Button onClick={handleSubmit} variant="contained">
            Go
          </Button>
        </div>
        <div className="search">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label="Search By Names"
            variant="outlined"
            size="small"
          />
          <Button
            sx={{ position: "absolute", top: "1px", right: "1px" }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            <InfoIcon /> Features
          </Button>
        </div>
      </div>
      {centers && <Table centers={sortedCenters} onSort={getSortedBy} />}
      {isRequested && sortedCenters.length === 0 && (
        <Typography
          sx={{ textAlign: "center", color: "#9E230C" }}
          variant="h1"
          gutterBottom
        >
          Oh ho, We did not find any records!{" "}
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: "5rem" }} />
        </Typography>
      )}
    </div>
  );
}

export default App;
