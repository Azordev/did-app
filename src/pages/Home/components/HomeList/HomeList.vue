<template>
  <div>
    <div class="home-list__title-container">
      <home-title>{{ title }}</home-title>
      <span v-if="seeMoreRouteName" class="home-list__see-all">
        <router-link :to="{ name: seeMoreRouteName }">Ver más</router-link>
      </span>
    </div>
    <horizontal-scroll>
      <slot>
        <div class="home-list__coming-soon">Muy pronto!</div>
      </slot>
    </horizontal-scroll>
  </div>
</template>

<script setup lang="ts">
import HorizontalScroll from '../../../../components/HorizontalScroll';
import HomeTitle from '../HomeTitle';

import './styles.scss';

interface HomeListProps {
  title: string;
  seeMoreRouteName: string;
}

defineProps<HomeListProps>();
</script>
