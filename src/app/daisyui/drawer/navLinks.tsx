interface Navlink {
  name: string;
  path: string;
}

const navLinks: Navlink[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default navLinks;
