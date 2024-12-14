import { useState, useEffect } from "react";
import Button from "./Button/Button";

export default function RandomAnime() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);
  const [genres, setGenres] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);
  const heads = ["Имя: ", "Описание: ", "Жанры: "];
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("https://shikimori.one/");
  const [description, setDescription] = useState("no description :(");

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

      // const response = await fetch("https://api.anilibria.tv/v3/title/random");
      // const anime = await response.json();
      // setTitle([
      //   anime.names.ru,
      //   anime.description,
      //   "https://anilibria.top/" + anime.posters.medium.url,
      // ]);
      // setGenres(anime.genres);
      // setLoading(false);

      const response = await fetch(
        "https://shikimori.one/api/animes/?order=random&score=7"
      );
      const anime = await response.json();
      const id = String(anime[0].id);
      console.log(id);
      const response2 = await fetch(
        "https://shikimori.one/api/animes/" + String(anime[0].id)
      );
      const anime2 = await response2.json();
      console.log(anime2);
      setTitle(anime2);
      setImage(anime2.image.original);
      setUrl("https://shikimori.one/" + anime2.url);
      setGenres(anime2.genres[0].russian);
      {
        anime2.description != null && setDescription(anime2.description);
      }
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
      {/* <div>
        <ul>
          <br />
          {printTrue && (
            <>
              <span>lol</span>
              <h3>{heads[0] + title[0]}</h3>
              <h3>{heads[1] + title[1]}</h3>
              <h3>{heads[2] + genres}</h3>
              <img src={title[2]} alt="ojol" height="400px" />
            </>
          )}
        </ul>
      </div> */}

      {printTrue && (
        <>
          <ul>
            <h3>{"Name: " + title.name}</h3>
          </ul>
          <ul>
            <h3>{"in Russian: " + title.russian}</h3>
          </ul>
          <ul>
            <h3>{"Genres: : " + genres}</h3>
          </ul>
          <ul>
            <h3>{"Description: : " + description}</h3>
          </ul>

          <a href={url} target="blank">
            <img src={"https://shikimori.one" + image} alt="" />
          </a>

          {/* <ul>
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(input.value.toLowerCase())
                )
                .map((user) => (
                  <li key={user.id}>{user.name}</li>
                ))}
            </ul> */}
        </>
      )}
    </>
  );
}
