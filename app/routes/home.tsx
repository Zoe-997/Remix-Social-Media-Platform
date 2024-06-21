import { Outlet } from "@remix-run/react";

const Home = () => {
    return (
        <section>
            home
            <Outlet />
        </section>
    );
}
 
export default Home;