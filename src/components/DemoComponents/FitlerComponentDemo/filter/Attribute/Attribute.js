import { useState, useEffect } from "react";

function Attribute({ url, option }) {
  const [attData, setAttData] = useState([]);

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAttData(data.abilities));
  };

  useEffect(getData, []);

  return (
    <>
      {attData &&
        attData.map((env) => {
          return (
            <div key={env.slot}>
              <div
                className={
                    option ? env.is_hidden === false
                    ? "badge rounded-pill bg-primary"
                    : "badge rounded-pill bg-secondary" :
                    env.is_hidden === false
                    ? "badge rounded-pill bg-primary"
                    : "badge rounded-pill bg-light text-dark"
                }
              >
                {env.ability.name}
                
              </div>
                
            </div>
          );
        })}
    </>
  );
}

export default Attribute;
