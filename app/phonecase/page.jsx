import Title from "../components/Title";
import Products from "../components/Products";
const getData = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
const phoneCase = async () => {
  const products = await getData();
  return (
    <div>
      <Title title="Style your Phone with Stylish Case" />
      <Products products={products} />
    </div>
  );
};
export default phoneCase;
