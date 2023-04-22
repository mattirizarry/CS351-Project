import UpdateResource, { InputField } from "@/src/components/UpdateResource"
import { useRouter } from "next/router"

const _fields: InputField[] = [
  {
    type: "text",
    placeholder: "Customer Name"
  },
  {
    type: "text",
    placeholder: "Address"
  },
  {
    type: "text",
    placeholder: "City"
  },
  {
    type: "text",
    placeholder: "State"
  },
  {
    type: "number",
    placeholder: "Zip Code"
  },
  {
    type: "number",
    placeholder: "Commission"
  },
  {
    type: "number",
    placeholder: "Rate"
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