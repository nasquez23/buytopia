import { createContext, FC, useState } from "react";
import {
  NotificationContextProps,
  NotificationProps,
  NotificationProviderProps,
} from "../types/types";
import Notification from "../components/Notification";

export const NotificationContext = createContext<
  NotificationContextProps | undefined
>(undefined);

export const NotificationProvider: FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notification, setNotification] = useState<NotificationProps | null>(
    null
  );

  const showNotification = (message: string, severity: "success" | "error") => {
    setNotification({
      message,
      severity,
      open: true,
      onClose: () => setNotification(null),
    });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          open={notification.open}
          message={notification.message}
          severity={notification.severity}
          onClose={notification.onClose}
        />
      )}
    </NotificationContext.Provider>
  );
};
