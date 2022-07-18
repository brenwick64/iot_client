import './MenuOption.css'

export default function MenuOption({ settings, name, checked, updateSettings }: MenuOptionProps) {

    return (
        <div className="checkbox-container">
            <input checked={checked} className="checkbox" id={name} name={name} type="checkbox" onChange={() => updateSettings(name, !checked)}></input>
            <label className="checkbox-label" htmlFor="show_labels">{name}</label>
        </div>
    )
}