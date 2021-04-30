import React, { useState } from "react";
import "./styles.css";

// var userName = prompt("Give me your name");
// var txtColor = "blue";

// var likeCounter = 0;
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our database !";
    } else {
      setMeaning(meaning);
    }
    // console.log(meaning);
  }

  return (
    <div className="App">
      <input onChange={emojiInputHandler}></input>
      <p> Meaning: {meaning}</p>
    </div>
  );
}
