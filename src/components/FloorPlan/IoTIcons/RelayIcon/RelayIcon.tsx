import './RelayIcon.css'
import lightbulb from '../../../../images/bulb.svg'


function RelayIcon({ IotDevice, settings, commandHandler }: IconProps) {

    // Guard typechecking
    const status = typeof IotDevice.status === 'string' ? IotDevice.status : null

    return (
        <>
            {settings['showLights'] &&
                <div className="relay-icon" style={{ top: IotDevice.top, left: IotDevice.left }}>
                    <input
                        src={lightbulb}
                        className={status === 'on' ? 'relay-button relay-on' : 'relay-button relay-off'}
                        type='image'
                        alt=''
                        value={IotDevice.name}
                        onClick={() => { commandHandler(IotDevice, 'toggle') }}
                    />
                    {settings['showLabels'] && <p className='relay-label'>{IotDevice.name}</p>}
                </div>}
        </>
    )
}

export default RelayIcon