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

function Header() {
  return (
    <headers>
      <nav className="nav-el">
        <img src="./saraswati.jpg" className="nav-logo"></img>

        <ul className="nav-items">
          <li>About</li>
          <li>Problems Solved</li>
          <li>Projects Made</li>
        </ul>
      </nav>
    </headers>
  );
}

function Footer() {
  return <footer> copyright 2022 Psm. All rights reserved.</footer>;
}

function Maincontent() {
  return (
    <div>
      <h1>Reasons I love Programming!</h1>
      <ul>
        <li>If you are a programmer then you are a magician!</li>
        <li>follow your workstyle</li>
        <li>freedom in career</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
