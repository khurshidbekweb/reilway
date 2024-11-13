import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <>
            <main className="container mx-auto">
                <Outlet />
            </main>
        </>
    );
};

export default Root;