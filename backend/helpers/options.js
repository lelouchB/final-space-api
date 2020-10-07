module.exports = (queryString) => {
  return {
    sort: queryString.sort === "decs" ? "-id" : "id",
  };
};
