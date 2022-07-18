import './MotionSensorIcon.css'


function MotionSensorIcon({ IotDevice, commandHandler }: IconProps) {

    // Guard typechecking


    return (
        <div className="relay-icon" style={{ top: IotDevice.top, left: IotDevice.left }}>

        </div>
    )
}

export default MotionSensorIcon