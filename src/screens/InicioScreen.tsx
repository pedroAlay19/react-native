import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import UniversidadCard from "../components/UniversidadCard";
import { colors, spacing } from "../theme";
import { universidades } from "../mocks/universidades.mock";
import Titulo from "../components/Titulo";

export default function InicioScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Titulo eyebrow="Bienvenido Pedro Alay" texto="Oferta Academica" />

            <FlatList
                data={universidades}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => <UniversidadCard universidad={item} />}
                style={styles.listaContainer}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacing.lg,
        backgroundColor: colors.background,
    },
    listaContainer: {
        flex: 1,
    }
});