fetch('http://localhost:3000/pets') // Faz a requisição GET
  .then(resposta => resposta.json()) // Converte a resposta para JSON
  .then(dados => {
    const lista = document.getElementById('lista-pets');
    lista.innerHTML = ''; // limpa a lista antes de renderizar

    // Percorre todos os pets e cria elementos na tela
    dados.forEach(pet => {
      const item = document.createElement('li');
      item.textContent = `${pet.nome} (${pet.especie}) - Raça: ${pet.raca}`;
      lista.appendChild(item);
    });
  })
  .catch(erro => {
    console.error('Erro ao buscar os pets:', erro);
  });

  // Chama a função quando a página carregar
document.addEventListener('DOMContentLoaded', carregarPets);