import WriteResource from "@/src/components/WriteResource"
import { itemFields } from "@/src/config/itemFields"



const UpdateItem = () => {
  return (
    <WriteResource 
      fields={itemFields}
      operation="update"
    />
  )
}

export default UpdateItem