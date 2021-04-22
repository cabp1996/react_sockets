import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

export const ScheduleListItem = ({ id, horario, disponibles }) => {

    const { socket } = useContext(SocketContext);

    const [disponible, setDisponible] = useState(disponibles);



    const handleOcuparTicket = () => {
        socket.emit('to-server-ocupar', id);
    }

    const handleLiberarTicket = () => {
        socket.emit('to-server-liberar', id);
    }


    const cardStatusClass = disponibles > 0 ? "card-header available" : "card-header notavailable";
    return (
        <div className="card border-success mb-3" >
            <div className={cardStatusClass}> <i className="fa fa-clock-o"></i> {id}.  Horario: {horario}</div>
            <div className="card-body">

                <p className="card-text">
                    Disponibles {disponible}/8
                </p>

                <div className="row">
                    <div className="col-sm-6">
                        <button
                            onClick={handleOcuparTicket}
                            className="btn btn-block btn-outline-primary"
                        >
                            <i className="fa fa-check"> Solicitar</i>
                        </button>
                    </div>
                    <div className="col-sm-6">
                        <button
                            onClick={handleLiberarTicket}
                            className="btn btn-block btn-outline-danger"
                        >
                            <i className="fa fa-trash"> Cancelar</i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
