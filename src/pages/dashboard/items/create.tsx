import WriteResource from "@/src/components/WriteResource"
import { itemFields } from "@/src/config/itemFields"

const CreateItem = () => {
  return (
    <WriteResource
      fields={itemFields}
      operation="create"
    />
  )
}

export default CreateItem