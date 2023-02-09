<template>
  <header class="UserHeader">
    <div class="UserHeader__actions full-width">
      <div class="UserHeader__back_btn">
        <back-button color="gray-dark" :toHome="true" label="Inicio" />
      </div>
      <div class="UserHeader__content row justify-between full-width">
        <div class="UserHeader__summary">
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
            </div>
          </div>
        </div>
        <qr-code
          class="UserHeader__qr_code"
          :value="`https://did-admin-panel.vercel.app/info/${memberCode}`"
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
import {
  handleAvatarUpload,
  updateImageGraqhql,
} from './utils/handleAvatarUpload';
import { ref, Ref } from 'vue';

export interface UserHeaderProps {
  isMembershipActive: boolean;
  expirationDate: Date;
  avatar?: string;
  memberCode: string;
  id: string;
}

const showAvatar: Ref<string | undefined> = ref('');
const props = defineProps<UserHeaderProps>();

showAvatar.value = props.avatar ? props.avatar : userDefaultImg;

const uploadImage = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.item(0);
  const uploadedImage = await handleAvatarUpload(file);
  const { onUpdateUserAvatar } = updateImageGraqhql();
  onUpdateUserAvatar(props.id, uploadedImage);
  showAvatar.value = uploadedImage;
};

const userMembershipStatus = computed(() =>
  props.isMembershipActive ? 'Usuario' : 'Usuario'
);
</script>
