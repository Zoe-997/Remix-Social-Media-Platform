import { useEffect, useState } from "react";
import { useRevalidator } from '@remix-run/react';
import  { createBrowserClient } from "@supabase/ssr";
import { Session, SupabaseClient } from "@supabase/supabase-js";

import { Database } from "../../database.types";

type SupabaseEnv = {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
}

type UseSupabase = {
    env: SupabaseEnv;
    serverSession: Session | null;
};

export const useSupabase = ({ env, serverSession }: UseSupabase) => {
    const [supabase] = useState(() => createBrowserClient<Database>(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!));

    useEffect(() => {
        const {data: { subscription }} = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token !== serverSession?.access_token) {
                useRevalidator().revalidate();
            }
        });
        return () => {
            subscription.unsubscribe();
        };
    }, [supabase.auth, serverSession, useRevalidator()]);

    return supabase;
}