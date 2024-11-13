import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Medicine ID:</label>
                <input type="number" name="Medicine_ID" value={medicineData.Medicine_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Medicine Name:</label>
                <input type="text" name="M_Name" value={medicineData.M_Name} onChange={handleChange} required />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" name="M_Quantity" value={medicineData.M_Quantity} onChange={handleChange} required />
            </div>
            <div>
                <label>Cost:</label>
                <input type="number" step="0.01" name="M_Cost" value={medicineData.M_Cost} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MedicineForm;