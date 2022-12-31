import Image from "next/image"
import AccountButton from "./AccountButton"
import "./banner.scss"

export default function Banner() {
  return (
    <div className="banner">
      <ul className="container">
        <li className="logo">
          <Image className="logo-image" src="/jdlm-logo.png" alt="" width={930} height={347} priority />
        </li>
        <li className="disconnect">
          <AccountButton />
        </li>
      </ul>
    </div>
  )
}