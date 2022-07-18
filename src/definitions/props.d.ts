type MenuProps = {
    settings: Settings
    updateSettings: (settingName: string, newValue: any) => void
}

type MenuOptionProps = {
    settings: Settings
    name: string
    checked: boolean
    updateSettings: (settingName: string, newValue: any) => void
}

type FloorPlanProps = {
    settings: Settings
    iotDevices: Array<IotDevice>
    commandHandler: (device: IotDevice, command: string) => void
    setFocusedDeviceKey: (focusedDeviceKey: string) => void
}

type IconProps = {
    IotDevice: IotDevice
    settings: Settings
    commandHandler: (device: IotDevice, command: string) => void
    setFocusedDeviceKey: (focusedDeviceKey: string) => void
}

type MainPanelProps = {
    focusedDeviceKey: string
    iotDevices: Array<IotDevice>
    commandHandler: (device: IotDevice, command: string) => void
}

type DevicePanelProps = {
    focusedDevice: IotDevice
    commandHandler: (device: IotDevice, command: string) => void
}