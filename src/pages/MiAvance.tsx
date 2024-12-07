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
                    <img alt="" src="https://i.ibb.co/51L2d88/libro1.jpg" />
                  </IonThumbnail>
                  <IonLabel>Romper el círculo
                    <br />
                    <p><b>Leído esta semana: 27 páginas</b></p>
                  </IonLabel>
                </IonItem>
  
                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="" src="https://i.ibb.co/122pDGH/libro2.jpg" />
                  </IonThumbnail>
                  <IonLabel>Harry Potter y la piedra filosofal
                  <p><b>Leído esta semana: 12 páginas</b></p>
                  </IonLabel>
                </IonItem>
  
                <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="" src="https://i.ibb.co/HGDFdTT/libro3.jpg" />
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
            src="https://i.ibb.co/qypS3b6/BookHov1.png"
            alt=""
          />
  
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default MiAvance;
  