<template>
  <div class="ProductsQuantity">
    <q-btn
      dense
      flat
      rounded
      :disable="quantity <= 1"
      @click="$emit('onChange', quantity - 1)"
      class="ProductsQuantity__button"
    >
      -
    </q-btn>
    <q-input
      class="ProductsQuantity__input"
      bg-color="primary"
      color="secondary"
      dark
      dense
      type="number"
      min="1"
      :max="maxAvailable"
      :model-value="quantity"
      @update:model-value="(value) => onUserWriting(Number(value))"
    />
    <q-btn
      flat
      dense
      rounded
      :disable="quantity >= maxAvailable"
      @click="$emit('onChange', quantity + 1)"
      class="ProductsQuantity__button"
      >+</q-btn
    >
  </div>
</template>

<script setup lang="ts">
import { Notify } from 'quasar';
import './ProductsQuantity.scss';

interface ProductsQuantityProps {
  maxAvailable: number;
  quantity: number;
}

interface ProductsQuantityEmits {
  (eventName: 'onChange', value: number): void;
}

const props = defineProps<ProductsQuantityProps>();
const emit = defineEmits<ProductsQuantityEmits>();

let debounceTimeout = 0;

const onUserWriting = (value: number) => {
  clearTimeout(debounceTimeout);

  debounceTimeout = window.setTimeout(() => {
    if (value > props.maxAvailable) {
      Notify.create({
        message: `Solo hay ${props.maxAvailable} unidades disponibles de este producto`,
      });

      emit('onChange', props.maxAvailable);
      return;
    } else if (value < 1) {
      Notify.create({
        message: 'El valor no puede ser menor a 1',
      });

      emit('onChange', 1);
      return;
    }

    emit('onChange', value);
  }, 500);
};
</script>
