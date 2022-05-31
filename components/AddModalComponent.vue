<template class="modal-size">
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    toto
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddModalComponent',
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  props: {
    title: { type: String, default: 'Super Modal' }
  },
  data() {
    let items = [
      {nom : 'chocolat', quantite : 1},
      {nom : 'vanille', quantite : 1},
      {nom : 'fraise', quantite : 2},
      {nom : 'mure', quantite : 4},
    ];
    return {items};
  },
});
</script>
