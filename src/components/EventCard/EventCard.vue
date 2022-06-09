<template>
  <q-card class="EventCard">
    <q-card-section class="EventCard__container" horizontal>
      <div class="EventCard__imageContainer">
        <q-img class="EventCard__image" ratio="4/3" :src="image_url" />
      </div>

      <div class="EventCard__name">
        <p>{{ title }}</p>
      </div>

      <div class="q-p-none EventCard__date">
        <strong>{{ parsedExpirationDate }}</strong>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import './styles.scss';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'EventCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    image_url: {
      type: String,
      default: '',
    },
    date: {
      type: Date,
      default: new Date('01/01/1999'),
    },
  },
  setup(props) {
    const parsedExpirationDate = computed(() =>
      props.date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    );

    return { parsedExpirationDate };
  },
});
</script>
