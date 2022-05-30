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
              <ion-button color="medium" @click="openModal()">Nouvelle commande</ion-button>
            </ion-col>
            <ion-col class="header-flex-end">
              <ion-button color="medium" href="/connexion" @click="disconnectHandler">Déconnexion</ion-button>
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
        <ion-modal trigger="trigger-button" class="modal-size">
          <ion-content>
            <ion-title>Code commande</ion-title>
            <ion-content>
              <table class="table-dark">
                <tr>
                  <th>
                    tab
                  </th>
                  <td>
                    tab
                  </td>
                </tr>
                <tr>
                  <th>
                    tab
                  </th>
                  <td>
                    tab
                  </td>
                </tr>
              </table>
            </ion-content>
          </ion-content>
        </ion-modal>
        <kanban-component></kanban-component>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, modalController} from '@ionic/vue';
import { defineComponent } from 'vue';
import KanbanComponent from '../../components/KanbanComponent.vue';
import ModalComponent from '../../components/ModalComponent.vue'
import { supabase } from '../../supabase'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal,
    KanbanComponent
  },
  methods: {
    async openModal() {
      const modal = await modalController
          .create({
            component: ModalComponent,
            cssClass: 'modal-size',
            backdropDismiss : false,
            componentProps: {
              title: 'Numéro de commande',
              modal: { modal }
            },
          })
      return modal.present();
    },
    async disconnectHandler() {
      try {
          const { error } = await supabase.auth.signOut()
          if (error) {throw error}
      } 
      catch(error) {
          console.log("error is");
          console.log(error);
      } 
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
