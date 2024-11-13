import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Employee ID:</label>
                <input type="number" name="Emp_ID" value={staffData.Emp_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" name="Emp_Fname" value={staffData.Emp_Fname} onChange={handleChange} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="Emp_Lname" value={staffData.Emp_Lname} onChange={handleChange} required />
            </div>
            <div>
                <label>Date of Joining:</label>
                <input type="date" name="Date_joining" value={staffData.Date_joining} onChange={handleChange} required />
            </div>
            <div>
                <label>Employee Type:</label>
                <input type="text" name="Emp_Type" value={staffData.Emp_Type} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="Email" value={staffData.Email} onChange={handleChange} required />
            </div>
            <div>
                <label>Department ID:</label>
                <input type="number" name="Dept_ID" value={staffData.Dept_ID} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default StaffForm;