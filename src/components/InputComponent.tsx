import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react"

export interface InputField {
  type: HTMLInputTypeAttribute
  placeholder: string
  id: string
  value: any
  handler?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: FC<InputField> = ({ type, placeholder, id, value, handler}) => {
  return (
    <section className="input-field">
      <label>
        {}
      </label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={handler}
        id={id}
      />
    </section>
  )
}

export default InputComponent