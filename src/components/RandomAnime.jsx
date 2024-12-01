import { useState, useEffect } from "react";
import Button from "./Button/Button";

export default function RandomAnime() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);
  const heads = ["Name: ", "Synopsis: ", "link: "];

  function printLi() {
    setPrintTrue(!printTrue);
  }

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);

      const response = await fetch("https://api.jikan.moe/v4/random/anime");
      const anime = await response.json();
      setTitle([anime.data.title, anime.data.synopsis, anime.data.url]);
      setLoading(false);
    }
    fetchUsers();
  }, []);
  console.log(title);
  return (
    <>
      <Button onClicked={printLi}>
        {!printTrue ? "Get random anime" : "Hide"}
      </Button>
      <div>
        <ul>
          <br />
          {printTrue &&
            title.map((data) => (
              <li key={data.id}>{heads[title.indexOf(data)] + data}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
