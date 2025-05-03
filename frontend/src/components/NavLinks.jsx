import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "courses", text: "courses" },
  { id: 4, url: "products", text: "products" },
  { id: 5, url: "tools", text: "tools" },
  { id: 6, url: "lands", text: "Land listings" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive
                  ? "capitalize text-white bg-green-950 w-full md:bg-gray-100 md:text-green-900 md:font-bold flex  flex-row justify-center font-['Kanit']"
                  : "capitalize text-gray-800  font-['Kanit'] w-full  flex flex-row justify-center "
              }
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
