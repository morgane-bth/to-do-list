let inputUser = document.getElementById("input-todo");
let boutonAjoutTache = document.getElementById("ajoutTache");
let containerToDo = document.getElementById("container-todo");

/************ AJOUT DES TACHES A LA TO DO LIST + VERIFICATION ************/

function addToDo() {
    //on declare une variable tache qui crée un element li. tache = li
    let tache = document.createElement('li');
    tache.classList.add('tache-a-faire');

    if (inputUser.value.trim() == "" || inputUser.value == null) {
        alert("Veuillez saisir une tache");
        return false;
    } else {

        tache.innerHTML = inputUser.value;

        containerToDo.appendChild(tache);

        /************ BOUTON QUI SUPPRIME INDIVIDUELLEMENT LES TACHES ************/

        let aSupprimer = document.createElement('span');
        aSupprimer.classList.add('btn-a-supprimer');

        aSupprimer.innerHTML = '<i class="fa-solid fa-trash"></i>';

        aSupprimer.style = 'color: #dd0426; font-size: 20px; cursor: pointer; margin-left: 10px;';

        tache.appendChild(aSupprimer);

        //on va creer l'ecouteur d'evenement qui supprime la tache lors du clique sur le btn a supprimer 
        aSupprimer.addEventListener("click", function (event) {
            event.stopPropagation();
            tache.remove();
            save()
        });

        /************ AJOUT DE LA CHECKBOX + TOGGLE ************/

        let checkbox = document.createElement('input');

        //on assigne les atributs de la checkbox crée
        checkbox.type = "checkbox";

        checkbox.style = 'margin-right: 10px;'


        //on ajoute la checkbox avant le li 
        tache.prepend(checkbox);


        //ecouteur d'evenement qui se deroule seulement quand on clique sur la checkbox
        //on va ajouter une class "rayé" a tache (li) qui se déroule seulement quand on clique sur la checkbox 
        //quand on clique sur la checkbox, la tache est rayé 
        checkbox.addEventListener("click", function () {
            tache.classList.toggle('rayé');
            save()
        });
        inputUser.value = "";
        save()
    }
}
//enfin on crée un ecouteur d'evenement qu'on relie au boutonAjoutTache qui lors du clique sur le btn crée un tache 
boutonAjoutTache.addEventListener("click", addToDo)


/************ FONCTION SAUVEGARDER ************/

function save() {
    localStorage.setItem("todo", containerToDo.innerHTML);
}

/************ FONCTION RECHARGER ************/

function load() {
    containerToDo.innerHTML = localStorage.getItem("todo");
    let liElements = document.getElementsByClassName('tache-a-faire');
    let spanElements = document.getElementsByClassName('btn-a-supprimer');

    let li = liElements[i];
    let span = spanElements[i];

    for (let index = 0; index < li.length; index++) {

        span.addEventListener("click", function (event) {
            // event.stopPropagation();
            li.remove();
            save()
        });

        li.addEventListener("click", function () {
            li.classList.toggle('rayé');
            save()
        });

    }
}

load();