import { Link } from "@remix-run/react";
import { MessageCircle } from "lucide-react";

interface ViewCommentsProps {
    comments: number;
    readonly?: boolean;
    pathname: string;
}

const ViewComments = ({
    comments,
    readonly,
    pathname
}: ViewCommentsProps) => {
    return (
        <>
            {readonly ? 
                <div className="flex justify-center items-center group gap-2 ">
                    <MessageCircle className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{comments}</span>
                </div>
            :             
                <Link to={pathname} className="flex justify-center items-center group gap-2 ">
                    <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
                    <span className="text-sm text-gray-500 group-hover:text-blue-400">{comments}</span>
                </Link>
            }
        </>
    );
}
 
export default ViewComments;