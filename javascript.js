// Cria a imagem
const img = document.createElement('img');
img.src = 'https://via.placeholder.com/80?text=🚀'; // Troque por sua imagem
img.style.position = 'fixed';
img.style.width = '80px';
img.style.height = '80px';
img.style.left = '0px';
img.style.top = '0px';
img.style.pointerEvents = 'none'; // Evita interferir com cliques
img.style.zIndex = '9999';
document.body.appendChild(img);

// Configurações de movimento
let posX = 0;
let posY = 0;
let velX = 4;  // velocidade horizontal
let velY = 3;  // velocidade vertical
const tamanhoImg = 80;

function animar() {
  // Atualiza posição
  posX += velX;
  posY += velY;

  // Detecta bordas da tela
  const maxX = window.innerWidth - tamanhoImg;
  const maxY = window.innerHeight - tamanhoImg;

  // Colisão horizontal
  if (posX <= 0 || posX >= maxX) {
    velX = -velX;
    posX = posX <= 0 ? 0 : maxX;
  }

  // Colisão vertical
  if (posY <= 0 || posY >= maxY) {
    velY = -velY;
    posY = posY <= 0 ? 0 : maxY;
  }

  // Aplica posição
  img.style.left = posX + 'px';
  img.style.top = posY + 'px';

  // Continua a animação
  requestAnimationFrame(animar);
}

// Inicia
requestAnimationFrame(animar);

// (Opcional) Remove a imagem ao clicar nela
img.onclick = () => img.remove();
