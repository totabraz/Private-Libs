var root = document.documentElement;
// root.className += ' js';

function boxTop(idBox) {
  // The function '.offset()' return the values of left and top inside the selected element ($idbox).
  // We need the .top to retrun the TopPostion 
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  // The '$target' define which element will be animated.
  // In this case, all elements which have the class .animeIt
  var $target = $(".animeIt"),
  // animationClass é a classe com as propriedades da animação que será adicionada durante o scroll
  animationClass = 'animeIt-init',
  // windowHeight define a altura total da janela do browser. Isso serve para garantirmos que a
  // tela não fique em branco. Este valor será utilizado junto a comparação entre o elemento e o scroll
  windowHeight = $(window).height(),
  offset = windowHeight - (windowHeight / 4);
  function animeScroll() {
    // documentTop vai pegar a distância do total do scroll e o topo da página.
    // Isso em relação ao $(document).
    var documentTop = $(document).scrollTop();
    // $target é a variável que contem a classe que será animada. Queremos verificar cada uma
    // delas por isso temos o .each(), para selecionarmos cada uma individualmente.
    $target.each(function() {
    // Essa é a principal mágica, se o total de documentTop, for maior que boxTop(this) - offset,
    // adicione a classe ao elemento. Estamos se referindo ao elemento $target como this.
    if (documentTop > boxTop(this) - offset) {
      $(this).addClass(animationClass);
        // Caso contrário, remova a classe. Você pode deletar todo o else,
        // caso deseje que a animação ocorra uma única vez.
      } 
    });
  }
  // Ativa a função animeScroll()
  animeScroll();

  // Sempre que o usuário der scroll, ative novamente a função animeScroll()
  $(document).scroll(function() {
    animeScroll();
  });

});
