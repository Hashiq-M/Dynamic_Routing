const getData = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/phone");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
const getData1 = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
const getData2 = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/watch");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
const getData3 = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/accessories");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};

export const getSingleProduct = async (_id) => {
  if (_id < 1021) {
    const item = await getData();
    const singleItem = await item.find((product) => product._id === _id);
    return singleItem;
  }
  if (_id >= 2000 && _id < 2012) {
    const item = await getData2();
    const singleItem = await item.find((product) => product._id === _id);
    return singleItem;
  }
  if (_id > 3000 && _id < 3016) {
    const item = await getData1();
    const singleItem = await item.find((product) => product._id === _id);
    return singleItem;
  }
  if (_id > 4000 && _id < 4013) {
    const item = await getData3();
    const singleItem = await item.find((product) => product._id === _id);
    return singleItem;
  }
};
