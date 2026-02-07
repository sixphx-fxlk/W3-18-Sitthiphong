import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Square(){
    // พท.สี่เหลี่ยม = กว้าง * ยาว
    // output = input * input
    //   50   =   5   *  10
    const [width, setWidth] = useState(0)
    const [lenght, setLenght] = useState(0)
    const [area, setArea] = useState(0)

    const router = useRouter()

    function calSquare(){
        let result = width * lenght
        setArea(result)
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            
            <Text>กว้าง {width} ซม. ยาว {lenght} ซม. พื้นที่คือ {area} ตร.ซม.</Text>

            <TextInput style={styles.textInput} placeholder="กรอกความกว้าง" value={width.toString()} onChangeText={(w) => setWidth(Number(w))}/>
            <TextInput style={styles.textInput} placeholder="กรอกความยาว" value={lenght.toString()} onChangeText={(l) => setLenght(Number(l))}/>
            
            <Button title="คำนวณพื้นที่สี่เหลี่ยม" onPress={() => calSquare()}/>
            <Button title="คำนวณเส้นรอบวงกลม ( หน้า 3 )" onPress={() => router.navigate('/circle')}/>
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
        borderWidth: 1,
        width: "80%",
        borderColor:"lightblue",
        borderRadius: 12
    }
})