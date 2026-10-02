import { Text, View, StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../theme";
import { Solicitud } from "../mocks/solicitudes.mock";
import Badge from "./ui/Badge";

interface Props {
    solicitud: Solicitud;
}

export default function SolicitudCard({ solicitud }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.universidad}>{solicitud.universidad}</Text>
                <Badge estado={solicitud.estado} />
            </View>
            <Text style={styles.carrera}>{solicitud.carrera}</Text>
            <Text style={styles.fecha}>Enviado el {solicitud.fecha}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.md,
        marginBottom: spacing.sm,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    universidad: {
        ...typography.subtitle,
        color: colors.textPrimary,
        flexShrink: 1,
        marginRight: spacing.sm,
    },
    carrera: {
        ...typography.body,
    },
    fecha: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
});