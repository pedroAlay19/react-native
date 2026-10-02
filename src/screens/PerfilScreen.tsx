import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";

const usuario = {
    nombre: 'Pedro Alay',
    correo: 'pedrocrackc@gmail.com',
    cedula: '1312741894',
    numero: '0995393820',
    genero: 'Masculino',
    fecha_nacimiento: '29 Junio 2005',
    idioma: 'Ingles, Español',
    titulo: 'Bachiller',
    direccion: 'Cdla. La Fragata'
};

export default function PerfilScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>

            <View style={styles.card}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarTexto}>
                        {usuario.nombre.charAt(0)}
                    </Text>
                </View>
                <Text style={styles.nombre}>{usuario.nombre}</Text>
                <Text style={styles.correo}>{usuario.correo}</Text>
            </View>

            <View style={styles.datos}>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Cedula</Text>
                    <Text style={styles.valor}>{usuario.cedula}</Text>
                </View>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Numero de telefono</Text>
                    <Text style={styles.valor}>{usuario.numero}</Text>
                </View>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Genero</Text>
                    <Text style={styles.valor}>{usuario.genero}</Text>
                </View>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Fecha de nacimiento</Text>
                    <Text style={styles.valor}>{usuario.fecha_nacimiento}</Text>
                </View>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Idiomas</Text>
                    <Text style={styles.valor}>{usuario.idioma}</Text>
                </View>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Titulo</Text>
                    <Text style={styles.valor}>{usuario.titulo}</Text>
                </View>
                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Direccion</Text>
                    <Text style={styles.valor}>{usuario.direccion}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: spacing.lg,
        backgroundColor: colors.background,
    },
    card: {
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: radius.full,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.sm,
    },
    avatarTexto: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.background,
    },
    nombre: {
        ...typography.subtitle,
        color: colors.textPrimary,
    },
    correo: {
        ...typography.body,
        color: colors.textMuted,
    },
    datos: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    etiqueta: {
        ...typography.body,
        color: colors.textMuted,
    },
    valor: {
        ...typography.body,
        color: colors.textPrimary,
        fontWeight: '600',
    },
});