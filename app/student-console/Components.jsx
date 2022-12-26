import Image from "next/image"
import Link from "next/link";

export { Banner, NavBar };

function Banner() {
  const disconnect = async() => {

  }

  return (
    <div className="banner">
      <ul className="container">
        <li className="logo">
          <Image className="logo-image" src="/jdlm-logo.png" alt="" width={930} height={347} priority />
        </li>
        <li className="disconnect">
          <button className="disconnect-button" onClick={disconnect}>Disconnecter</button>
        </li>
      </ul>
    </div>
  )
}

function NavBar() {
  return (
    <nav className="nav">

    </nav>
  )
}