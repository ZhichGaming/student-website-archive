import { Suspense } from "react";
import { Loading } from "./loading.jsx"


export default function LoginPageLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="session">
        <div className="left"></div>
        
        <div className="form log-in">
          <h1>Collège Jean de la Mennais</h1>
          {children}
        </div>
      </div>
    </Suspense>
  )
}