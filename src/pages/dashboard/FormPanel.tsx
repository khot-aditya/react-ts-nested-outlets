import { useParams } from "react-router-dom"

const FormPanel = () => {

  const { id } = useParams()

  return (
    <div className="">

      FormPanel

      {id}
    </div>
  )
}

export default FormPanel