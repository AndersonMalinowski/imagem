// Cria o elemento do foguete (usando emoji como imagem)
const foguete = document.createElement('div');
foguete.innerHTML = '🚀';  // Emoji de foguete!
foguete.style.position = 'fixed';
foguete.style.fontSize = '80px';  // Tamanho do "foguete"
foguete.style.left = '0px';
foguete.style.top = '0px';
foguete.style.pointerEvents = 'none';  // Não interfere com cliques
foguete.style.zIndex = '9999';
foguete.style.userSelect = 'none';  // Evita seleção acidental
document.body.appendChild(foguete);

// Configurações de movimento
let posX = 0;
let posY = 0;
let velX = 4;  // Velocidade horizontal
let velY = 3;  // Velocidade vertical
const tamanhoFoguete = 80;

function animar() {
  // Atualiza posição
  posX += velX;
  posY += velY;

  // Bordas da tela
  const maxX = window.innerWidth - tamanhoFoguete;
  const maxY = window.innerHeight - tamanhoFoguete;

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
  foguete.style.left = posX + 'px';
  foguete.style.top = posY + 'px';

  // Continua a animação
  requestAnimationFrame(animar);
}

// Inicia
requestAnimationFrame(animar);

// (Opcional) Remove o foguete ao clicar nele
foguete.onclick = () => foguete.remove();
