import { lazy, Suspense } from "react"

const Hub = lazy(() => import("./(consolepages)/Hub"))

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Hub />      
      </Suspense>
    </>
  )
}