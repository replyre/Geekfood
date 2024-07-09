import React, { useEffect, useState } from "react";
import "../components/quotes.css";
const Quotes = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  }, []);
  return (
    <div className="quotes">
      {Data &&
        Data.map((e) => {
          return (
            <div className="quote">
              <p className="quote-text">{e.text}</p>
              <p className="quote-author">-{e.author.split(",")[0]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Quotes;
