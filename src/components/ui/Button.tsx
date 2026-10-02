import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { colors, radius, spacing, typography } from "../../theme";

interface Props extends PressableProps {
    textButton: string;
}

export default function Button({textButton, style, ...props}: Props) {
    return (
        <Pressable 
            style={(state) => [
                styles.button,
                typeof style === 'function' ? style(state) : style,
            ]} 
            {...props}
        >
            <Text style={styles.buttonText}>
                {textButton}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius.md,
        paddingVertical: spacing.md,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: typography.subtitle
})