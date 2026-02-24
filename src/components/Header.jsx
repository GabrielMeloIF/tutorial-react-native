import {View, Text, Image, StyleSheet} from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo_contato.png")} style={styles.image} />
            <Text style={styles.title}>CONTATOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: "100%",
        height: 80,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 20
    }
})