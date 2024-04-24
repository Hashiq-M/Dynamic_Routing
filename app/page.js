import Products from "./components/Products";
import Title from "./components/Title";

const getData = async () => {
  const resp = await fetch("https://jsonserver.reactbd.com/phone");
  if (!resp.ok) {
    throw new Error("Data not fetched");
  }
  return resp.json();
};
export default async function Home() {
  const products = await getData();

  return (
    <main>
      <Title title="Get your Favorite Phone" />
      <Products products={products} />
    </main>
  );
}
