import Link from "next/link";
import React from "react";
import ActiveNav from "./active-nav";

const Navigtaions = () => {
  const navigations = [
    "Home",
    "Health",
    "Food",
    "Lifestyle",
    "Entertainment",
    "Education",
    "Sports",
    "Business",
    "Politics",
    "World",
    "Crime",
    "Tourism",
  ];
  return (
    <nav className="bg-green-700 py-2">
      <ul className="flex justify-center space-x-4 flex-wrap">
        {navigations.map((nav) => (
          <li key={nav}>
            <ActiveNav>{nav}</ActiveNav>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigtaions;
