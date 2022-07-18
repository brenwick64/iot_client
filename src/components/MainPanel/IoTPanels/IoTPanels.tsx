import './IoTPanels.css'
import RelayPanel from './RelayPanel/RelayPanel'
import MotionSensorPanel from './MotionSensorPanel/MotionSensorPanel'
import SoilSensorPanel from './SoilSensorPanel/SoilSensorPanel'


export default function IoTPanels({ focusedDeviceKey, iotDevices, commandHandler }: MainPanelProps) {

    const focusedDevice = iotDevices.find(device => device.name === focusedDeviceKey)

    const renderIoTPanel = (device: IotDevice) => {
        switch (device.type) {
            case 'relay':
                return <RelayPanel focusedDevice={device} commandHandler={commandHandler} />
            case 'motionsensor':
                return <MotionSensorPanel focusedDevice={device} commandHandler={commandHandler} />
            case 'soilsensor':
                return <SoilSensorPanel focusedDevice={device} commandHandler={commandHandler} />
            default:
                return null
        }
    }

    return (
        <>
            {focusedDevice ? renderIoTPanel(focusedDevice) : null}
        </>
    )
}