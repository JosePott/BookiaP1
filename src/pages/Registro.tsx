import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

const Registro: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    try {
      setError('');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado exitosamente:', userCredential.user);
      alert('Registro exitoso');
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("El correo electrónico ya está registrado. Intenta iniciar sesión.");
      } else {
        setError(`Firebase: ${err.message}`);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonImg src="public/BookiaLoginv1.png" alt="BookHo img registro" />
        <br />
        <center><p><b>¡Crea tu cuenta!</b></p></center>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6">
              {/* Campo para el Correo Electrónico */}
              <IonInput
                label="Correo Electrónico"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ej: usuario@correo.com"
                onIonChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.detail.value! }))
                }
              ></IonInput>
              <br />
              {/* Campo para la Contraseña */}
              <IonInput
                label="Contraseña"
                labelPlacement="floating"
                fill="outline"
                type="password"
                placeholder="Ej: Contraseña"
                onIonChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.detail.value! }))
                }
              ></IonInput>
            </IonCol>
          </IonRow>
        </IonGrid>

        <br />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <center>
          <IonButton onClick={handleRegister}>Registrarse</IonButton>
        </center>
        <center><p><b>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></b></p></center>
      </IonContent>
    </IonPage>
  );
};

export default Registro;
