let hublot = document.getElementById('hublot');

// hublot.addEventListener("click", function(){
//     hublot.style.opacity="1";
// });

let sac = document.getElementById('sac');

// sac.addEventListener("click", function(){
//     sac.style.opacity="1";
// });

let sigle = document.getElementById('sigle');

// sigle.addEventListener("click", function(){
//     sigle.style.opacity="1";
// });

let symbole = document.getElementById('symbole');

// symbole.addEventListener("click", function(){
//     symbole.style.opacity="1";
// });

let roue = document.getElementById('roue');

// roue.addEventListener("click", function(){
//     roue.style.opacity="1";
// });

let racine = document.getElementById('racine');

// racine.addEventListener("click", function(){
//     racine.style.opacity="1";
// });

let erreur = [hublot,sac,sigle,symbole,roue,racine];
    console.log(erreur[1]);

for(let i = 0; i < erreur.length; i++){
    erreur[i].addEventListener("click", function(){
        erreur[i].style.opacity="1";
    });
}