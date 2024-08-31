import { SignUp } from "@clerk/clerk-react";


const Signup = () => {
    return (
        <div className="flex justify-center items-center flex-col  gap-10">
            <h1 className="text-4xl font-bold mt-20">This is the SignUp page</h1>
            <SignUp/>
        </div>
    );
};

export default Signup;