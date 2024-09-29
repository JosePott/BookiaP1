import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home'; // Página "Tus Libros"
import MiAvance from './pages/MiAvance'; // Página "Mi Avance"
import Biblioteca from './pages/Biblioteca'; // Página "Añadir"
import Favoritos from './pages/Favoritos'; // Página "Favoritos"
import { playCircle, radio, library, heart } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Ruta principal para "Tus Libros" (Home) */}
          <Route exact path="/home">
            <Home />
          </Route>

          {/* Rutas para las otras vistas */}
          <Route exact path="/mi-avance">
            <MiAvance />
          </Route>
          <Route exact path="/biblioteca">
            <Biblioteca />
          </Route>
          <Route exact path="/favoritos">
            <Favoritos />
          </Route>

          {/* Redirección al Home si no se encuentra la ruta */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        {/* Barra de navegación en todas las vistas */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={playCircle} />
            <IonLabel>Tus libros</IonLabel>
          </IonTabButton>

          <IonTabButton tab="mi-avance" href="/mi-avance">
            <IonIcon icon={radio} />
            <IonLabel>Mi avance</IonLabel>
          </IonTabButton>

          <IonTabButton tab="biblioteca" href="/biblioteca">
            <IonIcon icon={library} />
            <IonLabel>Añadir</IonLabel>
          </IonTabButton>

          <IonTabButton tab="favoritos" href="/favoritos">
            <IonIcon icon={heart} />
            <IonLabel>Favoritos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
