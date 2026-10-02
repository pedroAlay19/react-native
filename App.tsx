import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from "./src/screens/LoginScreen";
import SolicitudesScreen from './src/screens/SolicitudesScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import InicioScreen from './src/screens/InicioScreen';
import MenuInferior from './src/components/MenuInferior';
import { View } from 'react-native';

export default function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [pantallaActual, setPantallaActual] = useState('inicio');

  if (!usuarioAutenticado) {
    return (
      <>
        <LoginScreen onLogin={() => setUsuarioAutenticado(true)} />
        <StatusBar style="auto" />
      </>
    );
  }

  let pantalla;
  if (pantallaActual === 'solicitudes') {
    pantalla = <SolicitudesScreen />;
  } else if (pantallaActual === 'perfil') {
    pantalla = <PerfilScreen />;
  } else {
    pantalla = <InicioScreen />;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>{pantalla}</View>
      <MenuInferior
        pantallaActual={pantallaActual}
        cambiarPantalla={setPantallaActual}
      />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}