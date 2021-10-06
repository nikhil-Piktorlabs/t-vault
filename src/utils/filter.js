function filterArrays(items, value) {
  if (value === "") return items;

  return items.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
}

export default filterArrays;
