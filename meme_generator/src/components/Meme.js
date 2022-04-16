import meme_data from "../meme_data";
import { useState } from "react";
import React from "react";

export default function Meme() {
  const [allmemeImages, setAllmemeImages] = useState(meme_data);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllmemeImages(data.data.memes));
  }, []);

  console.log(allmemeImages);

  const [memeImg, setMemImg] = useState({
    RandomImg: "https://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  function getmemeImg() {
    const memearray = allmemeImages;
    const randomNO = Math.floor(Math.random() * memearray.length);
    const url = memearray[randomNO].url;
    setMemImg((prevmeme) => ({ ...prevmeme, RandomImg: url }));
    // const memeImg = url;
    console.log(url);
  }

  function handlechange(event) {
    const { name, value } = event.target;
    setMemImg((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  }

  return (
    <div className="meme">
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={memeImg.topText}
          onChange={handlechange}
          id="topText"
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          id="bottomText"
          value={memeImg.bottomText}
          onChange={handlechange}
        />
        <button onClick={getmemeImg} className="form--button">
          Get Meme Image 🎨
        </button>
      </div>
      <section className="meme--section">
        <img className="meme--img" src={memeImg.RandomImg} alt="memeImg" />
        <h1 className="meme--text top">{memeImg.topText}</h1>
        <h1 className="meme--text bottom">{memeImg.bottomText}</h1>
      </section>
    </div>
  );
}
