import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

import VideoDemo from "~/assets/videos/demo.mp4";

import Video from "~/components/sections/video";
import MainTitle from "~/components/sections/mainTitle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const mainTitle = (
    <p>
      A{" "}
      <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-animated-gradient">
        Community-Driven
      </span>{" "}
      Minimalist Social Platform for Coders
    </p>
  );

  const mainTitleCopyright = (
    <p>
      Powered by{" "}
      <span className="text-blue-700 font-bold">Remix</span> and{" "}
      <span className="text-green-700 font-bold">Supabase</span>
    </p>
  );
  
  return (
    <section>
      <div className="container md:flex justify-center items-center px-4 md:px-6 flex-1">
        <MainTitle title={mainTitle}
          copyright={mainTitleCopyright}
        />
        <Card className="relative group overflow-hidden rounded-lg md:w-1/2 max-h-[500px]">
          <CardContent className="p-1">
            <Video videoSrc={VideoDemo} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
