import axios from "axios";
import { createContext, useContext, useState } from "react";
import { API } from "../baseURL";
import { filterHandler, sortHandler } from "../utils";

const Centers = createContext();

const CentersContext = ({ children }) => {
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

  const getSortedBy = (type, isSorted) => {
    setSortBy({ type, isSorted });
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

  const filteredItems = filterHandler(centers, search);

  const sortedCenters = sortHandler(filteredItems, sortBy);
  return (
    <Centers.Provider
      value={{
        dateInput,
        setDateInput,
        centers,
        setCenters,
        search,
        setSearch,
        sortBy,
        setSortBy,
        isRequested,
        setIsRequested,
        open,
        setOpen,
        handleClickOpen,
        handleClose,
        handleSubmit,
        sortedCenters,
        getSortedBy,
      }}
    >
      {children}
    </Centers.Provider>
  );
};

const useCenters = () => useContext(Centers);

export { CentersContext, useCenters };
