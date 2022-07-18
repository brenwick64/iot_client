import './RelayPanel.css'
import { FaLightbulb } from 'react-icons/fa';


export default function RelayPanel({ focusedDevice, commandHandler }: DevicePanelProps) {

    //Guard typechecking
    const status = typeof focusedDevice.status === 'string' ? focusedDevice.status : null

    return (
        <>
            <h1 className="title-text">{focusedDevice.name}</h1>
            <FaLightbulb
                className="icon icon-clickable"
                size="150px"
                style={status === "on" ? { color: '#9ce8f6' } : { color: '#0f1219' }}
                onClick={() => commandHandler(focusedDevice, 'toggle')}
            />
            <div className="status-container">
                <p className="status-text">Status: <span style={status === "on" ? { color: "#43ea46" } : { color: "#ff595e" }} className="status-text-reactive">{status}</span></p>
                <p className="status-text">Kwh: <span className="status-text-reactive">0.1</span></p>
            </div>
        </>
    )
}