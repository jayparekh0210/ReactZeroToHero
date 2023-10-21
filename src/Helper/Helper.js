export function filterData(allRes, searchText) {
  const filterDataRes = allRes.filter((res) => {
    return res.info.name
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
  });
  return filterDataRes;
}
