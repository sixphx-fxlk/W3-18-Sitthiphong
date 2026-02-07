import { View, Text, Button, StyleSheet, TextInput, TextStyle } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Background } from "@react-navigation/elements";


export default function Circle(){
    // เส้นรอบวงวงกลม = 2 * π * ความยาวรัศมี
    const [radial, setRadial] = useState(0) // ความยาวรัศมี
    const [pi, setPi] = useState(0) // ค่าพาย = 3.14159
    const [number, setNumber] = useState(0) // เลข 2
    const [area, setArea] = useState(0) // เส้นรอบวง

    const router = useRouter()

    function calCircle(){
        let result = 2 * 3.14159 * radial
        setArea(result)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวณเส้นรอบวงวงกลม</Text>
                
                <Text>เลข {2} หน่วย * ค่าพาย {3.14159} หน่วย</Text>
                <Text>ความยาวรัศมี {radial} ซม.</Text>
                <Text>ความยาวของเส้นคือ {area} ซม.</Text>

            <TextInput style={styles.textInput} placeholder="กรอกความยาวรัศมี" value={radial.toString()} onChangeText={(r) => setRadial(Number(r))}/>

            <Button title="คำนวณเส้นรอบวงกลม" onPress={() => calCircle()}/>
            <Button title="คำนวณพื้นที่สี่เหลี่ยม ( หน้า 2 )" onPress={() => router.navigate('/square')}/>
            <Button title="กลับหน้าแรก ( หน้า 1 )" onPress={() => router.navigate('/')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },

    mainTitle:{
        fontSize:20,
        fontWeight:"700"
    },

    textInput:{
        borderWidth: 2,
        width: "80%",
        borderColor:"lightblue",
        borderRadius: 12
    },

    textstyle:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})
