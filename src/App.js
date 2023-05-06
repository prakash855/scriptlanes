import { Button, TextField, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Table from "./components/Table";
import "./App.css";
import { currentDate } from "./utils";
import CustomizedDialogs from "./components/FeatureModal";
import { useCenters } from "./context/centers-context";

function App() {
  const {
    dateInput,
    setDateInput,
    centers,
    search,
    setSearch,
    isRequested,
    open,
    handleClickOpen,
    handleClose,
    handleSubmit,
    sortedCenters,
  } = useCenters();

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
      {centers && <Table centers={sortedCenters} />}
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
