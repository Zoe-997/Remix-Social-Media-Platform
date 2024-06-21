import { Github } from "lucide-react";

import LoginButton from "~/components/sections/loginButton";
import MainTitle from "~/components/sections/mainTitle";
import { Card, CardContent } from "~/components/ui/card";

const Login = () => {
    const mainTitle = (
        <p>
          Login in using{" "}
          <p className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-animated-gradient">
            Github
          </p>{" "}
          and discover more
        </p>
    );

    return (
        <section>
            <div className="container md:flex flex-col justify-center items-center px-4 md:px-6 flex-1">
                <MainTitle title={mainTitle} copyright="Our posts ans comments are powered by Markdown" />
                <Card className="relative group overflow-hidden rounded-lg">
                    <CardContent className="p-1 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% animate-animated-gradient">
                        <LoginButton label="Github" icon={<Github />} onClick={() => console.log('login github')}/>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
 
export default Login;