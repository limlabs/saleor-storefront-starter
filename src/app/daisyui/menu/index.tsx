"use client";
import React from "react";

interface NavLinkProps {
  label: string;
  path: string;
  // onClick?: () => void;
}

interface MenuProps {
  items: NavLinkProps[];
}

const Menu: React.FC<MenuProps> = ({ items }) => (
  <ul className="menu bg-base-100 w-56 rounded-box">
    {items.map((item) => {
      return <li key={item.label}>{item.label}</li>;
    })}
  </ul>
);

export default Menu;
