const findParentOrChild = (arr, id) => {
  const item = arr.find(e => e.id === id);
  if (item) return item;
  const item2 = arr.map(e => e.children).filter(e => e?.find(el => el.id === id))[0]?.find(e => e.id === id);
  if (item2) return item2;
  return arr[0];
};

export default findParentOrChild;
