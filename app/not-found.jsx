import Link from "next/link";

const NotFound = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <p>Page is not found</p>
      <Link href={"/"} className=" border-b-[1px] border-b-gray-950 mt-2">
        Back to Home
      </Link>
    </div>
  );
};
export default NotFound;
