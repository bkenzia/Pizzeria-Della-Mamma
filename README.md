Affichage des produits :

# Méthode : On a crée 3 composants : products-category / products-list / product-card et une page : all-products

[product-card] j'ai commencé par créer le product-card en allant chercher les propriétés de l'interface IProduct
[product-list] :

- le h2 est affiché si le titre de la catégorie est valide avant de l'afficher (verifyCategorieTitle)
- on boucle avec \*ngFor qui itère sur tous les éléments de 'productList.products'. Pour chaque produits, on appelle le product-card pour afficher chaque produit ainsi que leurs détails
  [product-category] :
- on appelle le composant 'filter-by-tag', on retrouve un évènement ("productsTag($event)") qui permet de prendre en charge la mise a jour de la liste des produits en fonction des filtres appliqués
- ensuite, on utilise \*ngFor pour itérer sur tous les éléments de IProductsByCategory du mock en invoquant 'product-list' en lui passant l'objet 'product' ccomme entrée '[productList]'. Aisni, on execute chaque produit en affichant leurs détails dans une liste
  page [all-products] :
- on invoque 'products-category' et on lui passe en entrée [products] pour afficher les produitss triés par catégorie.

Partie filtre des produits :

## Méthode : On a crée un composant 'filter-by-tag' pour l'affichage HTML + méthodes

[filter-by-tag.TS] :

- Propriété 'productsCategories' de type IProductsByCategory[] qui est initialisée avec 'PRODUCTS' qui contient notre liste de produits triés par catégorie. Elle stocke tous les produits
- Propriété 'tags' de type TagType[] qui contient notre liste de tags qui proviennent du mock. tags stocke tous les tags possibles pour filtrer les produits
- Méthode "tagsselected" qui prend en entrée un tag et retourne une liste de tags séléctionnés. On appelle cette méthode a chaque fois qu'un tag et séléctionné ou déséléctionné
- Méthode "findTag" prend en entrée une liste de tags et un tag et renvoie un boolean qui indique si le tag est présent dans la liste de tags
- Méthode "updateProductCategorie" prend en entrée le tag et met a jour la liste des produits. On utilise la méthode 'tagssSelected' pour obtenir la liste de tags séléctionnés et filtre les produits en fonction de cette liste. La méthode retourne la liste des produits filtrés mis a jour
  [filter-by-tag.HTML] :
- Chaque tag a un lien de routeur et déclenche la méthode 'updateProductCategorie' grace a l'evenement (click)

### Il y a aussi le service "productList" avec une méthode "getProducts" qui prend le parametre 'tag' de type TagType. La méthode verifie si le tableau de tags contient un seul element. Si c'est le czs, elle renvoie tous les produits. Sinon, elle filtre les produits en fonction du tag fourni. "includes" permet de verifier si le tag est inclus dans le tzableau de tags du produit.

# Form number :

## Typescript :

- importation de FormBuilder et FormGroup pour manipuler des formulaires
- formNumberTable!: FormGroup represente le formulaire de saisie du numero de table
- error: string = '' qui permet de stocker un message d'erreur en cas de saisie incorrecte du numero de table
- la methode getNumber pour recuperer le numero de table stocké dans le local storage du navigateur
- methode getInput qui permet de recuperer la valeur saisie par l'utilisateur
- methode validateNumber est appelé. Elle recupere la valeur de l'utilisateur en appelant la methode getInput. Si cette valeur est comprise entre 1 et 14 , la methode navigate est appelée pour naviguer vers la page all-products. Sinon elle affiche une erreur.
- methode stockNumber utilise la methode setItem pour stocker le numero de table dans le navigateur pour conserver le numero de table meme si l utilisateur recharge ou ferme la page
- methode getNumber permet de recuperer le numero de table stocké dans le navigateur a l'aide de la methode getItem. Si un numero de table est deja stocké, elle renvoie ce numero. Sinon elle utilise la methode stockNumber pour stocker le numero de table saisi par l'utilisateur. Elle renvoie ensuite le numero de table recupéré ou stocké.

### HTML :

- le HTML affiche un message de bienvenue si aucun numero de table n'a ete stocké localement, sinon elle affiche le numero de table. [ngClass] permet de masquer ou afficher des elements en fonction de la presence ou l'absence d'un numero de table dans le local storage.

# PANIER :

---

Création des éléments suivants:

Pages:
basket
order-success

Services:
basket
product

Components:
basket
button-addToBasket

---

app.component.ts
Initialisation + création d'un nouveau panier au lancement de l'app
(Inspection/console/application/localstorage)

app.routing-module.ts
création des paths des pages basket & order-success

---

## SERVICES

products.service.ts
creation des méthodes:
getProducts() - retourne liste de l'ensemble des produits
getProduct(id:number) - retourne un produit par son id
getCategoryProduct() - retourne une categorie de produit

basket.service.ts
-> mis en place avec le service products
création des méthodes:
createBasket() - créer un panier
addToBasket() - ajouter un produit au panier
getBasket() - récupérer le panier existant. S'il n'existe pas en amont, créer un panier
saveBasket() - sauvegarde/actualise le panier
getBasketTotalPrice() - calculer le prix total du panier
getTotalQuantity() - connaitre la quantité de produit dans le panier
removeProduct() - supprimer un produit du panier

/!\ NOTE: composant non aboutit:
.html: manque la partie de code concernant l'affichage du récapitulatif des ingrédients inclus (si conservés ou non) et des ingrédients en extra (quantité sélectionné et prix)

---

## COMPONENTS

basket.component.html & .ts
-> Récupérer les infos des produits sélectionnés,
Appelle les services product & basket ci dessus.
Appelle les méthodes suivantes:

- getBasket() - récupérer le panier existant. S'il n'existe pas en amont, créer un panier
- removeProduct() - supprimer un produit du panier

button-addbasket.html & .ts
Bouton permettant l'ajout du pruduit précédement sélectionne après le choix des ingrédients sur la page customisation
Appelle les services product & basket ci dessus.
Appelle la méthode suivante:

- addToBasket() - ajouter un produit au panier
  Redirige vers la page du panier avec routerLink="/basket"

---

## PAGES

basket.component.html & .ts
-> Page récapitulative du panier avant envoi de la commande
.html: insertion du component basket <app-basket></app-basket>
Appelle les services product & basket ci dessus.
Appelle les méthodes suivantes:

- getBasket() - récupérer le panier existant. S'il n'existe pas en amont, créer un panier
- removeProduct() - supprimer un produit du panier
  Liens Router:
- routerLink="/all-products" : lien retour à la page de produits si panier vide
- routerLink="/order-success": bouton de confirmation de commande, redirige vers la page order-success
- routerLink="/" : lien retour à la page d'accueil, si besoin de modifier le numéro de table

/!\ NOTE: page non aboutit:
La condition Display (yes/none) du message en cas de panier vide n'est pas codée. Le message apparait toujours même si le panier contient un produit.

order-success.component.html & .ts
-> Page de confirmation de l'envoi de la commande en cuisine
.html: insertion du component basket <app-basket></app-basket>
Liens Router:

- routerLink="/" : lien retour à la page d'accueil, en cas de nouvelle commande

/!\ NOTE: page non aboutit:
Besoin d'appeller le component form-number-table pour faire apparaitre le numéro de la table selectionée au départ, le code mal renseigné

## customisation de produits :

- Affichage des produits à partir du mocks products.ts = le titre, la description, le prix initial, les ingrédients inclus et les extras.

Katia :

- Affichage des extras par ordre alphabétique grâce à la méthode 'sort'. Je l'ai appelé dès le ngOnInit pour que le trie se fasse dès l'affichage du composant.

- Tentative de faire fonctionner les boutons '+' et '-' grâce à des fonctions appropriés, mais je ne maitrise pas encore très bien les chemins pour arriver au mock associé.
