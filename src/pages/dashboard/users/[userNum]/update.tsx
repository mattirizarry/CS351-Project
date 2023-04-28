import { InputField } from "@/src/components/InputComponent"
import UpdateResource from "@/src/components/UpdateResource"

const _fields: InputField[] = [
  {
    type: "text",
    placeholder: "First Name",
    id: "firstName",
    value: ""
  },
  {
    type: "text",
    placeholder: "Last Name",
    id: "lastName",
    value: ""
  },
  {
    type: "text",
    placeholder: "Address",
    id: "street",
    value: ""
  },
  {
    type: "text",
    placeholder: "City",
    id: "city",
    value: ""
  },
  {
    type: "text",
    placeholder: "State",
    id: "state",
    value: ""
  },
  {
    type: "number",
    placeholder: "Zip Code",
    id: "postalCode",
    value: ""
  },
  {
    type: "number",
    placeholder: "Commission",
    id: "commission",
    value: ""
  },
  {
    type: "number",
    placeholder: "Rate",
    id: "rate",
    value: ""
  }
]

const UpdateUser = () => {
  return (
    <UpdateResource 
      fields={_fields}
    />
  )
}

export default UpdateUser