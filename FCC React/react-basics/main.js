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
  <nav>
    <h1>Coffee Junkie</h1>
    <ul>
      <li>About</li>
      <li>Info</li>
      <li>findout</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
