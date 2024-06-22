import { Link } from "@remix-run/react";
import { MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TextAlignTopIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

interface WritePostProps {
    sessionUserId: string;
    postId: string;
}

const WritePost = ({
    sessionUserId,
    postId,
}: WritePostProps) => {
    const [title, setTitle] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const postTitle = () => {
        console.log("Posting to server")
    };    

    useEffect(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = "inherit";
          const computed = window.getComputedStyle(textareaRef.current);
          const height =
            textareaRef.current.scrollHeight +
            parseInt(computed.getPropertyValue("border-top-width")) +
            parseInt(computed.getPropertyValue("border-bottom-width"));
          textareaRef.current.style.height = `${height}px`;
        }
      }, [title]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Write Post</CardTitle>
                <CardDescription>You can write your post in Md</CardDescription>
            </CardHeader>
            <CardContent>
                <Textarea
                    ref={textareaRef}
                    placeholder="Type your comment here (markdown supported)!!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-2"
                />
            </CardContent>
            <CardFooter>
                <Button onClick={postTitle}>Post</Button>
            </CardFooter>
        </Card>
    );
}
 
export default WritePost;