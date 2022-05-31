<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col>
              <img src="../assets/img/logo.png" class="logo">
            </ion-col>
            <ion-col class="header-flex-center">
              <ion-button color="medium" @click="openModal">Nouvelle commande</ion-button>
            </ion-col>
            <ion-col class="header-flex-end">
              <ion-button color="medium" href="/connexion">Connexion</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">GoodFood</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <kanban-component></kanban-component>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, modalController} from '@ionic/vue';
import { defineComponent } from 'vue';
import KanbanComponent from '../../components/KanbanComponent.vue';
import ModalComponent from '../../components/ModalComponent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    KanbanComponent
  },
  methods: {
    async openModal() {
      const modal = await modalController
          .create({
            component: ModalComponent,
            cssClass: 'modal-size',
            canDismiss: true,
            isOpen: true,
            breakpoints: [0.1, 0.5, 1],
            initialBreakpoint: 1,
            componentProps: {
              title: 'Numéro de commande'
            },
          })
      return modal.present();
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  left: 0;
  right: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
