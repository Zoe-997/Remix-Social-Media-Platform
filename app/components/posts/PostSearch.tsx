import { useRef, useState } from "react";
import { Form, useSubmit } from "@remix-run/react";
import { Loader2 } from "lucide-react";

import { Input } from "../ui/input";

interface PostSearchProps {
    searchQuery: string | null
    isSearching: boolean;
}

const PostSearch = ({
    searchQuery,
    isSearching
}: PostSearchProps) => {
    const [query, setQuery] = useState<string>(searchQuery || '');
    const submit = useSubmit();
    const formRef = useRef<HTMLFormElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    return (
        <div className="flex justify-between items-center my-3">
            <h2 className="mf:text-xl font-heading font-semibold w-7/12">
                {query ? `Result for "${query}"` : 'All posts'}
            </h2>
            <div className="w-1/12 flex justify-center">
                {isSearching && <Loader2 className="h-4 w-4 animate-spin" />}
            </div>

            <Form
                role="search"
                ref={formRef}
                id="search-form"
                className="w-4/12 flex"
                onChange={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
            >
                <Input
                    type="search"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search posts..."
                />
            </Form>
        </div>
    );
}
 
export default PostSearch;