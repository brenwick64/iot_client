import './FloorPlan.css'
import floor_plan from '../../images/floor_plan.png'

// IoT Icons
import RelayIcon from './IoTIcons/RelayIcon/RelayIcon'
import MotionSensorIcon from './IoTIcons/MotionSensorIcon/MotionSensorIcon'
import SoilSensorIcon from './IoTIcons/SoilSensorIcon/SoilSensorIcon'


export default function FloorPlan({ settings, iotDevices, commandHandler, setFocusedDeviceKey }: FloorPlanProps) {
    const renderIcon = (device: IotDevice) => {
        switch (device.type) {
            case 'relay':
                return <RelayIcon IotDevice={device} commandHandler={commandHandler} setFocusedDeviceKey={setFocusedDeviceKey} settings={settings} key={device.name} />
            case 'motionsensor':
                return <MotionSensorIcon IotDevice={device} commandHandler={commandHandler} setFocusedDeviceKey={setFocusedDeviceKey} settings={settings} key={device.name} />
            case 'soilsensor':
                return <SoilSensorIcon IotDevice={device} commandHandler={commandHandler} setFocusedDeviceKey={setFocusedDeviceKey} settings={settings} key={device.name} />
            default:
                return null
        }
    }

    return (
        <>
            <div className='floorplan-container'>
                <img alt='' src={floor_plan} />
                {iotDevices.map(device => {
                    return device.connected && renderIcon(device)
                })}
            </div>
        </>
    )
}