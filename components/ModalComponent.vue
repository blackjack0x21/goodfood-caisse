<template class="modal-size">
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button color="medium">Ajouter une pizza</ion-button>
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
    <ion-button color="danger" onclick="dismissModal()">Fermer</ion-button>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalComponent',
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  props: {
    title: { type: String, default: 'Super Modal' },
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
