import { useLoaderData, useNavigation } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import AvatarImage from "~/assets/logo.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import PostSearch from "~/components/posts/PostSearch";
import { Separator } from "~/components/ui/separator";
import Post from "~/components/posts/Post";
import ViewLikes from "~/components/posts/ViewLikes";
import ViewComments from "~/components/posts/ViewComments";
import WritePost from "~/components/posts/WritePost";

export const loader = ({ request }: LoaderFunctionArgs ) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const query = searchParams.get("query");

    return json({query});
}

const GitPosts = () => {
    const { query } = useLoaderData<typeof loader>();
    const navigation = useNavigation();
    const isSearching = Boolean(
        navigation.location && new URLSearchParams(navigation.location.state).has("query")
    );

    return (
        <div className="w-full max-w-xl px-4 flex flex-col mx-auto">
            <Tabs defaultValue="view-posts" className="my-2">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="view-posts">View Posts</TabsTrigger>
                    <TabsTrigger value="write-post">Write Post</TabsTrigger>
                </TabsList>
                <TabsContent value="view-posts">
                    <Separator />
                    <PostSearch isSearching={isSearching} searchQuery={query} />
                    <Post
                        avatarUrl={AvatarImage}
                        name="zoe trinh"
                        username="zoetrinh"
                        title={"## markdown title"}
                        userId="12345"
                        dataTimeString="22, Jun 2024"
                        id="25641"
                    >
                        <ViewLikes likes={2024} likeByUser={true} pathname={`/profile/zoetrinh`} />
                        <ViewComments comments={3} pathname={`/profile/zoetrinh`} />
                    </Post>
                </TabsContent>
                <TabsContent value="write-post">
                    <WritePost sessionUserId="12345" postId="1234" />
                </TabsContent>
            </Tabs>
        </div>
    );
}
 
export default GitPosts;