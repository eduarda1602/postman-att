const btnBuscar = document.getElementById('btnBuscar');
const campoBuscar = document.getElementById('campoBusca');
const resultado = document.getElementById('resultado');
const msgErro = document.getElementById('msgErro');

function realizarBusca(){

    const nome = campoBuscar.value.trim().toLowerCase();
    if ( nome === '' ) {
        alert('Por favor, digite o nome do Pokémon.');
        return
}
const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error('pokémon inexistente');

        }
            
        })
.then(data  =>{
    msgErro.classList.add('d-none');

})
document.getElementById('pokenome').textContent = data.name;
document.getElementById('pokeId').textContent = data.id;
document.getElementById('pokeAltura').textContent = data.height;
document.getElementById('pokePeso').textContent = data.weight;
document.getElementById('pokeTipo').textContent = data.Types [0].Type.name;
document.getElementById('pokeImg').src = data.sprites.front_default;

}

