import React from 'react'
/* As rotas precisam estar dentro das tags '<NavigationContainer>'*/
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'

/* Navigator será usado para navegação em pilha e o Screen será cada tela */
const {Navigator, Screen} = createStackNavigator()

/* O uso do screenOptions={{headerShown: false}} desativa o header da tela no mobile*/
function AppStack()
{
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack