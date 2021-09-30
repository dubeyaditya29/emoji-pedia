import "./styles.css";
import { useState } from "react";

export default function App() {
  const title = "emoji-pedia";
  /* DataBase */
  const emojiDictionary = {
    "😀": "Grinning Face",
    "🤣": "Rolling on the Floor Laughing",
    "🙂": "Slightly Smiling Face",
    "😉": "Winking Face",
    "😍": "Smiling Face with Heart-Eyes",
    "😜": "Winking Face with Tongue",
    "🤑": "Money-Mouth Face",
    "😐": "Neutral Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face"
  };

  var imagesWeKnow = Object.keys(emojiDictionary);
  const [emojiDesc, setEmojiDesc] = useState("");
  const [clickableEmoji, setClickableEmoji] = useState("");
  const imageChangeHandler = (event) => {
    var img = event.target.value;
    setEmojiDesc(emojiDictionary[img]);
  };

  const clickImageChangeHandler = (event) => {
    var selectedImg = event.target.innerText;
    setClickableEmoji(emojiDictionary[selectedImg]);
  };

  return (
    <div className="App">
      <h1
        style={{
          color: "blue"
        }}
      >
        {title}
      </h1>
      <input onChange={imageChangeHandler} />
      <h2>{emojiDesc}</h2>

      <h2>Emojis we already know</h2>
      {imagesWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={clickImageChangeHandler}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
      <h2>{clickableEmoji}</h2>
    </div>
  );
}
