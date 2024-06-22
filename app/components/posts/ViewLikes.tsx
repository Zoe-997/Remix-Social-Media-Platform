import { Link } from "@remix-run/react";
import { Star } from "lucide-react";

interface ViewLikesProps {
    likes: number;
    likeByUser: boolean;
    pathname: string;
}

const ViewLikes = ({
    likes,
    likeByUser,
    pathname
}: ViewLikesProps) => {
    return (
        <Link to={pathname} className="flex justify-center items-center group gap-2">
            <Star className={`w-4 h-4 group-hover:text-blue-400 ${likeByUser ? 'text-blue-400' : 'text-gray-500'}`} />
            <span className={`text-sm group-hover:text-blue-400 ${likeByUser ? 'text-blue-400' : 'text-gray-500'}`}>{likes}</span>
        </Link>
    );
}
 
export default ViewLikes;