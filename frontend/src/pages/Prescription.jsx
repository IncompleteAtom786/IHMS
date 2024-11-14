import { useState } from "react";
import Table from "../components/Table";
function PrescriptionForm() {
    const [prescriptionData, setPrescriptionData] = useState({
        Prescription_ID: "",
        Patient_ID: "",
        Date: "",
        Dosage: "",
        Doctor_ID: "",
        Medicine_ID: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPrescriptionData({
            ...prescriptionData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/prescription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prescriptionData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Prescription data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting prescription data:", error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Prescription Form</h2>
            <div className="flex w-full">
                <div className="flex flex-col w-1/2 p-2">
                    <div className="space-y-2">
                        <label className="block text-green-600">Prescription ID:</label>
                        <input
                            type="number"
                            name="Prescription_ID"
                            value={prescriptionData.Prescription_ID}
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
                            value={prescriptionData.Patient_ID}
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
                            value={prescriptionData.Date}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-1/2 p-2">
                    <div className="space-y-2">
                        <label className="block text-green-600">Dosage:</label>
                        <input
                            type="text"
                            name="Dosage"
                            value={prescriptionData.Dosage}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-green-600">Doctor ID:</label>
                        <input
                            type="number"
                            name="Doctor_ID"
                            value={prescriptionData.Doctor_ID}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-green-600">Medicine ID:</label>
                        <input
                            type="number"
                            name="Medicine_ID"
                            value={prescriptionData.Medicine_ID}
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
                <h2 className="text-2xl">Prescription Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Prescription ID", "Patient ID", "Date", "Dosage", "Doctor ID", "Medicine ID"]}
                        data={[
                            ["1", "1", "2021-09-01", "1 pill every 8 hours", "1", "1"],
                            ["2", "2", "2021-09-02", "2 pills every 12 hours", "2", "2"],
                            ["3", "3", "2021-09-03", "3 pills every 24 hours", "3", "3"]
                        ]}
                    />
                </div>
            </div>
        </>
    );
}

export default PrescriptionForm;