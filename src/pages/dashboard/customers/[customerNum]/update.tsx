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
    placeholder: "Balance"
  },
  {
    type: "number",
    placeholder: "Credit Limit"
  }
]

const UpdateCustomer = () => 
  <UpdateResource 
    fields={_fields}
  />

export default UpdateCustomer