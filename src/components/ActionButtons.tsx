import Link from "next/link"
import { useRouter } from "next/router"
import { FC, MouseEventHandler, useContext } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { isAuthenticated } from "../lib/authlib"
import { AuthContext } from "../pages/_app"

interface ActionButtonProps {
  resource: string
  resourceId: string
}

const ActionButtons: FC<ActionButtonProps> = ({ resource, resourceId }) => {

  const router = useRouter()
  const {token} = useContext(AuthContext)

  const _handleDelete = async () => {
    const response = await fetch(`/api/v1/${resource}/${resourceId}/delete`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    router.reload()
  }

  return (
    <section className="action-buttons">
      <Link
        href={`/dashboard/${resource}/${resourceId.trim()}/update`}
        className="btn xs primary"
      >
        <FaEdit />
      </Link>
      <a
        className="btn xs delete"
        onClick={_handleDelete}
      >
        <MdDeleteForever />
      </a>
    </section>
  )
}

export default ActionButtons
