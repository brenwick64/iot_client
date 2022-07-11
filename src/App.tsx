import { useState, useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket';

import FloorPlan from './components/FloorPlan/FloorPlan';




function App() {

  const client = new W3CWebSocket('ws://localhost:8000')
  const [connected, setConnected] = useState<Boolean>(false)
  const [iotDevices, setIotDevices] = useState<Array<IotDevice>>([])

  useEffect(() => {

    // Connects to websocket
    client.onopen = () => {
      setConnected(true)
    };

    // If the server disconnects, forces a screen refresh to clear out all IoT devices
    client.onclose = () => {
      window.location.reload();
    }

    // All server changes are updated to client-side state
    client.onmessage = (message: any) => {
      let iotState = JSON.parse(message.data);
      setIotDevices(iotState)
      console.log(iotDevices);
    }

  }, [])

  return (
    <div className="App">
      <FloorPlan iotDevices={iotDevices} />
    </div>
  );
}

export default App;
