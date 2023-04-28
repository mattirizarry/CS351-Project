import WriteResource from "@/src/components/WriteResource"
import { orderFields } from "@/src/config/orderFields"

const UpdateOrder = () => {
  return (
    <WriteResource 
      fields={orderFields}
      operation="update"
    />
  )
}

export default UpdateOrder