<template>
  <home-title>{{ title }}</home-title>
  <horizontal-scroll>
    <slot>
      <div class="HomeEvents__comingSoon">Muy pronto!</div>
    </slot>
  </horizontal-scroll>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import HorizontalScroll from '../../../../components/HorizontalScroll';
import HomeTitle from '../HomeTitle';

import './styles.scss';

interface HomeEventsProps {
  title: string;
}

defineProps<HomeEventsProps>();
</script>
