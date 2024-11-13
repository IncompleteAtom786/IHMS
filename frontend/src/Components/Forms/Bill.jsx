import React, { useState } from "react";

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
            const response = await fetch("http://localhost:8383/bill", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(billData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Bill data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting bill data:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Payment ID:</label>
                <input type="number" name="Payment_ID" value={billData.Payment_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" name="Date" value={billData.Date} onChange={handleChange} required />
            </div>
            <div>
                <label>Room Cost:</label>
                <input type="number" step="0.01" name="Room_Cost" value={billData.Room_Cost} onChange={handleChange} required />
            </div>
            <div>
                <label>Test Cost:</label>
                <input type="number" step="0.01" name="Test_Cost" value={billData.Test_Cost} onChange={handleChange} required />
            </div>
            <div>
                <label>Other Charges:</label>
                <input type="number" step="0.01" name="Other_Charges" value={billData.Other_Charges} onChange={handleChange} required />
            </div>
            <div>
                <label>Medicine Cost:</label>
                <input type="number" step="0.01" name="M_Cost" value={billData.M_Cost} onChange={handleChange} required />
            </div>
            <div>
                <label>Total:</label>
                <input type="number" step="0.01" name="Total" value={billData.Total} onChange={handleChange} required />
            </div>
            <div>
                <label>Patient ID:</label>
                <input type="number" name="Patient_ID" value={billData.Patient_ID} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BillForm;