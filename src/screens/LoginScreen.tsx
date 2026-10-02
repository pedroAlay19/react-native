import { useState } from "react";
import { Alert, Text, View, StyleSheet } from "react-native";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { colors, spacing, typography } from "../theme";

const correoCorrecto = 'Pedro@gmail.com'
const claveCorrecto = 'Pedro123'

interface Props {
    onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    const iniciarSesion = () => {
        if (!correo.trim() || !clave.trim()) {
            Alert.alert(
                'Datos incompletos',
                'Ingrese correo y clave'
            );
            return;
        }
        if (correo === correoCorrecto && clave === claveCorrecto) {
            onLogin();
        } else {
            Alert.alert(
                'Datos incorrectos',
                'Correo o clave incorrectos'
            );
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eyebrow}>
                Su
            </Text>
            <Text style={styles.title}>
                Solicitudes Universitarias
            </Text>
            <Text style={styles.subtitle}>
                Ingresa con tus credenciales
            </Text>

            <Input
                value={correo}
                onChangeText={setCorreo}
                placeholder="Correo"
            />
            <Input
                value={clave}
                onChangeText={setClave}
                placeholder="Clave"
                secureTextEntry
            />

            <Button textButton="Iniciar Sesion" onPress={iniciarSesion} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: spacing.lg,
        backgroundColor: colors.backgroundSoft,
    },
    eyebrow: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 2,
        textAlign: 'center',
    },
    title: {
        ...typography.title,
        textAlign: 'center',
        marginTop: 4,
    },
    subtitle: {
        ...typography.body,
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: spacing.sm,
        marginBottom: spacing.lg,
    },
});