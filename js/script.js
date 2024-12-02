window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    header.classList.toggle("rolagem", window.scrollY > 100);
});

const image = document.getElementById('imagem-jp');
if (image) {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
}

function showModal(cardId) {
    const modal = document.getElementById('modal');
    const titulo = document.getElementById('modal-titulo');
    const texto = document.getElementById('modal-texto');
  
    
    switch (cardId) {
      case 1:
        titulo.textContent = 'Desfiladeiro de Takachiro';
        texto.textContent = 'Imagine atravessar lentamente um desfiladeiro vulcânico profundo com um barco a remo, enquanto uma cachoeira forma um arco-íris na névoa ao seu redor. O desfiladeiro é formado por uma junção colunar, resultante do resfriamento rápido de um antigo fluxo de lava. De barco, a visão do desfiladeiro logo acima dos 17 metros das Cataratas é verdadeiramente emocionante.';
        break;
      case 2:
        titulo.textContent = 'Monte Fuji';
        texto.textContent = 'O Monte Fuji é o símbolo do Japão e a montanha sagrada mais venerada pelos japoneses. Trata-se de um vulcão inativo desde 1708 que se ergue a mais de 2.400 metros de altura e possui o seu topo coberto por neve, em abril a maio acontece o Fuji Shibazakura Festival, onde os visitantes tem a oportunidade de ver o Shibazakura em plena floração. Neste ano de 2024, a data do festival foi em  de 13 de abril a 26 de maio, conforme informado no site oficial do Fuji Motosu Lake Resort.';
        break;
      case 3:
        titulo.textContent = 'Cevernas de Akiyoshido';
        texto.textContent = 'As vastas terras de Akiyoshidai são pontilhadas com pináculos de calcário, exibindo uma paisagem raramente vista no Japão. A planície era um recife de corais de 300 milhões de anos atrás e a topografia cárstica vista hoje é o resultado da dissolução gradual do calcário pela chuva ao longo dos anos.';
        break;
    }
  
    modal.style.display = 'flex';
  }


  document.addEventListener('DOMContentLoaded', () => {
  
    const imagens = document.querySelectorAll('.img-containerT img, .img-container2 img');

    imagens.forEach(imagem => {
        imagem.addEventListener('mouseover', () => {
            imagem.style.transition = 'transform 0.3s ease'; 
            imagem.style.transform = 'scale(1.2)'; 
        });

        imagem.addEventListener('mouseout', () => {
            imagem.style.transform = 'scale(1)'; 
        });
    });
});


  
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
  
let currentScroll = 0;
const carousel = document.querySelector('.carousel');
const totalVideos = document.querySelectorAll('.div-video').length;
const videoWidth = document.querySelector('.div-video').offsetWidth;

function scrollRight() {
  if (currentScroll < totalVideos - 1) {
    currentScroll++;
    carousel.style.transform = `translateX(-${videoWidth * currentScroll}px)`;
  }
}

function scrollLeft() {
  if (currentScroll > 0) {
    currentScroll--;
    carousel.style.transform = `translateX(-${videoWidth * currentScroll}px)`;
  }
}

document.querySelector('.carousel-btn.next').addEventListener('click', scrollRight);
document.querySelector('.carousel-btn.prev').addEventListener('click', scrollLeft);


function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 35.0000, lng: 136.0000}
  });

  var takachiho = {lat: 32.711445, lng: 131.309250};
  var akiyoshido = {lat:  34.217, lng:  131.300};
  var monteFuji = {lat: 35.363602, lng: 138.726379 }

  new google.maps.Marker({
      position: takachiho,
      map: map,
      title: 'Takachiho'
  });

  new google.maps.Marker({
      position: akiyoshido,
      map: map,
      title: 'Akiyoshido'
  });

  new google.maps.Marker({
    position: monteFuji,
    map: map,
    title: 'Monte Fuji'
});
}

document.getElementById('form-feedback').addEventListener('submit', function(event) {
  let isValid = true;

  document.getElementById('name-error').innerText = '';
  document.getElementById('email-error').innerText = '';
  document.getElementById('message-error').innerText = '';

  const name = document.getElementById('name').value.trim();
  if (name === '') {
      document.getElementById('name-error').innerText = 'Por favor, insira seu nome.';
      isValid = false;
  }
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
      document.getElementById('email-error').innerText = 'Por favor, insira seu e-mail.';
      isValid = false;
  } else if (!emailRegex.test(email)) {
      document.getElementById('email-error').innerText = 'Por favor, insira um e-mail válido.';
      isValid = false;
  }

  const message = document.getElementById('message').value.trim();
  if (message === '') {
      document.getElementById('message-error').innerText = 'Por favor, insira sua mensagem.';
      isValid = false;
  }
  if (!isValid) {
      event.preventDefault();
  }
});




