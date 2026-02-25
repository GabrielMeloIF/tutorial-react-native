import { View, Image, Text, StyleSheet } from 'react-native';

export default function CardUser() {
    return (
        <View style={styles.card}>
            <View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFow3nU6ajG_8xpqPJWwXv1rHi3p_dT7O0sg&s'}}  style={styles.image2} />
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
    image2: {
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