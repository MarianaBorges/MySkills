import React from "react";
import {  
    Text, 
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from "react-native";

interface SkillProps extends TouchableOpacityProps{
    skill: string;
}

export function SkillCard ({skill, ...rest}:SkillProps){
    return (
        <TouchableOpacity 
            style={styles.buttonSkills}
            {...rest}    
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
         </TouchableOpacity>
                
    )
}
const styles= StyleSheet.create({
    buttonSkills:{
        backgroundColor:'#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill:{
        color:'#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})