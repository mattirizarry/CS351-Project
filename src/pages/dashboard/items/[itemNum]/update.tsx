import UpdateResource, { InputField } from "@/src/components/UpdateResource"

const _fields: InputField[] = [
  {
    type: "text",
    placeholder: "Description"
  },
  {
    type: "text",
    placeholder: "On Hand"
  },
  {
    type: "text",
    placeholder: "Category"
  },
  {
    type: "text",
    placeholder: "Storehouse"
  },
  {
    type: "number",
    placeholder: "Price"
  }
]

const UpdateItem = () => 
  <UpdateResource 
    fields={_fields}
  />

export default UpdateItem