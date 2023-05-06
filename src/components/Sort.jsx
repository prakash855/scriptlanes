import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";
import { useCenters } from "../context/centers-context";

const Sort = ({ sortBy }) => {
  const { getSortedBy } = useCenters();
  const [isSorted, setIsSorted] = useState(false);
  return (
    <span
      className="sort"
      onClick={() => {
        getSortedBy(sortBy, isSorted);
        setIsSorted(!isSorted);
      }}
    >
      {isSorted ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
    </span>
  );
};

export default Sort;
