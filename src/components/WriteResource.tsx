import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useRouter } from "next/router";
import InputComponent, {InputField} from "./InputComponent";
import { AuthContext } from "../pages/_app";

interface UpdateResourceProps {
  fields: InputField[]
  operation: "create" | "update"
}

interface FormState {
  [key: string]: any
}

const WriteResource: FC<UpdateResourceProps> = ({ fields, operation }) => {

  const router = useRouter()
  const {token} = useContext(AuthContext)

  const [formData, setFormData] = useState<FormState>({})

  const _setupState = () => {

    let initialized: FormState = {}

    fields.forEach(({id, value}: InputField) => {
      initialized[id] = value
    })

    setFormData(initialized)
  }
  
  async function getResourceData(path: string) {

    const regex = /\/dashboard\/([^\/]+)\/([^\/]+)\/update/
    const match = path.match(regex)

    if (match) {
      const res = await fetch(`/api/v1/${match[1]}/${match[2]}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((resp) => resp.json())
        .catch((error) => {})
  
      // Update the state
  
      let newState = { ...formData }
  
      for (const key in res)
        newState[key] = res[key]
  
      setFormData(newState)
    }
  }

  async function createResource() {

    const regex = /\/dashboard\/([^\/]+)\/create/
    const match = router.asPath.match(regex)

    if (match) {
      const response = await fetch(`/api/v1/${match[1]}/create`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        router.push(`/dashboard/${match[1]}/${match[2]}`)
      })
      .catch(error => {
      })
    }
  }

  async function updateResource() {  
    
    const regex = /\/dashboard\/([^\/]+)\/([^\/]+)\/update/
    const match = router.asPath.match(regex)

    if (match) {
      // PATCH
      //
      // /api/v1/users/15/update
      
      const response = await fetch(`/api/v1/${match[1]}/${match[2]}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        router.push(`/dashboard/${match[1]}/${match[2]}`)
      })
      .catch(error => {
      })
    }
  }

  useEffect(() => {
    _setupState()

    if (operation == "update") {
      getResourceData(router.asPath)
    }
  }, [router.asPath, operation])

  const _handleInput = (e: ChangeEvent<HTMLInputElement>) => {

    let updatedState = { ...formData }
    updatedState[e.currentTarget.id] = e.currentTarget.value

    setFormData(updatedState)
  }

  const _renderHeader = () => {
    if (operation == "update") {
      return `Update Resource`
    }

    if (operation == "create") {
      return `Create Resource`
    }
  }

  const _renderInputFields = () => 
    fields.map(({ id, type, placeholder, minimum, pattern, maxLength, step, maximum }: InputField) => (
      <InputComponent 
        id={id}
        type={type}
        value={formData[id]}
        handler={_handleInput}
        placeholder={placeholder}
        minimum={minimum}
        maximum={maximum}
        pattern={pattern}
        maxLength={maxLength}
        key={id}
        step={step}
      />
    ))

  const _renderButton = () => {
    if (operation == "create") {
      return (
        <a onClick={createResource} className="btn delete">Create</a>
      )
    }

    if (operation == "update") {
      return (
        <a onClick={updateResource} className="btn delete">Update</a>
      )
    } 
  }

  return (
    <main className="write-resource-page page-content">
      <h1>{_renderHeader()}</h1>
      <Breadcrumbs />
      <section className="resource-data">
        {_renderInputFields()}
      </section>
      {_renderButton()}
    </main>
  )
}

export default WriteResource;