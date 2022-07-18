type FloorPlanProps = {
    iotDevices: Array<IotDevice>
    commandHandler: (device: IotDevice, command: string) => void
}

type IconProps = {
    IotDevice: IotDevice
    commandHandler: (device: IotDevice, command: string) => void
}
