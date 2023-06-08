import React, { useState } from "react";
import Menu from "../components/UI/Menu/Menu";
import Header from "../components/Header";
import NewCard from "../components/NewCard";
import DataList from "../components/DataList";
import "../styles/AppWrapper.css";
import EditData from "../components/EditData";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppWrapper = ({ type }) => {
  const [editId, setEditId] = useState(null);
  const [datas, setDatas] = useLocalStorage(type, []);

  return (
    <main>
      <Menu title={type} editId={editId}>
        <DataList
          type={type}
          datas={datas}
          setDatas={setDatas}
          setEditId={setEditId}
        />
        {!editId && <NewCard setEditId={setEditId} />}
      </Menu>
      <div className="right-content">
        <Header />
        {editId && (
          <EditData
            type={type}
            datas={datas}
            setDatas={setDatas}
            editId={editId}
            setEditId={setEditId}
          />
        )}
      </div>
    </main>
  );
};

export default AppWrapper;
