import { useState } from "react";
import Table from "../components/Table";
function AppointmentForm() {
    const [appointmentData, setAppointmentData] = useState({
        Appt_ID: "",
        Date: "",
        Time: "",
        Doctor_ID: "",
        Patient_ID: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData({
            ...appointmentData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointmentData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Appointment data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting appointment data:", error);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Appointment Form</h2>

            <div className="space-y-2">
                <label className="block text-green-600">Appointment ID:</label>
                <input
                    type="number"
                    name="Appt_ID"
                    value={appointmentData.Appt_ID}
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
                    value={appointmentData.Date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-green-600">Time:</label>
                <input
                    type="time"
                    name="Time"
                    value={appointmentData.Time}
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
                    value={appointmentData.Doctor_ID}
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
                    value={appointmentData.Patient_ID}
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
                <h2 className="text-2xl">Appointment Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Appt_ID", "Date", "Time", "Doctor_ID", "Patient_ID"]}
                        data = {[
                            ["1", "2021-10-01", "10:00", "1", "1"],
                            ["2", "2021-10-02", "11:00", "2", "2"],
                            ["3", "2021-10-03", "12:00", "3", "3"],
                            ["4", "2021-10-04", "13:00", "4", "4"],
                            ["5", "2021-10-05", "14:00", "5", "5"]
                        ]}
                    />
                </div>
            </div>
        </>

    );
}

export default AppointmentForm;