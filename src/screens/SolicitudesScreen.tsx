import { FlatList, StyleSheet } from "react-native";
import Titulo from "../components/Titulo";
import { colors, spacing } from "../theme";
import { solicitudes } from "../mocks/solicitudes.mock";
import { SafeAreaView } from "react-native-safe-area-context";
import SolicitudCard from "../components/SolicitudCard";

export default function SolicitudesScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Titulo texto="Mis Solicitudes" />

            <FlatList
                data={solicitudes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SolicitudCard solicitud={item} />}
                style={styles.listaContainer}
                contentContainerStyle={styles.lista}
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
    },
    lista: {
        paddingTop: spacing.sm,
    },
});