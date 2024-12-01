import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [printTrue, setPrintTrue] = useState(false);

  function printLi() {
    setPrintTrue(!printTrue);
  }

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

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
            Here I'm trying something like a backend and taking data from
            https://jsonplaceholder.typicode.com/users
          </p>
          <Button onClicked={() => setModalOpen(false)}>Exit</Button>
        </Modal>
        <Button onClicked={printLi}>
          {!printTrue ? "Show data" : "Close data"}
        </Button>
      </section>
      <section>
        {printTrue && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
