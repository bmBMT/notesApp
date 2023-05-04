import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "./UI/Card/Card";
import styles from "../styles/DataCard.module.css";

const DataCard = ({ type, data, setDone, removeData, setEditId }) => {
  function setEdit() {
    setEditId(null);
    setEditId(data.id);
  }

  return (
    <Card>
      {data.isDone && <div className={styles.done} />}
      {"title" in data && <div className={styles.title}>{data.title}</div>}
      <div className={styles.text}>{data.text}</div>
      <div className={styles.actions}>
        {!data.isDone && <FontAwesomeIcon icon={faPen} onClick={setEdit} />}
        {type === "Todos" && !data.isDone && (
          <FontAwesomeIcon icon={faXmark} onClick={() => setDone(data.id)} />
        )}
        <FontAwesomeIcon icon={faTrash} onClick={() => removeData(data.id)} />
      </div>
    </Card>
  );
};

export default DataCard;
