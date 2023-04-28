import { InputField } from "@/src/components/InputComponent"
import UpdateResource from "@/src/components/UpdateResource"
import { useRouter } from "next/router"

const _fields: InputField[] = [
  {
    type: "text",
    placeholder: "Description",
    id: "description",
    value: ""
  },
  {
    type: "text",
    placeholder: "On Hand",
    id: "onHand",
    value: ""
  },
  {
    type: "text",
    placeholder: "Category",
    id: "category",
    value: ""
  },
  {
    type: "text",
    placeholder: "Storehouse",
    id: "storehouse",
    value: ""
  },
  {
    type: "number",
    placeholder: "Price",
    id: "price",
    value: ""
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