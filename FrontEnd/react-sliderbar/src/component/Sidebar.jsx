import React, { useState } from "react";
import "../App.css";
import {
  FaTh,
  FaLock,
  FaBars,
  FaBook,
  FaRegChartBar,
  FaCommentAlt,
  FaThList,
  FaShoppingBag,
  FaRegistered,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";





function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const menuItem = [
    {
      path: "/login",
      name: " ورود کاربر",
      icon: <FaLock />,
    },
    {
      path: "/",
      name: "کارتابل دستورکار",
      icon: <FaTh />,
    },
    {
      path: "/TeamFails",
      name: "کارتابل دستورکار اکیپ",
      icon: <FaTh />,
    },
    {
      path: "/registerFail",
      name: "ثبت خرابی",
      icon: <FaRegistered />,
    },
    {
      path: "/report",
      name: "گزارشگیری",
      icon: <FaRegChartBar />,     
    },
    {
      path: "/asset",
      name: "اموال نقاط ",
      icon: <FaBook />,
    },
    {
      path: "/source",
      name: "انبار",
      icon: <FaShoppingBag />,
    },
    {
      path: "/deliveryAssets",
      name: "تحویل کالا ",
      icon: <FaShoppingBag />,
    },
    {
      path: "/education",
      name: "آموزش",
      icon: <FaCommentAlt />,
    },

  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginRight: isOpen ? "50" : "0" }} className="bars">
            <FaBars onClick={toggle} />
          </div>

          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            سامانه تله متری
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}

      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
