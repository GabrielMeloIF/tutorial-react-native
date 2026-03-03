import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function CardUser() {
    return (
        <View style={styles.card}>
            <View>
                <Image
                    style={styles.avatar}
                    sourcer={{ uri: "https://github.com/GabrielMeloIF.png"}}                
                />
            </View>
            <View style={styles.cardtext}>
                <Text style={styles.name}>Fulano de tal</Text>
                <Text style={styles.email}>taldefulano@email.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#161616',
        width: "80%",
        height: 150,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        marginTop: 20,
        alignItems: 'center',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        boxShadow: '0px 6px 12px rgba(0,0,0,0.4)'
    },
    cardtext: {
        gap: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderColor: '#000',
    },
    name: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
    email: {
        color: '#fff',
        fontSize: 17,
        marginTop: 5
    }
})