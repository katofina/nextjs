import React from "react";
import { User } from "../types/user";
import styles from "../styles/UserTable.module.css";

interface Props {
  users: User[];
  onSelect: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<Props> = ({ users, onSelect, onDelete }) => {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <span>Name / Email</span>
        <span>Address</span>
        <span>Phone</span>
        <span>Website</span>
        <span>Company</span>
        <span>Actions</span>
      </div>
      {users.map((user) => (
        <div key={user.id} className={styles.row}>
          <span onClick={() => onSelect(user)} className={styles.clickable}>
            {user.name} <br /> {user.email}
          </span>
          <span>
            {user.address.city}, {user.address.street}
          </span>
          <span>{user.phone}</span>
          <span>{user.website}</span>
          <span>{user.company.name}</span>
          <span>
            <button
              onClick={() => onDelete(user.id)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserTable;
