import React, { useState } from "react";
import Spinner from "../components/spinner";
import "./index.css";

const apiUrl = process.env.REACT_APP_API_URL;

const GameOver = ({ time = 0, onBack = () => {} }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async () => {
    if (name.length < 4) {
      setError('Name must be at least 3 character')
      return
    }

    setLoading(true);
    setError(null);

    const payLoad = {
      name: name,
      score: time,
    };

    try {
      const response = await fetch(`${apiUrl}/memadd`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });

      if (!response.ok) {
        setError(`Request failed with status ${response.status}`)
      }

      onBack()
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gameOver">
      <p>{`Time elapsed ${time}`}</p>
      <label>
        {" "}
        Your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="buttons">
        <div className="btn" onClick={() => onBack()}>
          Cancel
        </div>
        <div className="btn" onClick={() => handleSave()}>
          Save score
        </div>
        
        </div>
        {loading && <Spinner />}
        <div className="error">
        {error}
      </div>
    </div>
  );
};

export default GameOver;
