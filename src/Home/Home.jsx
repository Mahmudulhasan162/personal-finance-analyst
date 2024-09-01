import FrontBoard from "../Layout/FrontBoard";
import Sidebar from "../Layout/Sidebar";

const Home = () => {
    return (
        <div>
            <div className="flex">
            <Sidebar></Sidebar>
            <FrontBoard></FrontBoard>
            </div> 
        </div>
    );
};

export default Home;