import React from 'react';
import { IonButton,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Imagen */}
        <IonImg
          src="public/BookiaLoginv1.png"
          alt="BookHo img login"
        />
        <br />

        <center><p><b>¡Bienvenido!</b></p></center>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6">
              <IonInput label="Usuario" labelPlacement="floating" fill="outline" placeholder="Ej: Usuario1"></IonInput>
              <br />
              <IonInput label="Contraseña" labelPlacement="floating" fill="outline" placeholder="Ej: Contraseña"></IonInput>
            </IonCol>
          </IonRow>
        </IonGrid>

        <br />

        <center><IonButton>Ingresar</IonButton></center>
        <center><p><b>¿Olvidaste tu contraseña?</b></p></center>
      </IonContent>
    </IonPage>
  );
};

export default Login;
