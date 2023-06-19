import React, { useState } from "react";
import ChirpCard from "./Card"
const App = () => {

  const [username, setUsername] = useState("");
  const [chirp, setChirp] = useState("");

  const [chirpCollection, setChirpCollection] = useState([
    {
      username: '@Jules_Winnfield',
      message: "Hamburgers! 🍔 The cornerstone of any nutritious breakfast. 😋 ",

    },
    {
      username: '@Vincent_Vega',
      message: "I gotta know what a five dollar milkshake tastes like. 💰🥤",
    },
    {
      username: '@Butch_Coolidge',
      message: "🏍️ Zed's dead, baby.  Zed's dead. 🏍️"
    },
  ]);



  let newchirps = () => {
    setChirpCollection([...chirpCollection, { username: username, message: chirp }]);
  };

  return (
    <>
      <div className="form form-control my-4 w-25 ps-3">
        <h1>Just Wing It</h1>

        <input value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} /> <br />
        <input value={chirp} placeholder="what's on your mind?" onChange={(e) => setChirp(e.target.value)} /> <br />


        <button className="btn btn-primary my-2" onClick={() => { newchirps() }}>🐦Chirp! 🐦</button>
      </div>




      <ul className="list-group">
        {chirpCollection.map((val) => {
          return (
            <li className="list-group-item" key={chirp.id}>
              <ChirpCard username={val.username} message={val.message} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;