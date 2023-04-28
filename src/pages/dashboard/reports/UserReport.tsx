import Breadcrumbs from "@/src/components/Breadcrumbs"
import { ChangeEvent, useState } from "react"

const RepReport = () => {

  const [rep, setRep] = useState<string>("")

  return (
    <main className="page-content report-page">
      <h1>Generate Report</h1>
      <Breadcrumbs />
      <input type="text" value={rep} onChange={(e: ChangeEvent<HTMLInputElement>) => setRep(e.currentTarget.value)}></input>
    </main>
  )
}

export default RepReport