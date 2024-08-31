import { useEffect, useState } from "react";
import { useAuth, useUser, UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const { userId } = useAuth(); 
    const { user } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (userId) {
                    // You can add any async operations you need here, like fetching additional data
                    console.log("User data is available, performing async operations...");
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
                }
            } catch (error) {
                console.error("Error during async operations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
            <div className="flex justify-center py-12">
                <div className="flex justify-center text-center gap-20 bg-[#3f416f] w-max mx-auto text-white px-8 py-4 rounded-lg">
                    <NavLink to="/">Dashboard</NavLink>
                    <NavLink to="/add">Add Data</NavLink>
                </div>
                {
                    userId? <div className="px-10 flex items-center gap-5">
                    <h1 className="text-white">{user.fullName}</h1>
                        <UserButton></UserButton>  
                    </div> : 
                    <div className="px-10 flex items-center gap-5">
                        <NavLink to='/login'><h1 className="text-lg font-semibold text-white">SignIn</h1></NavLink>
                        <NavLink to='/signup'><h1 className="text-lg font-semibold text-white">SignUp</h1></NavLink>
                    </div>
                }
            </div>
        );
    }
