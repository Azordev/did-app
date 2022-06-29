import { Dialog } from 'quasar';
import { onBeforeRouteLeave } from 'vue-router';

type ConfirmBeforeExit = {
  title?: string;
  message?: string;
  currentRouteParent: string;
};

export const confirmBeforeExit = ({
  title = '¿Estás seguro de que quieres abandonar esta página?',
  message = 'Si sales de la página, se perderán los cambios',
  currentRouteParent,
}: ConfirmBeforeExit) => {
  onBeforeRouteLeave((to, from, next) => {
    const routeParent = to.matched[0];

    if (currentRouteParent && routeParent.path !== currentRouteParent) {
      Dialog.create({
        title: title,
        message: message,
        ok: {
          textColor: 'primary',
          color: 'secondary',
          label: 'Salir',
        },
        cancel: {
          push: true,
          color: 'primary',
          label: 'Cancelar',
        },
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
    } else {
      next();
    }
  });
};
