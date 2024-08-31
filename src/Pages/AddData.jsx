import { useState } from "react";

const AddData = () => {
    const [incomeData, setIncomeData] = useState({
        source: "",
        amount: "",
        frequency: "One-time",
        date: "",
        paymentMethod: "Bank Transfer",
        notes: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncomeData({
            ...incomeData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!incomeData.source) errors.source = "Income source is required";
        if (!incomeData.amount || isNaN(incomeData.amount) || incomeData.amount <= 0) {
            errors.amount = "Please enter a valid amount";
        }
        if (!incomeData.date) errors.date = "Date is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        // Handle form submission, e.g., sending data to the backend
        console.log(incomeData);
        alert("Income added successfully!");
        setIncomeData({
            source: "",
            amount: "",
            frequency: "One-time",
            date: "",
            paymentMethod: "Bank Transfer",
            notes: ""
        });
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Add Income</h2>
            <div className="mb-4">
    <label className="block text-sm font-medium mb-2">Income Source</label>
    <select
        name="source"
        value={incomeData.source}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg"
    >
        <option value="">Select an Income Source</option>
        <option value="Salary">Salary</option>
        <option value="Freelance">Freelance</option>
        <option value="Investments">Investments</option>
        <option value="Rental Income">Rental Income</option>
        <option value="Others">Others</option>
    </select>
    {errors.source && <p className="text-red-500 text-sm">{errors.source}</p>}
</div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Amount</label>
                <input
                    type="number"
                    name="amount"
                    value={incomeData.amount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Enter income amount"
                />
                {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Frequency</label>
                <select
                    name="frequency"
                    value={incomeData.frequency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                >
                    <option>One-time</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                    <option>Annually</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date Received</label>
                <input
                    type="date"
                    name="date"
                    value={incomeData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Payment Method</label>
                <select
                    name="paymentMethod"
                    value={incomeData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                >
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                    <option>Cheque</option>
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Others</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Notes</label>
                <textarea
                    name="notes"
                    value={incomeData.notes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Optional: Add any additional details"
                />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add Income
                </button>
                <button
                    type="button"
                    onClick={() => setIncomeData({
                        source: "",
                        amount: "",
                        frequency: "One-time",
                        date: "",
                        paymentMethod: "Bank Transfer",
                        notes: ""
                    })}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                    Reset
                </button>
            </div>
        </form>
    );
};

export default AddData;
