import { createBrowserRouter } from "react-router-dom";
import { Home, ListBooks, RegisterBooks } from "../../screens";

const RootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {            
                index: true,
                element: <ListBooks />,
            },
            {
                path: '/list',
                element: <ListBooks />,
            },
            {
                path: '/register',
                element: <RegisterBooks />

            }
        ]
    }
])

export default RootRouter