# Henri-Potier-Beezen
Application "La bibliothèque d’Henri Potier", Back-End (Spring Boot), Front-End (Angular 6)

<h4>Partie Back-End : /henripoitierbe  </h4>
<h4>Partie Front-End : /henripoitierfe </h4>
<br>

<h2>Quelques explications :</h2>
<p> Dés le lancement du projet ( http://localhost:4200/ ) la première interface est affichée, et la requête ( http://localhost:8080/books/all ) fera appel en GET au service qui nous renverra la liste des livres sous le format JSON. </p>
 
<p>Dès qu’un livre est ajouté au panier une suite de séquence est exécuter, chaque exemple dépend du nombre de livre ajouté au panier :</p>
<h4>Exemple 1 :</h4>
<p>Pour un seul livre (à 35) la requête ( http://localhost:8080/offers/getone?id=percentage ) fera appel en GET au service qui nous renverra l’offre « percentage » applicable à ce panier sous le format JSON :
 {"offers":{"type":"percentage","value":4}} </p>
<p>L’offre de réduction de type « percentage » sera appliqué à ce prix (35 €) et on obtiendra un nouveau prix après réduction (33.6 €).</p>
<h4>Exemple 2 :</h4>
<p>Pour deux livres (à 35 et 30€) la requête ( http://localhost:8080/offers/all ) fera appel en GET au service qui nous renverra les offres applicables à ce panier sous le format JSON : {"offers":[{"type":"percentage","value":4},{"type":"minus","value":15},{"type":"slice","value":12,"sliceValue":100}]} </p>
<p>La meilleure offre de réduction applicable à ce prix (65 €) est l’offre de type « minus » et on obtiendra un nouveau prix après réduction (50 €).</p>
<h4>Exemple 3 :</h4>
<p>Pour cinq livres (à 35, 30€, 30€, 29€ et 28€) la requête ( http://localhost:8080/offers/all ) fera appel en GET au service qui nous renverra les offres applicables à ce panier sous le format JSON : {"offers":[{"type":"percentage","value":4},{"type":"minus","value":15},{"type":"slice","value":12,"sliceValue":100}]} </p>
<p>La meilleure offre de réduction applicable à ce prix (152 €) est l’offre de type « slice » et on obtiendra un nouveau prix après réduction (133.76 €).</p>
<h2>Développement :</h2>
  <p>	Partie BackEnd développée avec le framework Spring Boot </p>
  <p>	Partie FrontEnd développée avec le framework Angular 6  </p> 
  <p>==>	Lancement du projet avec la commande : run npm install run ng s --o </p>
<h2> Les deux Interfaces :</h2>
 
<p>L’interface principale (Liste des livres) : adresse ( http://localhost:4200/ )</p> 
<p>L’interface du panier : adresse ( http://localhost:4200/basket )</p>

