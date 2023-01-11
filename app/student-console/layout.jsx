import NavBar from "./NavBar.jsx"
import Banner from "../Banner.jsx"
import "./console.scss"


export default function HomeLayout({ children }) {
  return (
    <>
      <Banner />
      <NavBar />
      { children }
    </>
  )
}
