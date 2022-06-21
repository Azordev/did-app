import { Dialog } from 'quasar';
import { onBeforeRouteLeave } from 'vue-router';

type ConfirmBeforeExit = {
  title?: string;
  message?: string;
  currentRoute: string;
};

export const confirmBeforeExit = ({
  title = '¿Estás seguro de que quieres dejar esta página?',
  message = 'Si sales de la página, se perderán los cambios',
  currentRoute,
}: ConfirmBeforeExit) => {
  onBeforeRouteLeave((to, from, next) => {
    if (currentRoute && to.path.indexOf(currentRoute) === -1) {
      Dialog.create({
        title: title,
        message: message,
      })
        .onOk(() => {
          next();
        })
        .onCancel(() => {
          next(false);
        })
        .onDismiss(() => {
          next(false);
        });
    }
  });
};
