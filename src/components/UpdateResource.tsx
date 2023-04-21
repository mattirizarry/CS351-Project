import { FC, HTMLInputTypeAttribute } from "react";
import Breadcrumbs from "./Breadcrumbs";

export interface InputField {
  type: HTMLInputTypeAttribute
  placeholder: string
}

interface UpdateResourceProps {
  fields: InputField[]
}

const UpdateResource: FC<UpdateResourceProps> = ({ fields }) => {

  const _renderInputFields = () => {
    return fields.map((field: InputField) => <input type={field.type} placeholder={field.placeholder} />)
  }

  return (
    <main className="update-resource-page page-content">
      <h1>Update Resource</h1>
      <Breadcrumbs />
      {_renderInputFields()}
      <a href="/api/v1/resource/:id/update" className="btn secondary">Submit Changes</a>
    </main>
  )
}

export default UpdateResource;