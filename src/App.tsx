import { useState, useEffect } from 'react'
import FloorPlan from './components/FloorPlan/FloorPlan';

function App({ client }: any) {

  const [connected, setConnected] = useState<Boolean>(false)
  const [iotDevices, setIotDevices] = useState<Array<IotDevice>>([])

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
      <FloorPlan iotDevices={iotDevices} commandHandler={commandHandler} />
    </div>
  );
}

export default App;
