import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonThumbnail, IonIcon, IonTabBar, IonTabButton, IonImg
  } from '@ionic/react';
  import { playCircle, radio, library, heart } from 'ionicons/icons';
  
  const MiAvance: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mi avance</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>¡Aquí tienes tu avance semanal! <IonIcon icon={heart} /></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="public/libro1.jpeg" />
                  </IonThumbnail>
                  <IonLabel>Romper el círculo
                    <br />
                    <p><b>Leído esta semana: 27 páginas</b></p>
                  </IonLabel>
                </IonItem>
  
                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="public/libro2.jpg" />
                  </IonThumbnail>
                  <IonLabel>Harry Potter y la piedra filosofal
                  <p><b>Leído esta semana: 12 páginas</b></p>
                  </IonLabel>
                </IonItem>
  
                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="public/libro3.jpeg" />
                  </IonThumbnail>
                  <IonLabel>Divergente
                  <p><b>Leído esta semana: 32 páginas</b></p>
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardContent>
              <IonItem lines="none">
                <p><b>¡Felicidades! llevas una racha de 7 días</b></p>
              </IonItem>
            </IonCardContent>
          </IonCard>
  
          <IonImg
            src="public/BookHov1.png"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          />
  
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default MiAvance;
  