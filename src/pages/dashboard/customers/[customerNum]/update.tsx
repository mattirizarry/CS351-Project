import WriteResource from "@/src/components/WriteResource"
import { customerFields } from "@/src/config/customerFields"

const UpdateCustomer = () => {
  return (
    <WriteResource 
      fields={customerFields}
      operation="update"
    />
  )
}

export default UpdateCustomer