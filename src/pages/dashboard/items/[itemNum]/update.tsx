import UpdateResource, { InputField } from "@/src/components/UpdateResource"
import { useRouter } from "next/router"

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

const UpdateItem = () => {
  return (
    <UpdateResource 
      fields={_fields}
    />
  )
}

export default UpdateItem