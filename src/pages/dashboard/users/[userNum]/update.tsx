import UpdateResource, { InputField } from "@/src/components/UpdateResource"

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

const UpdateUser = () => 
  <UpdateResource 
    fields={_fields}
  />

export default UpdateUser