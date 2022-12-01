import { RouterProvider } from "react-router-dom";
import RootRouter from "./RootRouter";

const RootRouterProvider = () => {
    return (
        <RouterProvider router={RootRouter} />
    )
}

export default RootRouterProvider;