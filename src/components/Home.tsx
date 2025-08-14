import { useState, useEffect } from "react";
import backendAPI from "../services/backendAPI";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendAPI.get(
          "/?apikey=6120197f&s=Batman&page=2"
        );
        setMovies(response.data.Search || []); // Note: The array is in .Search
      } catch (error) {
        console.error("Error Fetching data:", error);
      }
    };
    console.log("Home component mounted, fetching data...");
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Movies state:", movies);
  }, [movies]);

  return (
    <div
      className="home-container"
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f2f5",
      }}
    >
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
