module.exports = (queryString) => {
  return {
    sort: queryString.sort === "desc" ? "-id" : "id",
  };
};
