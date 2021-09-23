import React, { useState, useEffect } from "react";
import Wilder from "./components/wilder/Wilder";
import axios from "axios";

function App() {
  const [wilders, setwilders] = useState<any[]>([]);
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

  const styles = {
    body: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  };
  return (
    <div>
      <h1>Wilders</h1>
      <ul style={styles.body}>
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
    </div>
  );
}

export default App;
