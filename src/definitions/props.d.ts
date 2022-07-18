type MenuProps = {
    settings: Settings
    updateSettings: (settingName: string, newValue: any) => void
}

type FloorPlanProps = {
    settings: Settings
    iotDevices: Array<IotDevice>
    commandHandler: (device: IotDevice, command: string) => void
}

type IconProps = {
    IotDevice: IotDevice
    settings: Settings
    commandHandler: (device: IotDevice, command: string) => void
}
