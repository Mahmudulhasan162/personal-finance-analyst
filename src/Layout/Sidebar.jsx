/* eslint-disable react/no-unescaped-entities */
import '../CSS/Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="logo">
            <h2>Other Level's</h2>
        </div>
        <nav>
            <ul>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                    <li key={index}>{month}</li>
                ))}
            </ul>
        </nav>
    </div>
    );
};

export default Sidebar;