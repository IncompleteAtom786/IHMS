import './App.css'
import { Route, Routes } from 'react-router-dom'
import AppointmentForm from "./pages/Appointment"
import BillForm from "./pages/Bill"
import PatientForm from "./pages/Patient"
import PrescriptionForm from "./pages/Prescription"
import RoomForm from "./pages/Room"
import StaffForm from "./pages/Staff"
import MedicineForm from "./pages/Medicine"
import Home from "./pages/Home"

import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/bill" element={<BillForm />} />
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/prescription" element={<PrescriptionForm />} />
        <Route path="/room" element={<RoomForm />} />
        <Route path="/staff" element={<StaffForm />} />
        <Route path="/medicine" element={<MedicineForm />} />
      </Routes>
    </>
  )
}

export default App
