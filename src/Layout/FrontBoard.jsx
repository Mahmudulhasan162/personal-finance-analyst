import '../CSS/FrontBoard.css'
const FrontBoard = () => {
    return (
        <div>
             <div className="dashboard">
            <div className="header">
                <div className="available-balance">
                    <h2>Available Balance</h2>
                    <h1>$14,822</h1>
                </div>
                <div className="total-net-worth">
                    <h2>Total Net Worth</h2>
                    <h1>$278,378</h1>
                </div>
            </div>
            <div className="content">
                <div className="income-source">
                    <h3>Income Source</h3>
                    {/* Bar chart component or income details here */}
                </div>
                <div className="spending-categories">
                    <h3>Spending Categories</h3>
                    {/* Spending details and pie chart component here */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default FrontBoard;