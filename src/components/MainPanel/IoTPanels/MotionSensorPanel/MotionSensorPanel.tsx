import './MotionSensorPanel.css'
import { GiMovementSensor } from 'react-icons/gi';



export default function MotionSensorPanel({ focusedDevice, commandHandler }: DevicePanelProps) {

    //Guard typechecking
    const activeLog = Array.isArray(focusedDevice.activeLog) ? focusedDevice.activeLog : []
    const status = typeof focusedDevice.status === 'string' ? focusedDevice.status : null

    const renderActiveLog = () => {
        if (activeLog.length === 0) { return <p className="activity-log-entry">- Not Activated -</p> }
        else {
            return (
                <>
                    {activeLog.slice(0).reverse().map((entry: any, index: any) => {
                        return <p key={index} className={`activity-log-entry entry-${index}`}>{entry}</p>
                    })}
                </>
            )
        }
    }


    return (
        <>
            <h1 className="title-text">{focusedDevice.name}</h1>
            <GiMovementSensor className="icon" size="150px" color={status === "active" ? "#ff595e" : "#43ea46"} />
            <div className="status-container">
                <p className="status-text">Status: <span style={status === "active" ? { color: "#ff595e" } : { color: "#43ea46" }} className="status-text-reactive">{status}</span></p>
                <div className="activity-log">
                    <p className="status-text activity-log-title">Activation Log</p>
                    {renderActiveLog()}
                </div>
            </div>
        </>
    )
}