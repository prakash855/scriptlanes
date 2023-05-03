export const currentDate = new Date().toISOString().split("T")[0];

export function filterHandler(centers, search) {
  return centers.filter((item) =>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
}

export function sortHandler(filteredItems, sortBy) {
  return filteredItems.sort((a, b) => {
    const valueA =
      sortBy.type === "capacity"
        ? a.sessions[0].available_capacity
        : a.sessions[0].vaccine.toLowerCase();
    const valueB =
      sortBy.type === "capacity"
        ? b.sessions[0].available_capacity
        : b.sessions[0].vaccine.toLowerCase();

    if (valueA < valueB) {
      return sortBy.isSorted ? 1 : -1;
    } else if (valueA > valueB) {
      return sortBy.isSorted ? -1 : 1;
    } else {
      return 0;
    }
  });
}
