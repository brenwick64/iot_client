import './Menu.css'
import MenuOption from './MenuOption/MenuOption'

export default function Menu({ settings, updateSettings }: MenuProps) {

    return (
        <div className="checkboxes">
            <MenuOption settings={settings} updateSettings={updateSettings} name='Labels' checked={settings['Labels']} />
            <MenuOption settings={settings} updateSettings={updateSettings} name='Lights' checked={settings['Lights']} />
            <MenuOption settings={settings} updateSettings={updateSettings} name='Sensors' checked={settings['Sensors']} />
            <MenuOption settings={settings} updateSettings={updateSettings} name='Plants' checked={settings['Plants']} />
        </div>
    )
}