var agora = new Date()
var diaSem = agora.getDay
diaSem = 7
switch (diaSem) {
    case o:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terca')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sabado')
        break;
    default:
        console.log('[Erro] Dia Invalide!')
        break;
}