import {StyleSheet} from 'react-native'

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1, //Declara que deve ser ocupado todo espaço preenchivel da tela
        backgroundColor: '#8257E5',
        justifyContent: 'space-around',
        padding: 40
    },

    banner:
    {
        width: '100%', //Diz o tamanho de lagura que a imagem deve ter dentro da tela
        resizeMode: 'contain', //Redimenciona a imagem proposcionalmente com todas as partes visiveis sem corte
    },

    title:
    {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBolt:
    {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer:
    {
        flexDirection: 'row', //Coloca os botões um ao lado do outro
        marginTop: 40,
        justifyContent: 'space-between' //Coloca o espaçamento entre os botões ficando cada um em uma extremidade da linha
    },

    button:
    {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between' //Alinhamento do texto e botão de forma justificada
    },

    buttonPrimary:
    {
        backgroundColor: '#9871f5'
    },

    buttonSecondary:
    {
        backgroundColor: '#04d361'
    },

    buttonText:
    {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16 //Tamanho do texto dentro do button
    },

    totalConnections:
    {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    }
})

export default styles