import Title from "../components/Title";
import Products from "../components/Products";
const getData = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/watch");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
const watch = async () => {
  const products = await getData();
  return (
    <div>
      <Title title="Be on Time with our Watches" />
      <Products products={products} />
    </div>
  );
};
export default watch;
