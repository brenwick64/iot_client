import './FloorPlan.css'
import floor_plan from '../../images/floor_plan.png'
import RelayIcon from './IoTIcons/RelayIcon/RelayIcon'


export default function FloorPlan({ iotDevices, commandHandler }: FloorPlanProps) {
    const renderIcons = (device: IotDevice) => {
        switch (device.type) {
            case 'relay':
                return <RelayIcon IotDevice={device} commandHandler={commandHandler} key={device.name} />
            case 'motionsensor':
                return null
            case 'soilsensor':
                return null
            default:
                return null
        }
    }

    return (
        <>
            <div className='floorplan-container'>
                <img alt='' src={floor_plan} />
                {iotDevices.map(device => {
                    return renderIcons(device)
                })}
            </div>
        </>
    )
}