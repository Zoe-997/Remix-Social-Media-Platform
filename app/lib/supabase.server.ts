import  { createServerClient, parse, serialize } from "@supabase/ssr";

import { Database } from "../../database.types";

export const getSupabaseEnv = () => ({
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
});

export function getSupabaseWithHeader({ request }: { request: Request }) {
    const cookies = parse(request.headers.get('Cookie') ?? '')
    const headers = new Headers()

    const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
        cookies: {
        get(key: string) {
            return cookies[key]
        },
        set(key: string, value: string, options: any) {
            headers.append('Set-Cookie', serialize(key, value, options))
        },
        remove(key: string, options: any) {
            headers.append('Set-Cookie', serialize(key, '', options))
        },
        },
    });

    return { supabase, headers };
};

export  async function getSupabaseWithSessionAndHeader({ request }: { request: Request }) {
    const { supabase, headers } = getSupabaseWithHeader({ request });
    const { data: { session: serverSession } } = await supabase.auth.getSession();
    return { serverSession, supabase, headers}
}