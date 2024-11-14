import { useState } from "react";
import Table from "../components/Table";
function MedicineForm() {
    const [medicineData, setMedicineData] = useState({
        Medicine_ID: "",
        M_Name: "",
        M_Quantity: "",
        M_Cost: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicineData({
            ...medicineData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/medicine", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(medicineData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Medicine data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting medicine data:", error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Medicine Form</h2>

            <div className="space-y-2">
                <label className="block text-green-600">Medicine ID:</label>
                <input
                    type="number"
                    name="Medicine_ID"
                    value={medicineData.Medicine_ID}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-green-600">Medicine Name:</label>
                <input
                    type="text"
                    name="M_Name"
                    value={medicineData.M_Name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-green-600">Quantity:</label>
                <input
                    type="number"
                    name="M_Quantity"
                    value={medicineData.M_Quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-green-600">Cost:</label>
                <input
                    type="number"
                    step="0.01"
                    name="M_Cost"
                    value={medicineData.M_Cost}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
        </form>
            <div className="w-full flex flex-col bg-gray-100 items-center mt-10">
                <h2 className="text-2xl">Medicine Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Medicine_ID", "M_Name", "M_Quantity", "M_Cost"]}
                        data ={
                            [
                                ["1", "ParacetaMol", "10", "10.00"],
                                ["2", "Ibuprofen", "20", "20.00"],
                                ["3", "Aspirin", "30", "30.00"]
                            ]
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default MedicineForm;