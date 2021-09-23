import React, { useState, useEffect } from "react";
import Wilder from "./components/wilder/Wilder";
import axios from "axios";
import AddWilder from "./components/wilder/AddWilder";

function App() {
  const [wilders, setwilders] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilder/read");
        setwilders(result.data.result);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, [wilders]);

  const styles: any = {
    wilderList: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
    },
    header: {
      backgroundColor: "#ff5467",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
    siteTitle: {
      margin: 0,
      color: "white",
    },
    content: {
      width: 700,
      marginRight: "auto",
      marginLeft: "auto",
    },
  };
  return (
    <div>
      <header style={styles.header}>
        <h1 style={{ ...styles.siteTitle, ...styles.content }}>Wilder Book</h1>
      </header>
      <section>
        <h2 style={styles.content}>Wilders</h2>
        <div style={styles.content}>
          <button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? "-" : "+"}
          </button>
          {showAddForm && <AddWilder />}
        </div>
        <ul style={{ ...styles.wilderList, ...styles.content }}>
          {wilders.map((wilder) => (
            <Wilder
              key={wilder.name}
              image="logo192.png"
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            ></Wilder>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
