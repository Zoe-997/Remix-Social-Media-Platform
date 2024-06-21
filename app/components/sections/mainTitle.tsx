import { Link, useLocation } from "@remix-run/react";

import { Button } from "../ui/button";

interface MainTitleProps {
  title: React.ReactNode;
  copyright: React.ReactNode;
}

const MainTitle = ({ title,copyright }: MainTitleProps) => {
    const location = useLocation();

    return (
        <div className="flex flex-col items-center space-x-4 text-center p-4 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              {title}
            </h2>

            <div className="text-gray-500 my-2">
              {copyright}
            </div>

            {location.pathname === '/' &&
              <Button asChild>
                <Link to="/login">Join our Community</Link>
              </Button>
            }
        </div>
    );
}
 
export default MainTitle;