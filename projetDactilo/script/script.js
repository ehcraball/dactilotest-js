const listMot = ["cachalot", "petunia", "serviette"];
const listPhrase = ["GGwp", "Dont worry", "you are the chosen one"];

function afficherResultat(score, nbMotsPropose) {
  console.log(score + "/" + nbMotsPropose);
}

function choisirPhraseOuMots() {
  let choix = prompt(" veullez choisir entre les deux  : mots ou phrases");
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt(" veullez choisir entre les deux  : mots ou phrases");
  }
  return choix;
}

function lancerBoucleDeJeu(listProposition) {
  score = 0;
  for (let i = 0; i < listProposition.length; i++) {
    motUtilisateur = prompt("Entrez le mot : " + listProposition[i]);
    if (motUtilisateur === listProposition[i]) {
      score++;
    }
  }
  return score;
}
function lancerLeJeu() {
  let choix = choisirPhraseOuMots();
  let score = 0;
  let nbMotsPropose = 0;

  if (choix === "mots") {
    score = lancerBoucleDeJeu(listMot);
    nbMotsPropose = listMot.length;
  } else {
    score = lancerBoucleDeJeu(listPhrase);
    nbMotsPropose = listPhrase.length;
  }
  afficherResultat(score, nbMotsPropose);
}
