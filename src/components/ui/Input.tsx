import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, spacing, radius } from '../../theme';

export default function Input({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.textMuted}
      style={[styles.input, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    fontSize: 14,
    backgroundColor: colors.background,
    marginBottom: spacing.md
  },
});