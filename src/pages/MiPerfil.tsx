{/* Importamos los objetos, imagenes, iconos, paginas, etc */}
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonThumbnail, IonIcon, IonTabBar, IonTabButton, IonImg
} from '@ionic/react';
import { IonAvatar } from '@ionic/react';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';
import { playCircle, radio, library, heart } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/react';
import { trashBin } from 'ionicons/icons';

        {/*Creacion de la vista*/}
const MiPerfil: React.FC = () => {

            {/*Titulacion de la vista y creacion*/}
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Mi perfil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

        {/*Creacion del label principal*/}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Configuracion</IonCardTitle>

                    </IonCardHeader>
                    <IonCardContent>

                            {/*Integracion de la barra de busqueda*/}
                    <IonSearchbar showClearButton="always" value=""></IonSearchbar>

        {/*Creacion de la primera opcion*/}
                        <IonItem>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonLabel>Mi cuenta</IonLabel>
                        </IonItem>
                        <IonList>

        {/*Creacion de la segunda opcion*/}
                            <IonItem>
                                <IonAvatar aria-hidden="true" slot="start">
                                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                                <IonLabel>Privacidad</IonLabel>
                            </IonItem>

        {/*Creacion de la tercera opcion*/}
                            <IonItem>
                                <IonAvatar aria-hidden="true" slot="start">
                                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                                <IonLabel>Notificaciones</IonLabel>
                            </IonItem>

        {/*Creacion de la cuarta opcion*/}
                            <IonItem>
                                <IonAvatar aria-hidden="true" slot="start">
                                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                                <IonLabel>Opciones de teclado</IonLabel>
                            </IonItem>


                        </IonList>
                    </IonCardContent>
                </IonCard>

        {/*Creacion del label de soporte y contacto*/}
                <IonCard>
                    <IonCardContent>
                        <IonItem lines="none">
                            <p><b>Si necesitas ayuda, contactate con nuestro equipo de soporte:
                                soporte@bookiav.cl</b></p>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

            </IonContent>

        </IonPage>
    );
};

export default MiPerfil;