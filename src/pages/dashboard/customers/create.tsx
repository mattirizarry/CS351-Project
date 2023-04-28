import WriteResource from "@/src/components/WriteResource"
import { customerFields } from "@/src/config/customerFields"

const CreateCustomer = () => {
  return (
    <WriteResource
      fields={customerFields}
      operation="create"
    />
  )
}

export default CreateCustomer