<template>
  <div class="Provider">
    <provider-header
      :tab-value="tabValue"
      :logo-url="provider.logo_url"
      :name="provider.commercial_name"
      @update:tab-value="$emit('update:tabValue', $event)"
    />
    <div class="Provider__container">
      <suspense>
        <template #default>
          <provider-products :id="id" :products="provider.products" />
        </template>
        <template #fallback>
          <base-loading />
        </template>
      </suspense>
    </div>
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
