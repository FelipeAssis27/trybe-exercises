let pecaXadrez = 'RAINHA';
let pecaXadrezLwr = pecaXadrez.toLowerCase();
switch(pecaXadrezLwr){
    case 'peão':
    console.log('O Peão se movimenta uma casa para frente.')
    break;
    case 'torre':
    console.log('A Torre se movimenta para frente quantas casas quiser.')
    break;
    case 'bispo':
    console.log('O Bispo se movimenta na diagonal quantas vezes quiser.')
    break;
    case 'cavalo':
    console.log('O Cavalo se movimenta em formato de L para qualquer lado.')
    break;
    case 'rainha':
    console.log('A Rainha se movimenta quantas casas quiser para qualquer lado.')
    break;
    case 'rei':
    console.log('O se movimenta uma casa para o lado que quiser.')
    break;
    default:
      console.log('Essa peça não existe no Xadrez') 
}