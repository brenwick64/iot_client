import React from 'react'
import './FloorPlan.css'
import floor_plan from '../../images/floor_plan.png'

export default function FloorPlan({ iotDevices }: { iotDevices: Array<IotDevice> }) {
    return (
        <>
            <img alt='' src={floor_plan} />
        </>
    )
}