interface IotDevice {
    connected: boolean
    name: string
    top: string
    left: string
    type: string
    [otherAttributes: string | number | symbol]: unknown
}

interface Settings {
    showLabels: boolean
    showLights: boolean
    showSensors: boolean
    showPlants: boolean
}
