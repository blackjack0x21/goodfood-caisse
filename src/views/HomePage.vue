<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>GoodFood</ion-title>
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
import KanbanComponent from '../../components/KanbanComponent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    KanbanComponent
  }
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
