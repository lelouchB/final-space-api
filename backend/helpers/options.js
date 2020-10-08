module.exports = (queryString) => {
  return {
    sort: queryString.sort === "desc" ? "-id" : "id",
    limit: parseInt(queryString.limit) !== 0 ? parseInt(queryString.limit) : 0, 
  };
};
