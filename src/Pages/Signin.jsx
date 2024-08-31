import { SignIn } from "@clerk/clerk-react";

 export default function Signin() {
    return (
        <div className="flex justify-center items-center flex-col gap-10">
            <h1 className="text-4xl font-bold mt-20">This is the SignIn page</h1>
            <SignIn></SignIn>
        </div>
    );
 }