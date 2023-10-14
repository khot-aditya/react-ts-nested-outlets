import { useNavigate } from "react-router-dom";

const LeftPanel = () => {
    const navigate = useNavigate();

    const map = [
        {
            id: 1,
            name: 'Employee',
            slug: '/employee',
        },
        {
            id: 2,
            name: 'Department',
            slug: '/department',
        },
        {
            id: 3,
            name: 'Designation',
            slug: '/designation',
        },
        {
            id: 4,
            name: 'Leave',
            slug: '/leave',
        },
        {
            id: 5,
            name: 'Attendance',
            slug: '/attendance',
        },
        {
            id: 6,
            name: 'Payroll',
            slug: '/payroll',
        },
        {
            id: 7,
            name: 'Holiday',
            slug: '/holiday',
        },
        {
            id: 8,
            name: 'Notice',
            slug: '/notice',
        },
        {
            id: 9,
            name: 'Settings',
            slug: '/settings',
        },
    ]

    return (
        <div
            className="w-40 border-r h-screen flex flex-col items-center"
        >
            <div className="w-20 h-20 bg-gray-200 rounded-full"/>
  
            {
                map.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="w-full h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200"
                            onClick={() => navigate(`/dashboard${item.slug}`)}
                        >
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LeftPanel