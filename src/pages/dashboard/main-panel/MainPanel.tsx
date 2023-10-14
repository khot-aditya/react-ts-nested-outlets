import { Outlet, useNavigate, useParams } from "react-router-dom"


const ListPanel = () => {

  const navigate = useNavigate()
  const { userId } = useParams()

  const handleClick = (name: string) => {
    navigate(`/dashboard/${userId}/${name}`)
  }

  const map = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
    { id: 3, name: 'Smith' },
  ]

  return (
    <div>
      <h1 className="w-full h-10 flex items-center px-5">{userId}</h1>

      <ul className="w-96 bg-gray-200 h-screen">
        {map.map((item) => (
          <li
            onClick={() => handleClick(item.name)}
            className="border-b border-gray-400 p-2 hover:bg-gray-300"
            key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}


const MainPanel = () => {


  return (
    <div className="flex">
      <ListPanel />
      <Outlet />
    </div>
  )
}

export default MainPanel