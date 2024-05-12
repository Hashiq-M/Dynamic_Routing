import Title from "../components/Title";
import Products from "../components/Products";
const getData = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/accessories");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
const accessories = async () => {
  const products = await getData();
  return (
    <div>
      <Title title="Fullfill Everything with our Accessories" />
      <Products products={products} />
    </div>
  );
};
export default accessories;
