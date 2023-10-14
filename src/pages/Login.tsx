import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard', { replace: true });
  }
  return (
    <div>
      <h1>Login</h1>
      <button className="w-32 h-10 rounded bg-yellow-700 text-white" onClick={goToDashboard}>
        Dashboard
      </button>
    </div>
  )
}

export default Login