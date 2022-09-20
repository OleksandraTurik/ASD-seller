const searchFilter = (searchStr, adverts = []) => {
  const search = searchStr.trim().toUpperCase().split(' ');
  return adverts
    .filter(el => search.reduce((acc, curr) => !acc ? el.title.toUpperCase().includes(curr) : true, false));
};

export default searchFilter;
