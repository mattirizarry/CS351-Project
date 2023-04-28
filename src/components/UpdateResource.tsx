import { ChangeEvent, FC, useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useRouter } from "next/router";
import InputComponent, {InputField} from "./InputComponent";

interface UpdateResourceProps {
  fields: InputField[]
}

interface FormState {
  [key: string]: any
}

const UpdateResource: FC<UpdateResourceProps> = ({ fields }) => {

  const router = useRouter()

  const [formData, setFormData] = useState<FormState>({})

  const _setupState = () => {

    let initialized: FormState = {}

    fields.forEach(({id, value}: InputField) => {
      initialized[id] = value
    })

    setFormData(initialized)
  }

  const _handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    let updatedState = { ...formData }
    updatedState[e.currentTarget.id] = e.currentTarget.value

    setFormData(updatedState)
  }
  
  const _renderInputFields = () => 
    fields.map(({ id, type, placeholder }: InputField) => (
      <InputComponent 
        id={id}
        type={type}
        value={formData[id]}
        handler={_handleInput}
        placeholder={placeholder}
        key={id}
      />
    ))

  async function getResourceData(path: string) {
    const regex = /\/dashboard\/([^\/]+)\/(\d+)\/update/
    const match = path.match(regex)

    if (match) {
      const res = await fetch(`/api/v1/${match[1]}/${match[2]}`)
        .then((resp) => resp.json())
        .catch((error) => console.log(error))

      let newState = { ...formData }

      for (const key in res)
        newState[key] = res[key]

      setFormData(newState)
    }
  }

  async function submitChanges() {
    const response = await fetch('', {
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
  }

  useEffect(() => {
    _setupState()
    getResourceData(router.asPath)
  }, [router.asPath])

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