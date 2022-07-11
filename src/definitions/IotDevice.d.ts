interface IotDevice {
    connected: boolean
    name: string
    top: string
    left: string
    type: string
    [otherAttributes: string | number | symbol]: unknown
}
