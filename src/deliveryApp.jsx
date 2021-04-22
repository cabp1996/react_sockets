
import React from 'react'
import { ScreenSchedule } from './components/ScreenSchedule'
import {  SocketProvider } from './context/SocketContext'
import { AppRouter } from './router/AppRouter';

export const DeliveryApp = () => {
    return (
        <SocketProvider>
            <AppRouter />
        </SocketProvider>
    );
}
