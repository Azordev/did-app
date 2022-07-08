<template>
  <div class="Providers">
    <list-header
      title="Proveedores"
      :query-value="queryValue || ''"
      @update:query-value="$emit('update:queryValue', $event?.toString())"
      @on-search="$emit('onSearch')"
      @on-clear="$emit('onClear')"
    />

    <div class="Providers__content">
      <list-grid
        className="ProvidersList"
        :isLoading="isLoading"
        :listItemsLength="providers.length"
      >
        <providers-list-item
          v-for="provider in providers"
          :key="provider.id"
          :provider="provider"
          @onClick="
            $router.push({
              name: 'providerDetail',
              params: { provider: provider.id },
            })
          "
        />
      </list-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListGrid from '../../components/ListGrid';
import { ListHeader } from 'src/components';
import ProvidersListItem from './ProvidersListItem.vue';
import { Provider } from 'src/utils';

interface ProvidersLayoutEmits {
  (EventName: 'onSelectCategory', categorySelected: string): void;
  (EventName: 'update:queryValue', value?: string): void;
  (EventName: 'onSearch'): void;
  (EventName: 'onClear'): void;
}

interface ProvidersLayoutProps {
  isLoading: boolean;
  providers: Provider[];
  queryValue: string;
}

defineProps<ProvidersLayoutProps>();
defineEmits<ProvidersLayoutEmits>();
</script>
