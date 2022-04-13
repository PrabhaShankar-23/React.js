import meme_data from "../meme_data";

export default function Meme() {
  function getmemeImg() {
    const memearray = meme_data.data.memes;
    const randomNO = Math.floor(Math.random() * memearray.length);
    const url = memearray[randomNO].url;
    console.log(url);
  }

  return (
    <div className="form">
      <input className="form--input" type="text" placeholder="Top Text" />
      <input className="form--input" type="text" placeholder="Bottom Text" />
      <button onClick={getmemeImg} className="form--button">
        Get Meme Image 🎨
      </button>
    </div>
  );
}
