<template>
  <div>
    <home-title>{{ title }}</home-title>
    <horizontal-scroll>
      <slot>
        <div class="HomeList__comingSoon">Muy pronto!</div>
      </slot>
    </horizontal-scroll>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import HorizontalScroll from '../../../../components/HorizontalScroll';
import HomeTitle from '../HomeTitle';

import './styles.scss';

interface HomeListProps {
  title: string;
}

defineProps<HomeListProps>();
</script>
