import { useState, useEffect } from "react";
import Button from "./Button/Button";
import useInput from "../hooks/useInput";

export default function News() {
  const input = useInput();
  const [loading, setLoading] = useState(false);
  const [usdIS, setUsdIS] = useState([]);
  const [eurIS, setEurIS] = useState([]);
  const [gbpIS, setGbpIS] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const news = await response.json();
      setUsdIS(news.bpi.USD);
      setGbpIS(news.bpi.GBP);
      setEurIS(news.bpi.EUR);
      setLoading(false);
    }
    fetchNews();
  }, []);

  const newsIs = [usdIS, gbpIS, eurIS];
  return (
    <div>
      {/* <p>bitcoin exchange rate:</p>
      <input
        type="text"
        className="control"
        {...input}
        placeholder="print currency here"
      /> */}
      {/* {!loading && (
        <h1>
          {usdIS.code} : {usdIS.rate}
        </h1>
      )} */}
      {!loading && "bitcoin exchange rate:"}
      {newsIs
        // .filter((user) =>
        //   user.code.toLowerCase().includes(input.value.toLowerCase())
        // )
        .map((currency) => (
          <section>
            <ul>
              <li>
                <p>
                  {currency.code}:{currency.rate}
                </p>
              </li>
            </ul>
          </section>
        ))}
    </div>
  );
}
