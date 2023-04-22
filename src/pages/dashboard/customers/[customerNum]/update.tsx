import UpdateResource, { InputField } from "@/src/components/UpdateResource"

const _fields: InputField[] = [
  {
    type: "text",
    placeholder: "Customer Name",
    id: "customerName"
  },
  {
    type: "text",
    placeholder: "Address",
    id: "street"
  },
  {
    type: "text",
    placeholder: "City",
    id: "city"
  },
  {
    type: "text",
    placeholder: "State",
    id: "state"
  },
  {
    type: "number",
    placeholder: "Zip Code",
    id: "postalCode"
  },
  {
    type: "number",
    placeholder: "Balance",
    id: "balance"
  },
  {
    type: "number",
    placeholder: "Credit Limit",
    id: "creditLimit"
  }
]

const UpdateCustomer = () => {

  return (
    <UpdateResource 
      fields={_fields}
    />
  )
}

export default UpdateCustomer