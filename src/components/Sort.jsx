import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";

const Sort = ({ sortBy, onSort }) => {
  const [isSorted, setIsSorted] = useState(false);
  return (
    <span
      className="sort"
      onClick={() => {
        onSort(sortBy, isSorted);
        setIsSorted(!isSorted);
      }}
    >
      {isSorted ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
    </span>
  );
};

export default Sort;
