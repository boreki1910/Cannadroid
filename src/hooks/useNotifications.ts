import { useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';

export function useNotifications() {
  useEffect(() => {
    LocalNotifications.requestPermissions().then(() => {
      LocalNotifications.schedule({
        notifications: [
          {
            title: 'Daily Reminder',
            body: 'Check on your cannabis grow!',
            id: 1,
            schedule: { at: new Date(Date.now() + 10000) }, // 10 seconds from now
          },
        ],
      });
    });
  }, []);
}
