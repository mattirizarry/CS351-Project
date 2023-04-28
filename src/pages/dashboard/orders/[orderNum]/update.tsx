import UpdateResource, { InputField } from "@/src/components/UpdateResource"
import { useRouter } from "next/router"

const _fields: InputField[] = [
  {
    type: "date",
    placeholder: "Order Date",
    id: "orderDate",
    value: ""
  }
]

const UpdateOrder = () => {
  return (
    <UpdateResource 
      fields={_fields}
    />
  )
}

export default UpdateOrder