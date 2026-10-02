import { Text, View, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../theme";
import { EstadoSolicitud } from "../../mocks/solicitudes.mock";

interface Props {
    estado: EstadoSolicitud;
}

const config: Record<EstadoSolicitud, { label: string; color: string; background: string }> = {
    en_espera: { label: 'En espera', color: '#92400E', background: '#FEF3C7' },
    aceptado: { label: 'Aceptado', color: '#065F46', background: '#D1FAE5' },
    rechazado: { label: 'Rechazado', color: colors.error, background: '#FEE2E2' },
};

export default function Badge({ estado }: Props) {
    const { label, color, background } = config[estado];
    return (
        <View style={[styles.badge, { backgroundColor: background }]}>
            <Text style={[styles.texto, { color }]}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'flex-start',
        borderRadius: radius.full,
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
    },
    texto: {
        fontSize: 12,
        fontWeight: '700',
    },
});