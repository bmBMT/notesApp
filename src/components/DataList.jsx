import React from "react";
import DataCard from "./DataCard";

const DataList = ({ type, datas, setDatas, setEditId }) => {
  function setDone(id) {
    setDatas(
      datas.map((data) => (data.id === id ? { ...data, isDone: true } : data))
    );
  }

  function removeData(id) {
    setEditId(null);
    setDatas(datas.filter((data) => data.id !== id));
  }

  return (
    <>
      {datas.map((data) => (
        <DataCard
          key={data.id}
          type={type}
          data={data}
          setDone={setDone}
          removeData={removeData}
          setEditId={setEditId}
        />
      ))}
    </>
  );
};

export default DataList;
