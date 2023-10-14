import { RouteObject, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import MainPanel from "./pages/dashboard/main-panel/MainPanel";
import Dashboard from "./pages/dashboard/Dashboard";
import FormPanel from "./pages/dashboard/FormPanel";

function AppRoutes() {

    const routes: RouteObject[] = [
        { path: '/', element: <Login /> },
        {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
                {
                    path: ':userId',
                    element: <MainPanel />,
                    children: [
                        {
                            path: ":id",
                            element: <FormPanel />,
                        }
                    ]
                },
            ]
        },
    ];

    return useRoutes(routes);
}

export default AppRoutes;