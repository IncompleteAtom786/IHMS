import { useState } from "react";
import Table from "../components/Table";
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
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md space-y-4 mt-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Room Details Form</h2>

            <div className="space-y-2">
                <label className="block text-green-600">Room ID:</label>
                <input
                    type="number"
                    name="Room_ID"
                    value={roomData.Room_ID}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-green-600">Room Type:</label>
                <input
                    type="text"
                    name="Room_Type"
                    value={roomData.Room_Type}
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
                    value={roomData.Patient_ID}
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
                    value={roomData.Room_Cost}
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
                <h2 className="text-2xl">Room Table</h2>
                <div className="p-10 w-fit h-fit flex flex-col">
                    <Table
                        columns={["Room ID", "Room Type", "Patient ID", "Room Cost"]}
                        data={[
                            ["1", "Semi-Private", "1", "500"],
                            ["2", "Private", "2", "1000"],
                            ["3", "Semi-Private", "3", "500"],
                            ["4", "Private", "4", "1000"],
                            ["5", "Semi-Private", "5", "500"],
                            ["6", "Private", "6", "1000"],
                            ["7", "Semi-Private", "7", "500"],
                            ["8", "Private", "8", "1000"],
                            ["9", "Semi-Private", "9", "500"],
                            ["10", "Private", "10", "1000"],
                        ]}
                    />
                </div>
            </div>
        </>

    );
}

export default RoomForm;