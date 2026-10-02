import { Pressable, Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, spacing } from "../theme";

interface Props {
    pantallaActual: string;
    cambiarPantalla: (pantalla: string) => void;
}

export default function MenuInferior({ pantallaActual, cambiarPantalla }: Props) {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <Pressable
                style={styles.item}
                onPress={() => cambiarPantalla('inicio')}
            >
                <Text style={pantallaActual === 'inicio' ? styles.textoActivo : styles.textoNormal}>
                    Inicio
                </Text>
                <View style={pantallaActual === 'inicio' ? styles.indicadorActivo : styles.indicadorNormal} />
            </Pressable>

            <Pressable
                style={styles.item}
                onPress={() => cambiarPantalla('solicitudes')}
            >
                <Text style={pantallaActual === 'solicitudes' ? styles.textoActivo : styles.textoNormal}>
                    Solicitudes
                </Text>
                <View style={pantallaActual === 'solicitudes' ? styles.indicadorActivo : styles.indicadorNormal} />
            </Pressable>

            <Pressable
                style={styles.item}
                onPress={() => cambiarPantalla('perfil')}
            >
                <Text style={pantallaActual === 'perfil' ? styles.textoActivo : styles.textoNormal}>
                    Perfil
                </Text>
                <View style={pantallaActual === 'perfil' ? styles.indicadorActivo : styles.indicadorNormal} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: spacing.sm,
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    textoNormal: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textMuted,
    },
    textoActivo: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.primary,
    },
    indicadorNormal: {
        marginTop: spacing.xs,
        width: 24,
        height: 3,
        borderRadius: 2,
        backgroundColor: 'transparent',
    },
    indicadorActivo: {
        marginTop: spacing.xs,
        width: 24,
        height: 3,
        borderRadius: 2,
        backgroundColor: colors.primary,
    },
});