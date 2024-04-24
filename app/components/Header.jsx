import Link from "next/link";

export const Header = () => {
  const navigation = [
    { id: 1, title: "Phone", href: "/" },
    { id: 2, title: "Phone Case", href: "/phonecase" },
    { id: 3, title: "Watches", href: "/watch" },
    { id: 4, title: "Accessories", href: "/accessories" },
  ];
  return (
    <div className=" w-full h-20 bg-gray-950 text-gray-200 sticky top-0">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-5">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="uppercase text-sm hover:text-white hover:scale-110 transition-transform"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
