import { Text, View, StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../theme";
import { Universidad } from "../mocks/universidades.mock";

interface Props {
    universidad: Universidad;
}

export default function UniversidadCard({ universidad }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{universidad.nombre}</Text>
            <Text style={styles.descripcion}>{universidad.descripcion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.md,
        margin: spacing.xs,
        minHeight: 110,
    },
    nombre: {
        ...typography.subtitle,
        color: colors.textPrimary,
    },
    descripcion: {
        ...typography.body,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
});