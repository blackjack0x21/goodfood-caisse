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
              <ion-button color="medium" @click="open()">Nouvelle commande</ion-button>
              <DialogWrapper />
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import KanbanComponent from '../../components/KanbanComponent.vue';
import { DialogWrapper } from 'vue3-promise-dialog';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    KanbanComponent,
    DialogWrapper
  },
  setup() {
    async function open() {
      if (await confirm('Popup de commande')) {
        console.log('Valider');
      } else {
        console.log('Fermer');
      }
    }
    return {
      open,
    };
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

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
}

</style>
