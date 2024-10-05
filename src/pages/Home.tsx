import React, { useState } from 'react';
import {
  IonBreadcrumb,
  IonBreadcrumbs,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTab,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonImg,
  IonInput
} from '@ionic/react';
import { playCircle, radio, library, heart } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const [maxBreadcrumbs, setMaxBreadcrumbs] = useState<number | undefined>(4);

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tus libros</IonTitle>
        </IonToolbar>
        {/* Breadcrumbs */}
        <IonBreadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => setMaxBreadcrumbs(undefined)}>
          <IonBreadcrumb href="#home">Home</IonBreadcrumb>
          <IonBreadcrumb href="/login">Login</IonBreadcrumb>
        </IonBreadcrumbs>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tus libros</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Tarjetas con imágenes, títulos y reseñas */}
        <IonCard>
          <img alt="Silhouette of mountains" src="public/libro1.jpeg" />
          <IonCardHeader>
            <IonCardTitle>Romper el círculo</IonCardTitle>
            <IonCardSubtitle>COOLLEN HOVER</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Lily no siempre ha tenido una vida fácil, pero eso nunca le ha impedido luchar por lo que quiere y ha recorrido un largo camino para llegar a donde está ahora. Su vida comienza a cambiar el día que Ryle Kincaid, un extraordinario neurocirujano, se fija en ella.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Silhouette of mountains" src="public/libro2.jpg" />
          <IonCardHeader>
            <IonCardTitle>Harry Potter y la piedra filosofal</IonCardTitle>
            <IonCardSubtitle>J.K ROWLING</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Deberá acudir entonces a una famosa escuela de magia y hechicería: Howards.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img alt="Silhouette of mountains" src="public/libro3.jpeg" />
          <IonCardHeader>
            <IonCardTitle>Divergente</IonCardTitle>
            <IonCardSubtitle>VERONICA ROTH</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Divergente es una novela distópica donde la sociedad está dividida en cinco facciones según virtudes. La protagonista, Beatrice "Tris" Prior, descubre que es "divergente," alguien que no encaja en ninguna facción, lo que la pone en peligro. Mientras se une a la facción Osadía, debe enfrentarse a una conspiración que amenaza con destruir su mundo.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
