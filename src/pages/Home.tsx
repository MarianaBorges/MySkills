import React,{useState, useEffect} from "react";
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
    FlatList,
    Platform,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData{
    id: string;
    name: string;
}

export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
        }
        setMySkills(oldSkill=>[...oldSkill, data]);
    }

    function handleRemoveSkill(id:string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(()=>{
        const currentHour = new Date().getHours();
        if(currentHour< 12){
            setGretting('Good Morning');
        }else if (currentHour >= 12 && currentHour < 18 ){
            setGretting('Good Efternoon');
        }else{
            setGretting('Good Night');
        }
    },[]);

    return (
        <View style={styles.container}>
            <Text style={styles.title} testID="welcome">
                Welcome, Mariana
            </Text>
            <Text style={styles.gretting}>
                {gretting}
            </Text>
            <TextInput 
                testID="input-new"
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}    
            />

            <Button testID="button-add" title="Add" onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginTop: 20 }]}>
                    My Skills
            </Text>

           { mySkills &&
                <FlatList
                    testID="flatlist-skills"
                    data={mySkills}
                    keyExtractor={item=> item.id}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="never"
                    renderItem = {({item}) => (
                    <SkillCard 
                        skill={item.name} 
                        onPress={()=>handleRemoveSkill(item.id)}
                        />)}
                />
            }
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121015',
        paddingHorizontal:20,
        paddingVertical: 70,
    },
    title:{
        color:'#FFF',
        fontSize:24,
    },
    input:{
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    gretting:{
        color:'#FFF',
    }    
})