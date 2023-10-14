import AppRoutes from "./Routes"

function App() {

  const Navbar = () => { 

    return (
      <div className="w-100 h-20 shadow-md flex items-center px-5">
        <h1>Navbar</h1>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  )
}

export default App
