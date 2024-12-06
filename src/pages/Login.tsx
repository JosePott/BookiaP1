import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    try {
      setError('');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario ingresó correctamente:', userCredential.user);
      alert('Inicio de sesión exitoso');
      history.push('/home');
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setError("La contraseña es incorrecta.");
      } else if (err.code === "auth/user-not-found") {
        setError("No se encontró una cuenta con este correo.");
      } else {
        setError(`Firebase: ${err.message}`);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonImg src="src/assets/BookiaLoginv1.png" alt="BookHo img login" />
        <br />
        <center><p><b>¡Bienvenido!</b></p></center>

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
          <IonButton onClick={handleLogin}>Ingresar</IonButton>
        </center>
        <center><p><b>¿Olvidaste tu contraseña?</b></p></center>
      </IonContent>
    </IonPage>
  );
};

export default Login;
