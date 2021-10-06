function filterArrays(items, value) {
  if (value === "") return items;

  const regex = new RegExp(`\\b${value.toLowerCase()}`);

  return items.filter((item) => regex.test(item.name.toLowerCase()));
}

export default filterArrays;
