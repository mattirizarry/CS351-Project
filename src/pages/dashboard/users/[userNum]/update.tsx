import WriteResource from "@/src/components/WriteResource"
import { userFields } from "@/src/config/userFields"


const UpdateUser = () => {
  return (
    <WriteResource
      fields={userFields}
      operation="update"
    />
  )
}

export default UpdateUser