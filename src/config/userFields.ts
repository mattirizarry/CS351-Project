import { InputField } from "../components/InputComponent";

export const userFields: InputField[] = [
  {
    type: "text",
    placeholder: "User Number",
    id: "userNum",
    value: "",
    maxLength: 3
  },
  {
    type: "text",
    placeholder: "First Name",
    id: "firstName",
    value: "",
    maxLength: 15
  },
  {
    type: "text",
    placeholder: "Last Name",
    id: "lastName",
    value: "",
    maxLength: 15
  },
  {
    type: "text",
    placeholder: "Address",
    id: "street",
    value: "",
    maxLength: 15
  },
  {
    type: "text",
    placeholder: "City",
    id: "city",
    value: "",
    maxLength: 15
  },
  {
    type: "text",
    placeholder: "State",
    id: "state",
    value: "",
    maxLength: 2
  },
  {
    type: "number",
    placeholder: "Zip Code",
    id: "postalCode",
    value: "",
    maxLength: 5
  },
  {
    type: "number",
    placeholder: "Commission",
    id: "commission",
    value: "",
    maximum: 99999,
    step: 0.01
  },
  {
    type: "number",
    placeholder: "Rate",
    id: "rate",
    value: "",
    maximum: 1,
    step: 0.01
  }
]
