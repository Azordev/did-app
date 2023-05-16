<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog ref="dialogRef">
      <q-card>
        <q-card-section class="row justify-end q-pb-none">
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="text-center q-pt-none">
          <div class="q-mb-sm">
            El tamaño ideal para las imágenes de avatar es de
            <b>100x100 píxeles</b>.
          </div>
          Te sugerimos ajustar tu imagen antes de subirla
          <q-file
            label-color="white"
            bg-color="dark"
            standout
            v-model="selectedFiles"
            label="Subir imagen"
            class="q-mt-md custom"
            accept="image/png, image/jpeg, image/jpg"
            @input="handleChange"
          >
            <template v-slot:append>
              <q-icon name="upload" color="white" />
            </template>
          </q-file>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { useDialogPluginComponent } from 'quasar';
import './styles.scss';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    uploadImage: {
      type: Function,
    },
  },
  emits: [...useDialogPluginComponent.emits],
  methods: {
    async handleChange(event) {
      await this.uploadImage(event);
      this.dialogRef.hide();
    },
  },
  setup() {
    const { dialogRef } = useDialogPluginComponent();
    return {
      dialogRef,
    };
  },
};
</script>
