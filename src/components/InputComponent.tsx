import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react"

export interface InputField {
  type: HTMLInputTypeAttribute
  placeholder: string
  id: string
  value: any
  handler?: (e: ChangeEvent<HTMLInputElement>) => void
  minimum?: number
  maximum?: number
  pattern?: string
  maxLength?: number
  step?: number
}

const InputComponent: FC<InputField> = ({ type, placeholder, id, value, handler, minimum, pattern, maxLength,step, maximum }) => {
  return (
    <section className="input-field">
      <input 
        type={type}
        value={value}
        onChange={handler}
        id={id}
        required
        min={minimum}
        pattern={pattern}
        maxLength={maxLength}
        step={step}
        max={maximum}
      />
      <label>
        {placeholder}
      </label>
    </section>
  )
}

export default InputComponent