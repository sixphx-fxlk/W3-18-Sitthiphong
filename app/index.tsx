import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>หน้าแรก</Text>
            <Button title="คำนวณพื้นที่สี่เหลี่ยม ( หน้า 2 )" onPress={() => router.navigate('/square')}/>
            <Button title="คำนวณเส้นรอบวงกลม ( หน้า 3 )" onPress={() => router.navigate('/circle')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    mainTitle:{
        fontSize:20,
        fontWeight:"700"
    }
})