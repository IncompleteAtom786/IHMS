import React, { useState } from "react";

function RoomForm() {
    const [roomData, setRoomData] = useState({
        Room_ID: "",
        Room_Type: "",
        Patient_ID: "",
        Room_Cost: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData({
            ...roomData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8383/room", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(roomData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Room data submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting room data:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Room ID:</label>
                <input type="number" name="Room_ID" value={roomData.Room_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Room Type:</label>
                <input type="text" name="Room_Type" value={roomData.Room_Type} onChange={handleChange} required />
            </div>
            <div>
                <label>Patient ID:</label>
                <input type="number" name="Patient_ID" value={roomData.Patient_ID} onChange={handleChange} required />
            </div>
            <div>
                <label>Room Cost:</label>
                <input type="number" step="0.01" name="Room_Cost" value={roomData.Room_Cost} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default RoomForm;