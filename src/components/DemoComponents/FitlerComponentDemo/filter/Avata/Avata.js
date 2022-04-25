import React from "react";
import { useState, useEffect } from "react";

function Avata({ url, alt}) {
  const [avataData, setAvataData] = useState('');

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAvataData(data.sprites.other.home['front_default']));
  };

  useEffect(getData, []);

  return (
    <>
      <img alt={alt} src={avataData} style={{width:"200px"}}/>
    </>
  );
}

export default Avata;