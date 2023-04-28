import WriteResource from "@/src/components/WriteResource"
import { orderFields } from "@/src/config/orderFields"

const CreateOrder = () => {
  return (
    <WriteResource
      fields={orderFields}
      operation="create"
    />
  )
}

export default CreateOrder