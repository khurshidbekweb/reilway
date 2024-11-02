import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <>
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};

export default Root;