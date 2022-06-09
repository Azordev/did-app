<template>
  <q-card class="EventCard">
    <q-card-section class="EventCard__container" horizontal>
      <div class="EventCard__imageContainer">
        <q-img class="EventCard__image" ratio="4/3" :src="image_url" />
      </div>

      <div class="EventCard__name">
        <p>{{ title }}</p>
      </div>

      <div class="EventCard__date">
        <strong>{{ parsedExpirationDate }}</strong>
      </div>
      <div v-if="isAnnouncement" class="EventCard__bookmark">
        <book-mark label="Convocatoria" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import './styles.scss';
import { computed, defineComponent } from 'vue';
import BookMark from '../BookMark';

export default defineComponent({
  name: 'EventCard',
  components: {
    BookMark,
  },
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
    isAnnouncement: {
      type: Boolean,
      default: false,
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
