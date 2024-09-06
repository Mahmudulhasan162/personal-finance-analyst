import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

const AddData = () => {
    const {user} = useUser();

    const [formData, setFormData] = useState({
        email :  user?.primaryEmailAddress?.emailAddress,
        incomes: [{ source: "", amount: "", frequency: "One-time", date: "" }],
        expenses: [{ category: "", amount: "", date: "", paymentMethod: "", recurrence: "One-time" }],
        savings: [{ goal: "", amount: "", frequency: "One-time", account: "" }],
        debts: [{ type: "", balance: "", interestRate: "", minimumPayment: "", dueDate: "" }],
        investments: [{ type: "", value: "", growth: "", date: "" }],
        recurringPayments: [{ item: "", amount: "" }],
        budget: [{ category: "", amount: "" }],
        financialGoals: [{ shortTerm: "", longTerm: "" }]
    });

    const handleChange = (category, index, field, value) => {
        const updatedCategory = formData[category].map((item, idx) =>
            idx === index ? { ...item, [field]: value } : item
        );
        setFormData({ ...formData, [category]: updatedCategory });
    };
    
    

    const addField = (category) => {
        const newItem = category === 'incomes' ? { source: "", amount: "", frequency: "One-time", date: "" } :
                        category === 'expenses' ? { category: "", amount: "", date: "", paymentMethod: "", recurrence: "One-time" } :
                        category === 'savings' ? { goal: "", amount: "", frequency: "One-time", account: "" } :
                        category === 'debts' ? { type: "", balance: "", interestRate: "", minimumPayment: "", dueDate: "" } :
                        category === 'investments' ? { type: "", value: "", growth: "", date: "" } :
                        category === 'recurringPayments' ? { item: "", amount: "" } :
                        category === 'budget' ? { category: "", amount: "" } :
                        { shortTerm: "", longTerm: "" };

        setFormData({ ...formData, [category]: [...formData[category], newItem] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add any necessary validation before submitting

        try {
            const response = await fetch('http://localhost:5000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Data added successfully!');
                setFormData({
                    email : formData.email, 
                    incomes: [{ source: "", amount: "", frequency: "One-time", date: "" }],
                    expenses: [{ category: "", amount: "", date: "", paymentMethod: "", recurrence: "One-time" }],
                    savings: [{ goal: "", amount: "", frequency: "One-time", account: "" }],
                    debts: [{ type: "", balance: "", interestRate: "", minimumPayment: "", dueDate: "" }],
                    investments: [{ type: "", value: "", growth: "", date: "" }],
                    recurringPayments: [{ item: "", amount: "" }],
                    budget: [{ category: "", amount: "" }],
                    financialGoals: [{ shortTerm: "", longTerm: "" }]
                });
            } else {
                alert('Failed to add data. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-white">Add Financial Data</h2>

              {/* Email Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <input
                    type="email"
                    value={formData.email}
                    readOnly
                    className="w-full px-3 py-2 border rounded-lg bg-gray-200"
                />
            </div>

            {/* Income Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Incomes</h3>
                {formData.incomes.map((income, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Income Source"
                            value={income.source}
                            onChange={(e) => handleChange('incomes', index, 'source', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Amount"
                            value={income.amount}
                            onChange={(e) => handleChange('incomes', index, 'amount', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="date"
                            placeholder="Date"
                            value={income.date}
                            onChange={(e) => handleChange('incomes', index, 'date', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <select
                            value={income.frequency}
                            onChange={(e) => handleChange('incomes', index, 'frequency', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        >
                            <option value="One-time">One-time</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-weekly">Bi-weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                    </div>
                ))}
                <button type="button" onClick={() => addField('incomes')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Income
                </button>
            </div>

            {/* Expenses Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Expenses</h3>
                {formData.expenses.map((expense, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Expense Category"
                            value={expense.category}
                            onChange={(e) => handleChange('expenses', index, 'category', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Amount"
                            value={expense.amount}
                            onChange={(e) => handleChange('expenses', index, 'amount', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="date"
                            placeholder="Date"
                            value={expense.date}
                            onChange={(e) => handleChange('expenses', index, 'date', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <select
                            value={expense.paymentMethod}
                            onChange={(e) => handleChange('expenses', index, 'paymentMethod', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        >
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Cash">Cash</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                        <select
                            value={expense.recurrence}
                            onChange={(e) => handleChange('expenses', index, 'recurrence', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        >
                            <option value="One-time">One-time</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-weekly">Bi-weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                    </div>
                ))}
                <button type="button" onClick={() => addField('expenses')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Expense
                </button>
            </div>

            {/* Savings Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Savings</h3>
                {formData.savings.map((saving, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Savings Goal"
                            value={saving.goal}
                            onChange={(e) => handleChange('savings', index, 'goal', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Amount"
                            value={saving.amount}
                            onChange={(e) => handleChange('savings', index, 'amount', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <select
                            value={saving.frequency}
                            onChange={(e) => handleChange('savings', index, 'frequency', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        >
                            <option value="One-time">One-time</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-weekly">Bi-weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Savings Account"
                            value={saving.account}
                            onChange={(e) => handleChange('savings', index, 'account', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                    </div>
                ))}
                <button type="button" onClick={() => addField('savings')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Savings
                </button>
            </div>

            {/* Debts Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Debts</h3>
                {formData.debts.map((debt, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Debt Type"
                            value={debt.type}
                            onChange={(e) => handleChange('debts', index, 'type', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Outstanding Balance"
                            value={debt.balance}
                            onChange={(e) => handleChange('debts', index, 'balance', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Interest Rate"
                            value={debt.interestRate}
                            onChange={(e) => handleChange('debts', index, 'interestRate', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="number"
                            placeholder="Minimum Payment"
                            value={debt.minimumPayment}
                            onChange={(e) => handleChange('debts', index, 'minimumPayment', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="date"
                            placeholder="Payment Due Date"
                            value={debt.dueDate}
                            onChange={(e) => handleChange('debts', index, 'dueDate', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                    </div>
                ))}
                <button type="button" onClick={() => addField('debts')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Debt
                </button>
            </div>

            {/* Investments Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Investments</h3>
                {formData.investments.map((investment, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Investment Type"
                            value={investment.type}
                            onChange={(e) => handleChange('investments', index, 'type', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Investment Value"
                            value={investment.value}
                            onChange={(e) => handleChange('investments', index, 'value', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Investment Growth"
                            value={investment.growth}
                            onChange={(e) => handleChange('investments', index, 'growth', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                        <input
                            type="date"
                            placeholder="Investment Date"
                            value={investment.date}
                            onChange={(e) => handleChange('investments', index, 'date', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                    </div>
                ))}
                <button type="button" onClick={() => addField('investments')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Investment
                </button>
            </div>

            {/* Recurring Payments Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Recurring Payments</h3>
                {formData.recurringPayments.map((recurringPayment, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Subscription/Service"
                            value={recurringPayment.item}
                            onChange={(e) => handleChange('recurringPayments', index, 'item', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Payment Amount"
                            value={recurringPayment.amount}
                            onChange={(e) => handleChange('recurringPayments', index, 'amount', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                    </div>
                ))}
                <button type="button" onClick={() => addField('recurringPayments')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Recurring Payment
                </button>
            </div>

            {/* Budget Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Budget</h3>
                {formData.budget.map((budgetItem, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Budget Category"
                            value={budgetItem.category}
                            onChange={(e) => handleChange('budget', index, 'category', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Budget Amount"
                            value={budgetItem.amount}
                            onChange={(e) => handleChange('budget', index, 'amount', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                    </div>
                ))}
                <button type="button" onClick={() => addField('budget')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Budget Item
                </button>
            </div>

            {/* Financial Goals Section */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Financial Goals</h3>
                {formData.financialGoals.map((goal, index) => (
                    <div key={index} className="mb-4">
                        <input
                            type="text"
                            placeholder="Short-term Goals"
                            value={goal.shortTerm}
                            onChange={(e) => handleChange('financialGoals', index, 'shortTerm', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Long-term Goals"
                            value={goal.longTerm}
                            onChange={(e) => handleChange('financialGoals', index, 'longTerm', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg mt-2"
                        />
                    </div>
                ))}
                <button type="button" onClick={() => addField('financialGoals')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Add More Goal
                </button>
            </div>

            <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-lg">
                Submit
            </button>
        </form>
    );
    
};

export default AddData;
