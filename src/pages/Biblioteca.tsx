import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonTabBar, IonTabButton, IonIcon, IonLabel,
    IonImg,
    IonButton  
  } from '@ionic/react';
  import { playCircle, radio, library, heart } from 'ionicons/icons';
  
  const Biblioteca: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Biblioteca</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <center><p><b>¡Aquí puedes ingresar tus nuevos libros!</b></p></center>
  
          <IonList>
            <IonItem>
              <IonInput label="Nombre del Libro" placeholder="Ej: La bruja de blair"></IonInput>
            </IonItem>
  
            <IonItem>
              <IonInput label="Páginas por día" type="number" placeholder="Ej: 12 páginas"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Autor" placeholder="Ej: Jhon Grisham"></IonInput>
            </IonItem>

            <IonImg
                src="public/BookHov2.png"
                alt="BookHo emocionado porque anadiste un nuevo libro"
            />

            <center><IonButton>Ingresar</IonButton></center>
  
          </IonList>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Biblioteca;
  