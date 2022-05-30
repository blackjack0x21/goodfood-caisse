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
                    </ion-col>
                </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-header>
    </ion-page>
    <form class="form" @submit.prevent="loginHandler">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input type="email" required  v-model="email"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Mot de passe</ion-label>
                <ion-input type="password" required v-model="password"/>
            </ion-item>
        </ion-list>
        <ion-button color="medium" shape="round" type="submit" expand="block">Connexion</ion-button>
    </form>
    <br>
</template>

<script lang="ts">
import { IonLabel, IonItem, IonButton, IonInput, IonList } from "@ionic/vue";
import { supabase } from '../../supabase';
import notification, { TypeNotification } from '../../utils/notification';
import { startLoading, stopLoading } from '../../utils/loader';
import { ApiError } from '@supabase/gotrue-js';
import '../theme/login.css'

export default {
    components: {
        IonLabel,
        IonItem,
        IonButton,
        IonInput,
        IonList
    },

    methods : {
        async loginHandler() {
            const email = this.email;
            const password = this.password;
            if(email && password) {
                try {
                    await startLoading("Loading");
                    const { user, session, error } = await supabase.auth.signIn({
                        email: email,
                        password: password,
                    },
                    {
                        shouldCreateUser: false
                    })
                    if (error) throw error
                    notification("Connected", TypeNotification.Success);
                } 
                catch (error: ApiError | any) {
                    notification(error.error_description || error.message, TypeNotification.Danger);
                } 
                finally {
                    await stopLoading();
                }
            }
        },
    },

    data () {
        return{
            email:'',   
            password: '',
        }
    },
}
</script>