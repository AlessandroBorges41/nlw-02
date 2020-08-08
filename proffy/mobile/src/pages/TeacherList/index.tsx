import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-community/async-storage";
import api from '../../services/api';


import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';


function TeacherList()
{
 /* Criando um estado para trabalhar os campos de pesquisa, podendo esconder campo e abrir campos */
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
 
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTechars = JSON.parse(response);
                const favoritedTecharsIds = favoritedTechars.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTecharsIds);
            }
        });
    };

    useFocusEffect(() =>{
        loadFavorites();
    });

/* Function que irá trbalhar com o useState e o botão tonando visivel ou não */
    function handleToggleFiltersVisible() {
       /* Se tiver visivel coloca falso e se não tiver visivel coloca true */ 
       setIsFiltersVisible(!isFiltersVisible); 
    };

    async function handleFiltersSubmit() {
        loadFavorites();

        const res = await api.get('classes', {params: {subject, week_day, time}});
        setIsFiltersVisible(false);
        setTeachers(res.data);
    }
 
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis"
                headerRight={(
                                <BorderlessButton onPress={handleToggleFiltersVisible}>
                                   <Feather name="filter" size={20} color="#FFF"/>
                                </BorderlessButton>
                            )}>
                        {isFiltersVisible && (
                            <View style={styles.searchForm}>
                                <Text style={styles.label}>Matéria</Text>
                                <TextInput
                                    style={styles.input}
                                    value={subject}
                                    onChangeText={ text => setSubject(text)}
                                    placeholder="Qual é a matéria?"
                                    placeholderTextColor="#c1bccc" />

                                    <View style={styles.inputGroup}>

                                        <View style={styles.inputBlock}>
                                            <Text style={styles.label}>Dia da Semana</Text>
                                            <TextInput
                                            style={styles.input} 
                                            value={week_day}
                                            onChangeText={ text => setWeekDay(text)}
                                            placeholder="Qual dia?"
                                            placeholderTextColor="#c1bccc" />
                                        </View>

                                        <View style={styles.inputBlock}>
                                            <Text style={styles.label}>Horário</Text>
                                            <TextInput
                                            style={styles.input}
                                            value={time}
                                            onChangeText={ text => setTime(text)}
                                            placeholder="Qual horário?"
                                            placeholderTextColor="#c1bccc" />
                                        </View>
                                    </View>

                                <RectButton  onPress={handleFiltersSubmit} style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>Filtrar</Text>
                                </RectButton>

                            </View>)}
            </PageHeader>

            <ScrollView style={styles.teacherList} 
                        contentContainerStyle={{
                            paddingHorizontal: 16,
                            paddingBottom: 16,
                        }}>
                {teachers.map((teacher: Teacher) => {
                      return (
                                <TeacherItem
                                 key={teacher.id}
                                 teacher={teacher}
                                 favorited={favorites.includes(teacher.id)}
                                />)
                })}
                
            </ScrollView>
        </View>
    )
}

export default TeacherList;