export const isDataInArr = (datas, id) => {
  const count = datas.reduce(
    (acc, data) => (data.id === id ? acc + 1 : acc),
    0
  );
  return count > 0;
}