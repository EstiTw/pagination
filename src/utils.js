const paginate = (currentPage, perPage, data) => {
  const pageData = [];
  const first = (currentPage - 1) * perPage;
  const last = first + perPage - 1;
  for (let i = first; i <= last; i++) pageData.push(data[i]);
  return pageData;
};

export default paginate;
