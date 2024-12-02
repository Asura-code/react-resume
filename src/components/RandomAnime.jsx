import { useState, useEffect } from "react";
import Button from "./Button/Button";

export default function RandomAnime() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);
  const [genres, setGenres] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);
  const heads = ["Имя: ", "Описание: ", "Жанры: "];

  function printLi() {
    setPrintTrue(!printTrue);
  }

  // useEffect(() => {
  //   async function fetchUsers() {
  //     setLoading(true);

  //     const response = await fetch("https://api.jikan.moe/v4/random/anime");
  //     const anime = await response.json();
  //     setTitle([anime.data.title, anime.data.synopsis, anime.data.url]);
  //     setLoading(false);
  //   }
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);

      const response = await fetch("https://api.anilibria.tv/v3/title/random");
      const anime = await response.json();
      setTitle([
        anime.names.ru,
        anime.description,
        "https://anilibria.tv/" + anime.posters.medium.url,
      ]);
      setGenres(anime.genres);
      setLoading(false);
      // console.log("lol" + anime.names.ru);
    }
    fetchUsers();
  }, []);
  return (
    <>
      {loading ? (
        "The request has been sent to the server, the response will be a random anime"
      ) : (
        <Button onClicked={printLi}>
          {!printTrue ? "Get random anime" : "Hide"}
        </Button>
      )}
      <div>
        <ul>
          <br />
          {printTrue && (
            <>
              <h3>{heads[0] + title[0]}</h3>
              <h3>{heads[1] + title[1]}</h3>
              <h3>{heads[2] + genres}</h3>
              <img src={title[2]} alt="ojol" height="400px" />
            </>
          )}
        </ul>
      </div>
    </>
  );
}
