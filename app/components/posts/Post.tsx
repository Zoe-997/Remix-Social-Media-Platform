import { Link } from "@remix-run/react";
import ReactMarkdown from "react-markdown";

import { PostProps } from "~/types/posts";

import { Card } from "../ui/card";
import Logo from "../logo";

const Post = ({
    avatarUrl,
    name,
    id,
    username,
    title,
    dataTimeString,
    userId,
    children,
}: PostProps) => {
    return (
        <Card className="rounded-xl shadow-md overflow-hidden min-h-[12rem]">
            <div className="flex">
                <div className="p-4 md:p-8 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img 
                                src={avatarUrl} 
                                alt={username} 
                                className="rounded-full"
                                style={{
                                    aspectRatio: "40/40",
                                    objectFit: "cover",
                                }}
                                height={40}
                                width={40}
                            />
                            <div>
                                <div className="text-sm md:text-lg font-semibold">
                                    <Link to={`/profile/${username}`}>{name}</Link>
                                </div>
                                <div className="text-sm md:text-md text-gray-400">
                                    <Link to={`/profile/${username}`}>{name}</Link>
                                </div>
                            </div>
                        </div>
                        <Logo className="h-8 w-8" />
                    </div>

                    <div className="mt-4 text-gray-500 text-sm prose">
                        <ReactMarkdown>{title}</ReactMarkdown>
                    </div>

                    <div className="flex mt-6 justify-between items-center">
                        <div className="flex space-x-4 text-gray-400">{children}</div>
                        <div className="text-gray-400 text-sm">{dataTimeString}</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
 
export default Post;