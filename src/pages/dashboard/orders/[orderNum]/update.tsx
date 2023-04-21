import UpdateResource, { InputField } from "@/src/components/UpdateResource"

const _fields: InputField[] = [
  {
    type: "date",
    placeholder: "Order Date"
  }
]

const UpdateOrder = () => 
  <UpdateResource 
    fields={_fields}
  />

export default UpdateOrder