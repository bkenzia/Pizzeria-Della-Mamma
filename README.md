Affichage des produits : 
# Méthode : On a crée 3 composants : products-category / products-list / product-card et une page : all-products 
[product-card] j'ai commencé par créer le product-card en allant chercher les propriétés de l'interface IProduct
[product-list] :
- le h2 est affiché si le titre de la catégorie est valide avant de l'afficher (verifyCategorieTitle)
- on boucle avec *ngFor qui itère sur tous les éléments de 'productList.products'. Pour chaque produits, on appelle le product-card pour afficher chaque produit ainsi que leurs détails
[product-category] : 
- on appelle le composant 'filter-by-tag', on retrouve un évènement ("productsTag($event)") qui permet de prendre en charge la mise a jour de la liste des produits en fonction des filtres appliqués 
- ensuite, on utilise *ngFor pour itérer sur tous les éléments de IProductsByCategory du mock en invoquant 'product-list' en lui passant l'objet 'product' ccomme entrée '[productList]'. Aisni, on execute chaque produit en affichant leurs détails dans une liste
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
