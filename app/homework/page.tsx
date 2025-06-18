"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import { User } from "./types/user";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      <UserTable
        users={users}
        onSelect={setSelectedUser}
        onDelete={handleDelete}
      />
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default App;
