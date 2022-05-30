<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <img src="../assets/img/logo.png" class="logo">
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">GoodFood</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <form id="app" @submit="checkForm" action="/home" method="get">

          <p>
            <label for="name">Identifiant</label>
            <input id="name" type="text" name="name">
          </p>

          <p>
            <label for="psw">Mot de passe</label>
            <input id="psw" type="password" name="psw">
          </p>

          <p>
            <input type="submit" value="Connexion">
          </p>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConnexionPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
});
</script>

<style scoped>
input,select {
  margin-left: 10px;
}

#container {
  text-align: center;
  background-color: #9d1212;
  width: 35em;
  border-radius: 0.5em;
  padding: 1em;
  margin: auto;
  margin-top: 2em;
}
</style>
