import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectsSection() {
  const input = useInput();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);

  function printLi() {
    setPrintTrue(!printTrue);
    fetchUsers(input.value);
  }

  async function fetchUsers(id) {
    setLoading(true);

    const response = await fetch("https://shikimori.one/api/animes/" + id);
    const anime = await response.json();
    setTitle(anime);
    setImage(anime.image.original);
    setLoading(false);
  }

  function openModal() {
    setModalOpen(true);
  }
  return (
    <>
      <section style={{ marginBottom: "1rem" }}>
        <h3>Modal window + parsing</h3>

        <Button onClicked={openModal}>Info</Button>
        <Modal open={modalOpen}>
          <h2>This is modal window!!</h2>
          <p>
            Here I'm trying something like a backend and taking data from from
            shikimori by id that user pasted
          </p>
          <Button onClicked={() => setModalOpen(false)}>Exit</Button>
        </Modal>
        <p>Find:</p>
        <input
          type="text"
          className="control"
          {...input}
          placeholder="paste shikimori id here"
        />
        <Button onClicked={printLi}>
          {!printTrue ? "Show data" : "Close data"}
        </Button>
      </section>
      <section>
        {!title.message ? (
          <>
            {printTrue && (
              <>
                <ul>{"Name: " + title.name}</ul>
                <ul>{"in Russian: " + title.russian}</ul>

                <img src={"https://shikimori.one" + image} alt="" />

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
        ) : (
          "there is no such page"
        )}
      </section>
    </>
  );
}
