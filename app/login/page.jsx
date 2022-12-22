"use client"

import { useState } from "react"
import Image from "next/image"
import "./login.scss"

export default function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  
  
  
  return (
    <div className="session">
      <div className="left">
          
      </div>
      <form action="" className="log-in" autocomplete="off"> 
        <h4>Collège Jean de la Mennais</h4>
        <div className="floating-label">
          <input placeholder="Username" type="text" name="username" id="username" autocomplete="off" />
          <label for="username">Username:</label>
          <div className="icon">
            <Image src="/username.png" alt="" width="30" height="30" className="image" />
          </div>
          {/* <a href="https://www.flaticon.com/free-icons/business-card" title="business card icons">Business card icons created by Tempo_doloe - Flaticon</a> */}
        </div>
        <div className="floating-label">
          <input placeholder="Password" type="password" name="password" id="password" autocomplete="off" />
          <label for="password">Password:</label>
          <div className="icon">
            <Image src="/password.png" alt="" width="30" height="30" className="image" />
            {/* <a href="https://www.flaticon.com/free-icons/key" title="key icons">Key icons created by Tempo_doloe - Flaticon</a> */}

          </div>
        </div>
        <button type="submit" onClick="return false;">Log in</button>
      </form>
    </div>
    )
  }