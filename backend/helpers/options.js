exports.sort = (query, queryString) => {
  if (queryString.sort) {
    const sortBy = queryString.sort === "asc" ? "id" : "-id";
    query.sort(sortBy);
  }
  return query;
};
