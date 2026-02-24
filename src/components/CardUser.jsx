import { View, Image, Text, StyleSheet } from 'react-native';

export default function CardUser() {
    return (
        <View style={styles.card}>
            <View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFow3nU6ajG_8xpqPJWwXv1rHi3p_dT7O0sg&s'}}  style={styles.image2} />
            </View>
            <View style={styles.cardtext}>
                <Text style={styles.name}>User Name</Text>
                <Text style={styles.email}>User Email</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#161616',
        width: "80%",
        height: 200,
        borderRadius: 10,
        marginTop: 20
    },  
    image2: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#000',
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    email: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5
    }
})