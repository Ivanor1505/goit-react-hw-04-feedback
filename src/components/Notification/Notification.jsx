import React from 'react';
import { NotificationBox } from './Notification.styled';

export function Notification({ message }) {
  return <NotificationBox>{message}</NotificationBox>;
}
