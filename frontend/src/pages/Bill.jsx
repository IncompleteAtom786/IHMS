import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
function BillForm() {
    const [billData, setBillData] = useState({
        Payment_ID: "",
        Date: "",
        Room_Cost: "",
        Test_Cost: "",
        Other_Charges: "",
        M_Cost: "",
        Total: "",
        Patient_ID: ""
    });
    const [bills, setBills] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillData({
            ...billData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8383/bill",{
                params: {
                    billData
                }
            });
            setBillData({
                Payment_ID: "",
                Date: "",
                Room_Cost: "",
                Test_Cost: "",
                Other_Charges: "",
                M_Cost: "",
                Total: "",
                Patient_ID: ""
            });
            fetchData();
        } catch (error) {
            console.error("Error submitting bill data:", error);
        }
    };
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8383/bill?tableName=bill");
            // console.log(response);
            setBills(response.data.tableData);
        } catch (error) {
            console.error("Error fetching bill data:", error);
        }
    };

    const deleteData = async (primaryKey) => {
        try {
            await axios.delete(`http://localhost:8383/bill?tableName=bill&primaryKey=${primaryKey}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting bill data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Bill Form</h2>

                <div className="flex">
                    <div className="w-1/2 p-2">
                        <div className="space-y-2">
                            <label className="block text-green-600">Payment ID:</label>
                            <input
                                type="number"
                                name="Payment_ID"
                                value={billData.Payment_ID}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Date:</label>
                            <input
                                type="date"
                                name="Date"
                                value={billData.Date}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Room Cost:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="Room_Cost"
                                value={billData.Room_Cost}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Test Cost:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="Test_Cost"
                                value={billData.Test_Cost}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="w-1/2 p-2">
                        <div className="space-y-2">
                            <label className="block text-green-600">Other Charges:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="Other_Charges"
                                value={billData.Other_Charges}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Medicine Cost:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="M_Cost"
                                value={billData.M_Cost}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Total:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="Total"
                                value={billData.Total}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Patient ID:</label>
                            <input
                                type="number"
                                name="Patient_ID"
                                value={billData.Patient_ID}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
            <div className="w-full flex flex-col bg-gray-100 items-center mt-10">
                <h2 className="text-2xl">Bill Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Payment ID", "Date", "Room Cost", "Test Cost", "Other Charges", "Medicine Cost", "Total", "Patient ID"]}
                        data={bills}
                        deleteFunction={deleteData}
                    />
                </div>
            </div>
        </>
    );
}

export default BillForm;
