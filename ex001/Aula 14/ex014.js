var agora = new Date()
var diaSem = agora.getDay
diaSem = 2
switch (diaSem) {
    case 0:
        console.log('Saturday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wendsday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    default:
        console.log('[Erro] Dia Invalide!')
        break;
}