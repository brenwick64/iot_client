import './Menu.css'

export default function Menu({ settings, updateSettings }: MenuProps) {

    return (
        <div className="checkboxes">
            {/* TODO: Break into components */}
            <div className="checkbox-container">
                <input checked={settings['showLabels']} className="checkbox" id="showLabels" name="showLabels" type="checkbox" onChange={() => updateSettings('showLabels', !settings['showLabels'])}></input>
                <label className="checkbox-label" htmlFor="show_labels">Labels</label>
            </div>
            <div className="checkbox-container">
                <input checked={settings['showLights']} className="checkbox" id="showLights" name="showLights" type="checkbox" onChange={() => updateSettings('showLights', !settings['showLights'])}></input>
                <label className="checkbox-label" htmlFor="show_labels">Lights</label>
            </div>
            <div className="checkbox-container">
                <input checked={settings['showSensors']} className="checkbox" id="showSensors" name="showSensors" type="checkbox" onChange={() => updateSettings('showSensors', !settings['showSensors'])}></input>
                <label className="checkbox-label" htmlFor="show_labels">Sensors</label>
            </div>
            <div className="checkbox-container">
                <input checked={settings['showPlants']} className="checkbox" id="showPlants" name="showPlants" type="checkbox" onChange={() => updateSettings('showPlants', !settings['showPlants'])}></input>
                <label className="checkbox-label" htmlFor="show_labels">Plants</label>
            </div>
        </div>
    )
}