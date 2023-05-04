import React, { useCallback, useEffect, useMemo, useState } from "react";
import Input from "./UI/Input/Input";
import styles from "../styles/EditData.module.css";
import Textarea from "./UI/Textarea/Textarea";
import Button from "./UI/Button/Button";
import { getNewData, isDataInArr } from "../utils/data";

const EditData = ({ type, datas, setDatas, editId, setEditId }) => {
  const [tempData, setTempData] = useState({});
  useEffect(() => {
    if (isDataInArr(datas, editId)) {
      setTempData(datas.filter((data) => data.id === editId)[0]);
    } else {
      return setTempData(getNewData(type));
    }
  }, [editId]);

  function onChange(e, params) {
    setTempData({ ...tempData, [params]: e.target.value });
  }

  const cancel = useCallback(() => setEditId(null), []);

  const saveData = () => {
    if (isDataInArr(datas, editId)) {
      setDatas(datas.map((data) => (data.id === editId ? tempData : data)));
    } else {
      setDatas([...datas, tempData]);
    }
    setEditId(null);
  };

  return (
    <div className={styles.wrapper}>
      {"title" in tempData && (
        <Input
          value={tempData.title}
          onChange={(e) => onChange(e, "title")}
          title={"Title"}
        />
      )}
      <Textarea
        value={tempData.text}
        onChange={(e) => onChange(e, "text")}
        title={"Text"}
      />
      <div className={styles.submit}>
        <Button onClick={cancel}>cancel</Button>
        <Button onClick={saveData}>save</Button>
      </div>
    </div>
  );
};

export default EditData;
