<template>
  <div class="Providers">
    <back-button toHome />

    <div class="Providers__content">
      <search-bar
        @on-search="$emit('onSearch')"
        @on-clear="$emit('onClear')"
        @update:query-value="$emit('update:queryValue', $event)"
        :query-value="queryValue"
        class="Providers__search"
      />

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
import BackButton from '../../components/BackButton';
import SearchBar from '../../components/SearchBar';
import ProvidersListItem from './ProvidersListItem.vue';
import { Provider } from 'src/utils';

interface ProvidersLayoutEmits {
  (EventName: 'onSelectCategory', categorySelected: string): void;
  (EventName: 'update:queryValue', queryValue: string): void;
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
