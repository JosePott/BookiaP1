import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonTabBar, IonTabButton
} from '@ionic/react';
import { playCircle, radio, library, heart } from 'ionicons/icons';

const Favoritos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img alt="" src="https://i.ibb.co/51L2d88/libro1.jpg" />
          <IonCardHeader>
            <IonCardTitle>Romper el círculo <IonIcon icon={heart} /></IonCardTitle>
            <IonCardSubtitle>COOLLEN HOVER</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lily no siempre ha tenido una vida fácil, pero eso nunca le ha impedido luchar por lo que quiere.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="" src="https://i.ibb.co/122pDGH/libro2.jpg" />
          <IonCardHeader>
            <IonCardTitle>Harry Potter y la piedra filosofal <IonIcon icon={heart} /></IonCardTitle>
            <IonCardSubtitle>J.K ROWLING</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="" src="https://i.ibb.co/HGDFdTT/libro3.jpg" />
          <IonCardHeader>
            <IonCardTitle>Divergente <IonIcon icon={heart} /></IonCardTitle>
            <IonCardSubtitle>VERONICA ROTH</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Divergente es una novela distópica donde la sociedad está dividida en cinco facciones.
          </IonCardContent>
        </IonCard>
      </IonContent>


    </IonPage>
  );
};

export default Favoritos;
