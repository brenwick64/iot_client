import './MainPanel.css'
import { RiHomeWifiLine } from 'react-icons/ri';
import IoTPanels from './IoTPanels/IoTPanels';


export default function Panel({ focusedDeviceKey, iotDevices, commandHandler }: MainPanelProps) {

    return (
        <>
            {focusedDeviceKey === '' ?
                <div className="side-panel">
                    <div className="title-container">
                        <RiHomeWifiLine className="icon" size="150px" />
                        <h1 className="title-text">IoT Device Summary</h1>
                        <p className="title-subtext">Online Devices: <span className="title-subtext-reactive">{iotDevices.length}</span></p>
                    </div>
                    <div className="main-status-container">
                        <p className="title-subtext" style={{ color: '#fff', textDecoration: 'underline' }}>Cost Summary</p>
                        <p className="status-text">Curent IoT Kwh: <span className="status-text-reactive">04040</span></p>
                        <p className="status-text">Hourly Power Cost: <span className="status-text-reactive">$20</span></p>
                        <p className="status-text">Daily Power Cost: <span className="status-text-reactive">$100</span></p>
                    </div>
                </div>
                :
                <div className="side-panel">
                    <IoTPanels focusedDeviceKey={focusedDeviceKey} iotDevices={iotDevices} commandHandler={commandHandler} />
                </div>
            }
        </>
    )
}