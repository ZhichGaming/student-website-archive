import Image from "next/image"
import React, { forwardRef } from "react"

/**
 * @param {{ type: string, reference: React.useRef, styles: styles.module}} props
 * @returns React.Component
 */
export default function LoginInput(props, ref) {
  return (
    <div className={props.styles.floatingLabel}>
      <input
        placeholder={props.type}
        type={props.type}
        name={props.type}
        autoComplete="off"
        ref={ref}
        className={props.styles.input}
        required
      />
      <label htmlFor={props.type}>{props.type}</label>
      <div className={props.styles.icon}>
        <Image src={`/login/${props.type.toLowerCase()}.png`} alt="" width="30" height="30" className={props.styles.image} />
        {/* <a href="https://www.flaticon.com/free-icons/key" title="key icons">Key icons created by Tempo_doloe - Flaticon</a> */}
      </div>
    </div>
  )
}
LoginInput = forwardRef(LoginInput);