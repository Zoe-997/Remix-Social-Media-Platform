import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import Logo from "~/components/logo";
import { Button } from "../ui/button";

import AvatarImage from "~/assets/logo.png";

const Header = () => {
    const location = useLocation();
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const LogoContent = (
        <>
            <Logo className="inline-block align-middle h-8 w-8 md:h-10 md:w-10"/>
            <span className="ml-3 inline-block align-middle text-xl font-semibold text-zinc-900">Gitposter</span> 
        </>
    );
    
    return (
        <header>
            {(location.pathname === '/' || location.pathname === '/login') && 
                <nav className="flex items-center space-x-2 p-4">
                    {location.pathname === '/' ?
                        <h1>
                            {LogoContent}
                        </h1>
                        :
                        <Link to="/">{LogoContent}</Link>
                    }            
                </nav>
            }
            {(location.pathname !== '/' && location.pathname !== '/login') &&
                <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-zinc-200 p-4">
                    <Link to="/">{LogoContent}</Link>
                    <Button variant="ghost" onClick={() => setNavOpen(!navOpen)} className="md:hidden">
                        {navOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
                    </Button>
                    <div className={`flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${navOpen ? 'flex-col order-last w-full md:w-auto' : 'hidden md:flex gap-3'}`}>
                        <Link prefetch="intent" to={`/profile/zoetrinh`}>
                            @zoetrinh
                        </Link>
                        <img src={AvatarImage} alt="zoetrinh"
                            className="rounded-full"
                            style={{
                                aspectRatio: '40/40',
                                objectFit: 'cover',
                            }}
                            width={40}
                        />
                        <Button>Logout</Button>
                    </div>
                </nav>
            }
        </header>
    );
}
 
export default Header;