import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { useImage, Img } from "react-image";
import logo from "./mavel_logo.png"; // with import
import { _navContent } from "./NavContent";
import "../mainLayout.css";
import "./nav.css";

import { Menu } from "semantic-ui-react";
import RoutesPath from "../../Routes/Routes";

export function Nav() {
  const listNavigateItem = _navContent;

  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState("");
  const [pathList, setPathList] = useState([]);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  // ---- Get Data for navigator ----
  const getData = () => {
    listNavigateItem.map((env) => {
      let item = env.data;
      for (let i of item) {
        setItems((prev) => [
          ...prev,
          {
            title: i.item,
            path: `${env.title.replace(/\s+/g, "")}/${i.item.replace(
              /\s+/g,
              ""
            )}`,
            pathId: `${env.title.replace(/\s+/g, "")}/${i.pathId}`,
          },
        ]);
      }
    });
  };

  console.log("items", items);

  useEffect(getData, [_navContent]);
  // ---- End get data for navigator ----

  return (
    <div className="nav-wrap">
      <div className="nav_header">
        <div>
          <img src={logo} className={"logo"} />
        </div>
        <div className="nav_information--list">
          <div className="nav_information--item">
            <Link to='/'>Home</Link>
          </div>
          <div className="nav_information--item">Information</div>
          <div className="nav_information--item">Other</div>
        </div>
      </div>
      <div className="nav-block">
        {/* <Link to='/'/> */}
        {items &&
          items.map((item) => {
            // const { activeItem }  = this.state;
            return (
              <React.Fragment>
                <Menu secondary vertical key={item}>
                  <Link to={item.pathId}>
                    <Menu.Item
                      name={item.title}
                      active={ activeItem === item.title}
                      onClick={handleItemClick}
                    />
                    {/* {item.title} */}
                  </Link>
                </Menu>
                {/* <div className="nav-block--title"></div> */}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}
