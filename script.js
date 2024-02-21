var palavrasFrutas = ["cajá", "caju", "lima", "kiwi", "coco", "açaí", "maçã", "manga", "melão", "figo"];
var palavrasAnimais = ["gato", "rato", "pato", "leão", "lobo", "ganso", "arara", "zebra", "urso", "hiena"];
var palavraSorteada = '';
var verificarpalavraSorteada = false;

document.getElementById('sortearButton').addEventListener('click', function() {
    var generoRadios = document.getElementsByName('genero');
    var generoSelecionado = '';
    for (var i = 0; i < generoRadios.length; i++) {
        if (generoRadios[i].checked) {
            generoSelecionado = generoRadios[i].value;
            break;
        }
    }

    if (generoSelecionado === '') {
        document.getElementById('mensagem').textContent = 'Por favor, escolha um gênero antes de sortear.';
        return;
    }

    var palavras;
    if (generoSelecionado === 'frutas') {
        palavras = palavrasFrutas;
        document.getElementById('descricao-genero').textContent = 'Gênero: Frutas';
    } else if (generoSelecionado === 'animais') {
        palavras = palavrasAnimais;
        document.getElementById('descricao-genero').textContent = 'Gênero: Animais';
    }

    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    verificarpalavraSorteada = true;

    document.getElementById('letra').textContent = palavraSorteada.charAt(0).toUpperCase();
    document.getElementById('tamanho').textContent = palavraSorteada.length;

    document.getElementById('mensagem').textContent = '';
    document.getElementById('palavrassorteadas').textContent = '**********';

    document.getElementById('palpite').value = '';
    document.getElementById('resultado').textContent = '';
});

document.getElementById('confirmarButton').addEventListener('click', function() {
    if (!verificarpalavraSorteada) {
        document.getElementById('resultado').textContent = 'Por favor, clique em "Sortear" primeiro.';
        return;
    }

    var palpiteUsuario = document.getElementById('palpite').value.toLowerCase();

    if (palpiteUsuario === palavraSorteada) {
        document.getElementById('resultado').textContent = 'Correto! Você acertou a palavra!';
    } else {
        document.getElementById('resultado').textContent = 'Iiihhh! Você errou kkkkkkk.';
    }

    document.getElementById('palavrassorteadas').textContent = palavraSorteada.toUpperCase();
});