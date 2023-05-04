import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/NewCard.module.css";

const NewCard = ({ setEditId }) => {
  function onClick() {
    setEditId(1);
  }

  return (
    <div className={styles.newCard} onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default memo(NewCard);
