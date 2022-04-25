import React, { useState, useEffect } from "react";
import { Link, Routes, Route, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ContentBox from "../ContentBox/ContentBox";
import Main from "../MainLayout/MainContent/Main";
import { _navContent } from "../MainLayout/Nav/NavContent";

export default function RoutesPath() {
  const listPath = _navContent;

  const [pathList, setPathList] = useState([]);

  const getPathList = () => {
    listPath.map((env) => {
      let item = env.data;
      for (let i of item) {
        setPathList((prev) => [
          ...prev,
          {
            title: i.item,
            content: i.content,
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

  console.log(pathList);

  useEffect(getPathList, []);

  return (
    <React.Fragment>
      <Routes>
        <Route exact path="*" element={<HomePage/>}/>

        {pathList &&
          pathList.map((env) => {
            return (
              <Route
                path={env.pathId}
                element={<ContentBox title={env.title} content={env.content} />}
              />
            );
          })}
      </Routes>
    </React.Fragment>
  );
}
