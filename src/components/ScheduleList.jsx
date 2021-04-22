import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

import { getTickets } from '../helpers/getTickets';
import { ScheduleListItem } from './ScheduleListItem';


export const ScheduleList = () => {

    const { socket } = useContext(SocketContext);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        socket.on('from-server-update', (tickets) => {
            setTickets([])
            setTickets(tickets)
        });

        return () => {
            socket.off('from-server-update');
        }
    }, [socket])

    useEffect(() => {
        getTickets().then(
            (data) => {
                setTickets(data);
            }
        );
    }, []);



    return (
        <div>
            {
                tickets.map((hour) => {
                    return (
                        <ScheduleListItem
                            key={hour.id}
                            {...hour}
                        />
                    )
                })
            }
        </div>
    )
}
