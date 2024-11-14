import { useState } from "react";
import Table from "../components/Table";
function PatientForm() {
    const [patientData, setPatientData] = useState({
        Patient_ID: "",
        Patient_Fname: "",
        Patient_Lname: "",
        Blood_type: "",
        Email: "",
        Gender: "",
        Condition: "",
        Admission_Date: "",
        Discharge_Date: "",
        Phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({
            ...patientData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/patient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patientData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Patient data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting patient data:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Patient Form</h2>
                <div className="w-full flex">
                    <div className="flex flex-col w-1/2 p-2">
                        <div className="space-y-2">
                            <label className="block text-green-600">Patient ID:</label>
                            <input
                                type="number"
                                name="Patient_ID"
                                value={patientData.Patient_ID}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">First Name:</label>
                            <input
                                type="text"
                                name="Patient_Fname"
                                value={patientData.Patient_Fname}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Last Name:</label>
                            <input
                                type="text"
                                name="Patient_Lname"
                                value={patientData.Patient_Lname}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Blood Type:</label>
                            <input
                                type="text"
                                name="Blood_type"
                                value={patientData.Blood_type}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Email:</label>
                            <input
                                type="email"
                                name="Email"
                                value={patientData.Email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 p-2">
                        <div className="space-y-2">
                            <label className="block text-green-600">Gender:</label>
                            <input
                                type="text"
                                name="Gender"
                                value={patientData.Gender}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Condition:</label>
                            <input
                                type="text"
                                name="Condition"
                                value={patientData.Condition}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Admission Date:</label>
                            <input
                                type="date"
                                name="Admission_Date"
                                value={patientData.Admission_Date}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Discharge Date:</label>
                            <input
                                type="date"
                                name="Discharge_Date"
                                value={patientData.Discharge_Date}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Phone:</label>
                            <input
                                type="tel"
                                name="Phone"
                                value={patientData.Phone}
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
                <h2 className="text-2xl">Patient Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Patient ID", "Patient Name", "Blood Type", "Email", "Gender", "Condition", "Admission Date", "Discharge Date", "Phone"]}
                        data={
                            [
                                ["1", "John Doe", "O+", "johndoe@gmail.com","Male", "Covid-19", "2021-09-01", "2021-09-10", "1234567890"],
                                ["2", "Jane Doe", "AB-", "janedoe@gmail.com", "Female", "Covid-19", "2021-09-01", "2021-09-10", "1234567890"]
                            ]
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default PatientForm;