import { Outlet } from "@remix-run/react";

const Home = () => {
    return (
        <section>
            <Outlet />
        </section>
    );
}
 
export default Home;