<template>
  <div class="Providers">
    <header-with-back-btn class="Providers__header" label="Proveedores" />

    <div class="Providers__content">
      <list-grid
        className="ProvidersList"
        :isLoading="isLoading"
        :listItemsLength="providers?.length || 0"
      >
        <provider-card
          v-for="provider in providers"
          :key="provider.id"
          @onClick="
            $router.push({
              name: 'providerDetail',
              params: { provider: provider.id },
            })
          "
          class="ProvidersList__item"
          :image_url="provider.logo_url || DIDLogo"
        />
      </list-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListGrid from '../../components/ListGrid';
import { HeaderWithBackBtn } from 'src/components';
import ProviderCard from 'src/components/ProviderCard';
import DIDLogo from 'src/assets/logos/didperu.svg';
import { Provider } from 'src/utils';

interface ProvidersLayoutEmits {
  (EventName: 'onSelectCategory', categorySelected: string): void;
  (EventName: 'update:queryValue', value?: string): void;
  (EventName: 'onSearch'): void;
  (EventName: 'onClear'): void;
}

interface ProvidersLayoutProps {
  isLoading: boolean;
  providers?: Provider[];
  queryValue: string;
}

defineProps<ProvidersLayoutProps>();
defineEmits<ProvidersLayoutEmits>();
</script>
