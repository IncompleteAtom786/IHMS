import { useState } from "react";
import Table from "../components/Table";
function StaffForm() {
    const [staffData, setStaffData] = useState({
        Emp_ID: "",
        Emp_Fname: "",
        Emp_Lname: "",
        Date_joining: "",
        Emp_Type: "",
        Email: "",
        Dept_ID: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaffData({
            ...staffData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/staff", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(staffData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Staff data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting staff data:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Staff Form</h2>
                <div className="flex w-full">
                    <div className="flex flex-col w-1/2 p-2">
                        <div className="space-y-2">
                            <label className="block text-green-600">Employee ID:</label>
                            <input
                                type="number"
                                name="Emp_ID"
                                value={staffData.Emp_ID}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">First Name:</label>
                            <input
                                type="text"
                                name="Emp_Fname"
                                value={staffData.Emp_Fname}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Last Name:</label>
                            <input
                                type="text"
                                name="Emp_Lname"
                                value={staffData.Emp_Lname}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Date of Joining:</label>
                            <input
                                type="date"
                                name="Date_joining"
                                value={staffData.Date_joining}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 p-2">
                        <div className="space-y-2">
                            <label className="block text-green-600">Employee Type:</label>
                            <input
                                type="text"
                                name="Emp_Type"
                                value={staffData.Emp_Type}
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
                                value={staffData.Email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-green-600">Department ID:</label>
                            <input
                                type="number"
                                name="Dept_ID"
                                value={staffData.Dept_ID}
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
                <h2 className="text-2xl">Staff Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Employee ID", "First Name", "Last Name", "Date of Joining", "Employee Type", "Email", "Department ID"]}
                        data={[
                            ["EP001", "John", "Doe", "2021-10-01", "Doctor", "jdoctor@gmail.com", "D001"],
                            ["EP002", "Jane", "Doe", "2021-10-01", "Nurse", "jdnurse@gmail.com", "D002"],
                            ["EP003", "John", "Smith", "2021-10-01", "Receptionist", "reception@email.com", "D003"]
                        ]}
                    />
                </div>
            </div>
        </>

    );
}

export default StaffForm;