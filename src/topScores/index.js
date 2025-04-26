import React, { useState, useEffect } from "react";
import "./index.css";

const apiUrl = process.env.REACT_APP_API_URL;

const TopScores = ({onReturnToGame = () => {}}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isoDateFormat = (isoDateString) => {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/memtop`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="topScores">
      <h1>Top scores</h1>
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((score, idx) => (
              <tr key={idx}>
                <td>{score.Name}</td>
                <td>{score.Score}</td>
                <td>{isoDateFormat(score.CreatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn" onClick={() => onReturnToGame()} >Return to the game</div>
    </div>
  );
};

export default TopScores;
