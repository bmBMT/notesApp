import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "./UI/Input/Input";
import styles from "../styles/EditData.module.css";
import Textarea from "./UI/Textarea/Textarea";
import Button from "./UI/Button/Button";
import { isDataInArr } from "../utils/data";
import Label from "./UI/Label/Label";
import uuid from "react-uuid";

const EditData = ({ type, datas, setDatas, editId, setEditId }) => {
  const titleRef = useRef();
  const textRef = useRef();
  const [initialTitle, setInitialTitle] = useState("");
  const [initialText, setInitialText] = useState("");

  useEffect(() => {
    if (isDataInArr(datas, editId)) {
      const updatingTodo = datas.filter((data) => data.id === editId)[0];
      setInitialTitle(updatingTodo.title);
      setInitialText(updatingTodo.text);
    }
  }, [editId]);

  const cancel = () => setEditId(null);

  const saveData = () => {
    const newTodo =
      type === "Notes"
        ? {
            id: uuid(),
            title: titleRef.current.value,
            text: textRef.current.value,
          }
        : { id: uuid(), text: textRef.current.value };

    if (isDataInArr(datas, editId)) {
      setDatas(datas.map((data) => (data.id === editId ? newTodo : data)));
    } else {
      setDatas([...datas, newTodo]);
    }
    setEditId(null);
  };

  return (
    <div className={styles.wrapper}>
      {type === "Notes" && (
        <div className={styles.column}>
          <Label htmlFor={"title"}>Title:</Label>
          <Input
            ref={titleRef}
            defaultValue={initialTitle}
            id={"title"}
            title={"Title"}
          />
        </div>
      )}
      <div className={styles.column} id={styles.textarea}>
        <Label htmlFor={"text"}>Text:</Label>
        <Textarea
          ref={textRef}
          defaultValue={initialText}
          id={"text"}
          title={"Text"}
        />
      </div>
      <div className={styles.submit}>
        <Button onClick={cancel}>cancel</Button>
        <Button onClick={saveData}>save</Button>
      </div>
    </div>
  );
};

export default EditData;
