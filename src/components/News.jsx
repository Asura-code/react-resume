import { useState, useEffect } from "react";
import Button from "./Button/Button";

export default function News() {
  const [loading, setLoading] = useState(false);
  const [newsMax, setNewsMax] = useState();
  const [newsIS, setNewsIS] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);

      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty"
      );
      const maxnews = await response.json();
      setNewsMax(maxnews);
      console.log(newsMax);

      const url =
        "https://hacker-news.firebaseio.com/v0/item/" +
        String(parseInt(maxnews)) +
        ".json?print=pretty";
      const url1 =
        "https://hacker-news.firebaseio.com/v0/item/" +
        String(parseInt(maxnews) - 1) +
        ".json?print=pretty";
      const url2 =
        "https://hacker-news.firebaseio.com/v0/item/" +
        String(parseInt(maxnews) - 2) +
        ".json?print=pretty";
      const response2 = await fetch(url);
      const response3 = await fetch(url1);
      const response4 = await fetch(url2);
      console.log(url);

      const news = await response2.json();
      const news1 = await response3.json();
      const news2 = await response4.json();
      console.log(news.title);
      setNewsIS([news.text, news1.text, news2.text]);
      setLoading(false);
    }
    fetchNews();
  }, []);
  console.log(newsIS);
  return (
    <div>
      <ul>"1: "{newsIS[0]}</ul>
      <ul>"2: "{newsIS[1]}</ul>
      <ul>"3: "{newsIS[2]}</ul>
    </div>
  );
}
