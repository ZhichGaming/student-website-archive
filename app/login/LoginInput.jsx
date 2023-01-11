import Image from "next/image"
import React from "react"

/**
 * @param {{ type: string, reference: React.useRef, styles: styles.module}} props
 * @returns React.Component
 */
export default function LoginInput(props) {
  return (
    <div className={props.styles.floatingLabel}>
      <input placeholder={props.type} type={props.type} name={props.type} autoComplete="off" ref={props.reference} className={props.styles.input} />
      <label htmlFor={props.type}>{props.type}</label>
      <div className={props.styles.icon}>
        <Image src={`/login/${props.type.toLowerCase()}.png`} alt="" width="30" height="30" className={props.styles.image} />
        {/* <a href="https://www.flaticon.com/free-icons/key" title="key icons">Key icons created by Tempo_doloe - Flaticon</a> */}
      </div>
    </div>
  )
}