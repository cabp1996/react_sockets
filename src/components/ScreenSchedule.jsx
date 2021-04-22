import React from 'react'
import { ScheduleList } from './ScheduleList'

export const ScreenSchedule = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Horarios de entrega</h4>
                <hr />
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <ScheduleList />
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    )
}
