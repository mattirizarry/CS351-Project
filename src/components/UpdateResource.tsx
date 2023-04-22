import { ChangeEvent, ChangeEventHandler, FC, HTMLInputTypeAttribute, MouseEventHandler, useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useRouter } from "next/router";

export interface InputField {
  type: HTMLInputTypeAttribute
  placeholder: string
  id: string
}

interface UpdateResourceProps {
  fields: InputField[]
}

interface FormState {
  [key: string]: any
}

const UpdateResource: FC<UpdateResourceProps> = ({ fields }) => {

  const router = useRouter()

  const regex = /\/dashboard\/([^\/]+)\/(\d+)\/update/
  const match = router.asPath.match(regex)

  let resource = 'resource'
  let resourceId = 'id'
  
  if (match) {
    resource = match[1]
    resourceId = match[2]
  }

  const url = `/api/v1/${resource}/${resourceId}/update`

  const [formData, setFormData] = useState<FormState>({})

  const _setupState = () => {

    let initialized: FormState = {}

    fields.forEach((field: InputField) => {
      initialized[field.id] = ""
    })

    setFormData(initialized)
  }

  const _handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    let updatedState = { ...formData };
    updatedState[e.currentTarget.id] = e.currentTarget.value

    setFormData(updatedState)
  }

  const _renderInputFields = () => 
    fields.map((field: InputField) =>
      <input 
        type={field.type} 
        placeholder={field.placeholder} 
        value={formData[field.id]}
        onChange={_handleInput}
        id={field.id}
      />
    )

  async function submitChanges() {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      response.json()
    })
    .catch(error => {
      console.log(error)
    })

    console.log(response)
  }

  useEffect(() => _setupState(), [])

  return (
    <main className="update-resource-page page-content">
      <h1>Update Resource</h1>
      <Breadcrumbs />
      {_renderInputFields()}
      <a onClick={submitChanges} className="btn secondary">Submit Changes</a>
    </main>
  )
}

export default UpdateResource;