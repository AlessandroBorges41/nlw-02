import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
{
    container:
    {
        padding: 40,
        backgroundColor: '#8257e5'
    },

    topBar:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between' //Separa a seta e o texto na barra do cabeçalho colocando ambos nas extremidades opostas 
    },

    title:
    {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    }
})

export default styles