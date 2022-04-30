<template>
  <div class="Provider">
    <provider-header
      :tab-value="tabValue"
      :logo-url="provider.logo_url"
      :name="provider.commercial_name"
      @update:tab-value="$emit('update:tabValue', $event)"
    />
    <q-tab-panels
      :model-value="tabValue"
      @update:model-value="$emit('update:tabValue', $event)"
      animated
      class="bg-transparent"
    >
      <q-tab-panel name="history">
        {{ provider.details }}
      </q-tab-panel>

      <q-tab-panel name="products">
        <suspense>
          <template #default>
            <provider-products :id="id" :products="provider.products" />
          </template>
          <template #fallback>
            <base-loading />
          </template>
        </suspense>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { BaseLoading } from '../../components/LoadingComponent';
import providerHeader from './ProviderHeader.vue';

const ProviderProducts = defineAsyncComponent(
  () => import('./ProviderProducts.vue')
);

export default defineComponent({
  name: 'ProviderLayout',
  props: {
    tabValue: {
      type: String,
      default: 'history',
    },
    id: {
      type: String,
      default: '',
    },
    provider: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  emits: ['update:tabValue'],
  components: {
    ProviderProducts,
    BaseLoading,
    providerHeader,
  },
});
</script>
