export const colors = {
  primary: '#251cd6',
  backgroundSoft: '#dddee2',
  textPrimary: '#111827',
  textMuted: '#9CA3AF',
  border: '#E5E7EB',
  background: '#FFFFFF',
  error: '#DC2626',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 6,
  md: 12,
  full: 999,
};

export const typography = {
  title: { fontSize: 24, fontWeight: '400' as const, color: colors.textPrimary },
  subtitle: { fontSize: 16, fontWeight: '600' as const, color: colors.textMuted },
  body: { fontSize: 14, color: colors.textPrimary },
};