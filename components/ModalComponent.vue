<template class="modal-size">
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button color="medium" @click="openModal">Ajouter une pizza</ion-button>
    <ion-grid class="border-grid">
      <ion-row>
        <ion-col class="border-grid-col-title">
          <div>Produits</div>
        </ion-col>
        <ion-col class="border-grid-col-title">
          <div>Quantité</div>
        </ion-col>
      </ion-row>
      <ion-row v-for="item in items" :key="item.nom">
        <ion-col class="border-grid-col">
          <div>{{ item.nom }}</div>
        </ion-col>
        <ion-col class="border-grid-col">
          <div>{{ item.quantite }}</div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import AddModalComponent from './AddModalComponent.vue'

export default defineComponent({
  name: 'ModalComponent',
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
  methods: {
    async openModal() {
      const modal = await modalController
          .create({
            component: AddModalComponent,
            cssClass: 'modal-size',
            canDismiss: true,
            isOpen: true,
            breakpoints: [0.1, 0.5, 1],
            initialBreakpoint: 0.9,
            componentProps: {
              title: 'Ajouter une pizza'
            },
          })
      return modal.present();
    },
  },
});
</script>
