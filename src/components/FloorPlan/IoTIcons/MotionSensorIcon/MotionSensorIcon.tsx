import './MotionSensorIcon.css'


function MotionSensorIcon({ IotDevice, settings, commandHandler, setFocusedDeviceKey }: IconProps) {

    // Guard typechecking
    const status = typeof IotDevice.status === 'string' ? IotDevice.status : null


    return (
        <>
            {settings['Sensors'] &&
                <div className="motionsensor-icon" style={{ top: IotDevice.top, left: IotDevice.left }}>
                    <div className='motion-sensor-container'>
                        <div
                            className={status === 'active' ? 'motion-sensor-border motion-sensor-border-active' : 'motion-sensor-border motion-sensor-border-inactive'}
                        >
                        </div>
                        <div
                            className={status === 'active' ? 'motion-sensor motion-sensor-active' : 'motion-sensor motion-sensor-inactive'}
                            onClick={() => {
                                commandHandler(IotDevice, '')
                                setFocusedDeviceKey(IotDevice.name)
                            }}
                        >
                        </div>
                    </div>
                    {settings['Labels'] && <p className="relay-label">{IotDevice.name}</p>}
                </div>}
        </>
    )
}

export default MotionSensorIcon