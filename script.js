// Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.



let card = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
    }
]

const btn = document.getElementById('addMemberButton');
aggiornaMembri();
function aggiornaMembri(){
    let contenuto = '';
for (let i = 0; i < card.length; i++) {
    contenuto += `<div class="team-card">
                <div class="card-image">
                <img
                    src="${card[i].img}"
                    alt="${card[i].name}"/>
                </div>
                <div class="card-text">
                <h3>${card[i].name}</h3>
                <p>${card[i].role}</p>
                </div>
                </div>
                </div>`;
}
document.querySelector('.team-container').innerHTML = contenuto;
}

btn.addEventListener('click',aggiuntaCard)

function aggiuntaCard() {
    let nomeInput = document.querySelector('#name').value;
    let roleInput = document.querySelector('#role').value;
    let imageInput = document.querySelector('#image').value;

    card.push({name: nomeInput, role: roleInput, img: imageInput});
    aggiornaMembri();
    
}
