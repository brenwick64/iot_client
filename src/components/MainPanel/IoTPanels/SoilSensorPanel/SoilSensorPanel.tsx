import './SoilSensorPanel.css'
import { RiPlantFill } from 'react-icons/ri';

export default function SoilSensorPanel({ focusedDevice, commandHandler }: DevicePanelProps) {

    // Guard Typechecking
    const soilStatus = typeof focusedDevice.soilStatus === 'string' ? focusedDevice.soilStatus : null


    return (
        <>
            <h1 className="title-text">{focusedDevice.name}</h1>
            <RiPlantFill className={"icon " + soilStatus} size="150px" />
            <div className="status-container">
                <p className="status-text">Soil Moisture: <span className={"status-text-reactive " + soilStatus}>{soilStatus}</span></p>
            </div>
        </>
    )
}