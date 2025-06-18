import React from "react";
import { User } from "../types/user";
import styles from "../styles/UserModal.module.css";

interface Props {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ user, onClose }) => {
  const mapLink = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          View on Map
        </a>
      </div>
    </div>
  );
};

export default UserModal;
