import axios from "axios";
import React, { ChangeEvent, useState, FormEvent } from "react";

const AddWilder: React.FC = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post(
        "http://localhost:5000/api/wilder/create",
        {
          name,
          city,
        }
      );
      console.log(result);
      if (result.data.sucess) {
        setError("");
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name : </label>
      <input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <label htmlFor="city-input">City : </label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
      />
      {error !== "" && <span>{error}</span>}
      <button>{loading ? <img src="" alt="loading" /> : "Add"}</button>
    </form>
  );
};

export default AddWilder;
