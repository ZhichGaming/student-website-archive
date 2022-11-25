import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <Logo />
      <Button val="Home" />
      <Button val="About us" />
    </nav>
  );
}

function Button(props) {
  return (
    <li>
      <button onClick={() => {}} value={props.val}>
        {props.val}
      </button>
    </li>
  );
}

function Logo() {
  return (
    <>
      <img src="img/poodle.png" alt="dog" className="logo" />
      <h1 className="logo-name">Curious Incident</h1>
    </>
  );
}
