<template>
  <div class="providerHeader">
    <div class="providerHeader__topContainer">
      <q-img class="providerHeader__img" :src="logoUrl" />
      <q-btn size="10px" round color="accent" icon="shopping_basket">
        <q-badge
          class="providerHeader__btnBadge"
          floating
          rounded
          color="red"
        />
      </q-btn>
    </div>
    <q-form class="providerHeader__form" @submit="$emit('onSearch')">
      <q-input
        bg-color="secondary"
        outlined
        placeholder="Buscar producto..."
        @update:model-value="$emit('update:queryValue', $event)"
        :model-value="queryValue"
        class="providerHeader__form_search"
        :rounded="false"
      />
      <q-btn
        unelevated
        type="submit"
        color="primary"
        icon="search"
        class="providerHeader__form_button"
      />
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProviderProducts',
  props: {
    logoUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    queryValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:queryValue', 'onClear', 'onSearch'],
});
</script>
