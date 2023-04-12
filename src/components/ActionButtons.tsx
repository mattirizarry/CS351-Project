import Link from "next/link"
import { FC } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"

interface ActionButtonProps {
  resource: string
  resourceId: string
}

const ActionButtons: FC<ActionButtonProps> = ({ resource, resourceId }) => {
  return (
    <section className="action-buttons">
      <Link
        href={`/dashboard/${resource}/${resourceId}/update`}
        className="btn xs primary"
      >
        <FaEdit />
      </Link>
      <Link
        href={`/dashboard/${resource}/${resourceId}/delete`}
        className="btn xs delete"
      >
        <MdDeleteForever />
      </Link>
    </section>
  )
}

export default ActionButtons
