import '../App.css';
import Header from './Header';
import { useState, useEffect, Redirect } from "react";
import VehicleRegistrationForm from './VehicleRegistrationForm';
export const VEHICLE_REGISTRATION = localStorage.getItem('vehicles')
    ? JSON.parse(localStorage.getItem('vehicles'))
    : ""

function VehicleRegistration() {
    const transitingID = localStorage.getItem('transitingIdInLocalStorage');

    const [vehicles, setVehicles] = useState(VEHICLE_REGISTRATION)
    const [trackingID, setTrackingID] = useState(transitingID)
    const [vehicleNumber, setVehicleNumber] = useState('')
    const [driver, setDriver] = useState('')

    const handleTrackingID = event => {
        console.log('TrackingID', event.target.value)
        setTrackingID(event.target.value)
    }

    const handleVehicle = event => {
        console.log('VehicleNumber', event.target.value)
        setVehicleNumber(event.target.value)
    }
    const handleDriver = event => {
        console.log('Driver', event.target.value)
        setDriver(event.target.value)
    }
    const handleSubmitForm = event => {
        event.preventDefault()
        if (driver !== '' && vehicleNumber !== '') {
            //single vehicle object
            const vehicle = { trackingID, driver, vehicleNumber }
            //using spread operator to access previous values 
            setVehicles([...vehicles, vehicle])

            //CLEAN INPUT FIELD
            setTrackingID('')
            setDriver('')
            setVehicleNumber('')
        } else {
            console.log('Invalid input details')
        }

    }

    useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles))
    }, [vehicles])

    return (
        <div className="dashboard">
            <Header />

            <VehicleRegistrationForm
                trackingID={trackingID}
                vehicleNumber={vehicleNumber}
                driver={driver}
                handleTrackingID={handleTrackingID}
                handleVehicle={handleVehicle}
                handleDriver={handleDriver}
                handleSubmitForm={handleSubmitForm}
             //   handleRedirect={handleRedirect}
            />
            
        </div>


    );
}

export default VehicleRegistration