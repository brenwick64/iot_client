import { useState, useEffect } from 'react'
import Menu from './components/Menu/Menu'
import FloorPlan from './components/FloorPlan/FloorPlan'

function App({ client }: any) {

  const [connected, setConnected] = useState<Boolean>(false)
  const [iotDevices, setIotDevices] = useState<Array<IotDevice>>([])
  const [settings, setSettings] = useState<Settings>({ showLabels: true, showLights: true, showSensors: true, showPlants: true })

  // Sends Child's command passed via child-to-parent props
  const commandHandler = (device: IotDevice, command: string) => {
    if (command) {
      client.send(JSON.stringify({
        type: "message",
        command: command,
        name: device.name
      }));
    }
  }

  const updateSettings = (settingName: string, newValue: any) => {
    const newSettings = Object.assign({}, settings, { [settingName]: newValue })
    setSettings(newSettings)
  }


  useEffect(() => {

    // Connects to websocket
    client.onopen = () => {
      console.log('Connected');
      setConnected(true)
    };

    client.onerror = (error: any) => {
      console.log(error);
    }

    // If the server disconnects, forces a screen refresh to clear out all IoT devices
    client.onclose = () => {
      window.location.reload();
    }

    // All server changes are updated to client-side state
    client.onmessage = (message: any) => {
      let iotState = JSON.parse(message.data);
      setIotDevices(iotState)
      console.log(iotState);
    }

  }, [])

  return (
    <div className="App">
      <Menu settings={settings} updateSettings={updateSettings} />
      <FloorPlan settings={settings} iotDevices={iotDevices} commandHandler={commandHandler} />
    </div>
  );
}

export default App;
