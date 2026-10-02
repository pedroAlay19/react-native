import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface Props {
    texto: string;
    subtitulo?: string;
    eyebrow?: string;
}

export default function Titulo({ texto, subtitulo, eyebrow }: Props) {
    return (
        <View style={styles.container}>
            {eyebrow && (
                <Text style={styles.eyebrow}>
                    {eyebrow}
                </Text>
            )}
            <Text style={styles.titulo}>
                {texto}
            </Text>
            {subtitulo && (
                <Text style={styles.subtitulo}>
                    {subtitulo}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.md,
    },
    eyebrow: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    titulo: {
        ...typography.title,
    },
    subtitulo: {
        ...typography.body,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
});