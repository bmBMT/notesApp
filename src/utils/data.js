import uuid from "react-uuid";

export const getNewData = type => {
  const obj =
    type === "Todos" ? { text: "", isDone: false } : { title: "", text: "" };

  return {
    id: uuid(),
    ...obj,
  };
}

export const isDataInArr = (datas, id) => {
  const count = datas.reduce(
    (acc, data) => (data.id === id ? acc + 1 : acc),
    0
  );
  return count > 0;
}