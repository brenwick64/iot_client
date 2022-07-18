import './SoilSensorIcon.css'
import { RiPlantFill } from 'react-icons/ri';

function SoilSensorIcon({ IotDevice, settings, commandHandler, setFocusedDeviceKey }: IconProps) {

    // Guard typechecking
    const soilStatus = typeof IotDevice.soilStatus === 'string' ? IotDevice.soilStatus : null

    return (
        <>
            {settings['Plants'] &&
                <div className="soilsensor-icon" style={{ top: IotDevice.top, left: IotDevice.left }}>
                    <RiPlantFill
                        onClick={() => {
                            commandHandler(IotDevice, '')
                            setFocusedDeviceKey(IotDevice.name)
                        }}
                        className={'soil-sensor ' + soilStatus}
                        size='25px'
                    />
                    {settings['Labels'] && <p className="relay-label">{IotDevice.name}</p>}
                </div>}
        </>
    )
}

export default SoilSensorIcon