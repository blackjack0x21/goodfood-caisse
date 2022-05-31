<template class="modal-size">
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-list>
        <ion-item v-for="item in items" :key="item.nom">
          <ion-avatar slot="start">
            <ion-img :src="item.img"></ion-img>
          </ion-avatar>
          <ion-button color="medium">
            {{ item.nom }}
          </ion-button>
        </ion-item>
    </ion-list>
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
      {nom : 'Reine', quantite : 1, img : 'https://pngimg.com/uploads/pizza/pizza_PNG44073.png'},
      {nom : '4 fromages', quantite : 1, img : 'https://pngimg.com/uploads/pizza/pizza_PNG44046.png'},
      {nom : 'Pêcheur', quantite : 2, img : 'https://pngimg.com/uploads/pizza/pizza_PNG44071.png'},
      {nom : 'Provencale', quantite : 4, img : 'https://www.pikpng.com/pngl/b/91-911517_cheese-pizza-png-clipart.png'},
    ];
    return {items};
  },
});
</script>
