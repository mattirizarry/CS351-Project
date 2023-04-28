import WriteResource from "@/src/components/WriteResource"
import { userFields } from "@/src/config/userFields"

const CreateUser = () => {
  return (
    <WriteResource
      fields={userFields}
      operation="create"
    />
  )
}

export default CreateUser