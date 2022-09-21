<template>
  <header class="UserHeader">
    <div class="UserHeader__actions full-width">
      <div class="UserHeader__back_btn">
        <back-button color="gray-dark" :toHome="true" label="Inicio" />
      </div>
      <div class="row justify-between full-width">
        <div>
          <q-btn class="UserHeader__avatar_btn" flat round>
            <q-avatar
              class="UserHeader__avatar"
              color="black"
              text-color="white"
            >
              <q-img :src="showAvatar" />
              <q-icon
                color="black"
                size="1.19rem"
                class="UserHeader__editIcon"
                name="add"
              />
              <input
                type="file"
                id="avatar"
                accept="image/png, image/jpeg, image/jpg"
                @change="uploadImage"
              />
            </q-avatar>
          </q-btn>
          <div class="UserHeader__information">
            <div class="UserHeader__text">
              <p
                :class="`UserHeader__membership ${
                  isMembershipActive
                    ? 'UserHeader__membership--active'
                    : 'UserHeader__membership--inactive'
                }`"
              >
                {{ userMembershipStatus }}
              </p>
              <p class="UserHeader__expiration-date">
                Válido hasta: {{ parsedExpirationDate }}
              </p>
            </div>
          </div>
        </div>
        <qr-code
          class="UserHeader__qr_code"
          :value="`https://www.did-admin.tk/${memberCode}`"
          :height="118"
          :width="118"
          :dotsOptions="{ type: 'square', color: '#000000' }"
          :cornersSquareOptions="{ type: 'square', color: '#000000' }"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import userDefaultImg from 'src/assets/images/user-default.svg';
import './styles.scss';
import BackButton from 'src/components/BackButton/BackButton.vue';
import QrCode from 'qrcode-vue3';
import { handleAvatarUpload } from './utils/handleAvatarUpload';
import { ref, Ref } from 'vue';

export interface UserHeaderProps {
  isMembershipActive: boolean;
  expirationDate: Date;
  avatar?: string;
  memberCode: string;
  newAvatar?: string;
}

interface UserHeaderEmits {
  (eventName: 'saveAvatar', value: string): void;
}

const showAvatar: Ref<string | undefined> = ref('');
const props = defineProps<UserHeaderProps>();
const emits = defineEmits<UserHeaderEmits>();
showAvatar.value = props.avatar ? props.avatar : userDefaultImg;
const uploadImage = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.item(0);
  const uploadedImage = await handleAvatarUpload(file);
  emits('saveAvatar', uploadedImage);
  showAvatar.value = uploadedImage;
};

const userMembershipStatus = computed(() =>
  props.isMembershipActive ? 'Membresía activa' : 'Membresía inactiva'
);

const parsedExpirationDate = computed(() =>
  props.expirationDate.toLocaleString('en-US', {
    month: '2-digit',
    year: 'numeric',
  })
);
</script>
