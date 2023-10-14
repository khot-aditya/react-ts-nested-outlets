import { Outlet } from "react-router-dom"
import LeftPanel from "./LeftPanel"

const Dashboard = () => {
    return (
        <div className="w-screen h-screen flex">
            <LeftPanel />
            <Outlet />
        </div>
    )
}

export default Dashboard