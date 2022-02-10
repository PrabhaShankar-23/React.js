// ReactDOM.render(
//   // <h1> Enjoy the party!</h1>
//   <ul>
//     <li>Pizza</li> <li>cold drinks</li>
//   </ul>,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "This is the imperative way to understand! ";
// h1.className = "header";
// document.getElementById("root").append(h1);

const navbar = (
  // <Headers> React with the React!</Headers>
  <nav>
    <img src="./saraswati.jpg" width="100px"></img>
    <h1>Reasons I love Programming!</h1>
    <ul>
      <li>If you are a programmer then you are a magician!</li>
      <li>follow your workstyle</li>
      <li>freedom in career</li>
    </ul>

    <footer> copyright 2022 Psm. All rights reserved.</footer>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
