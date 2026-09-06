# dossConvert 🔄

**dossConvert** est une application web simple et intuitive permettant d'effectuer rapidement des conversions entre différentes unités de mesure.

Le projet a été réalisé dans le cadre d'un exercice pratique en développement web, avec pour objectif de mettre en pratique **HTML, CSS et JavaScript**, notamment la manipulation du DOM, la gestion des événements, les conditions et les algorithmes de conversion.

---

## 📌 Présentation

dossConvert permet à l'utilisateur de sélectionner une catégorie de mesure, de saisir une valeur et de choisir les unités de départ et d'arrivée afin d'obtenir instantanément le résultat de la conversion.

L'application est actuellement organisée autour de trois catégories principales :

* 📏 **Longueur**
* ⚖️ **Masse**
* 🌡️ **Température**

L'objectif est de proposer une interface claire, rapide et facile à utiliser tout en conservant une structure de code simple et pédagogique.

---

## ✨ Fonctionnalités

### 📏 Conversion des longueurs

Le convertisseur prend en charge différentes unités de longueur, notamment :

* Kilomètre (km)
* Centimètre (cm)
* Millimètre (mm)
* Yard (yd)
* Pied (ft)
* Pouce (in)

Les conversions sont effectuées automatiquement à partir de l'unité sélectionnée par l'utilisateur.

### ⚖️ Conversion des masses

La catégorie Masse permet de convertir différentes unités telles que :

* Kilogramme (kg)
* Gramme (g)
* Milligramme (mg)
* Tonne (t)
* Livre (lb)
* Once (oz)
* Stone (st)

Le kilogramme sert d'unité de référence pour simplifier les différentes conversions.

### 🌡️ Conversion des températures

Le convertisseur de température prend en charge :

* Celsius (°C)
* Fahrenheit (°F)
* Kelvin (K)

Les formules appropriées sont utilisées pour chaque combinaison d'unités.

---

## 🛠️ Technologies utilisées

Le projet utilise principalement les technologies web fondamentales :

| Technologie    | Utilisation                             |
| -------------- | --------------------------------------- |
| **HTML5**      | Structure des pages                     |
| **CSS3**       | Mise en forme et interface utilisateur  |
| **JavaScript** | Logique des conversions et interactions |

Aucune bibliothèque ou framework JavaScript externe n'est nécessaire pour utiliser l'application.

---

## 📂 Structure du projet

```text
dossConvert/
│
├── index.html
│
├── longueur.html
├── long.js
│
├── masse.html
├── masse.js
│
├── temp.html
├── temp.js
│
├── style.css
├── styl.css
│
└── README.md
```

### Description des fichiers

**`index.html`**
Page d'accueil permettant d'accéder aux différentes catégories de conversion.

**`longueur.html`**
Interface dédiée aux conversions de longueur.

**`long.js`**
Contient la logique JavaScript permettant d'effectuer les conversions de longueur.

**`masse.html`**
Interface dédiée aux conversions de masse.

**`masse.js`**
Contient les différentes opérations de conversion des masses.

**`temp.html`**
Interface dédiée aux conversions de température.

**`temp.js`**
Contient les formules et la logique de conversion des températures.

**`style.css` / `styl.css`**
Fichiers contenant les règles CSS utilisées pour la présentation et la mise en forme de l'application.

---

## 🚀 Installation

Aucune installation particulière n'est nécessaire.

### 1. Cloner le dépôt

```bash
git clone https://github.com/pascal205/dossConvert.git
```

### 2. Accéder au projet

```bash
cd dossConvert
```

### 3. Lancer l'application

Il suffit d'ouvrir `index.html` dans un navigateur web moderne.

Vous pouvez également utiliser l'extension **Live Server** de Visual Studio Code pour lancer le projet localement.

---

## 🧮 Principe de fonctionnement

Le fonctionnement général du convertisseur repose sur trois étapes :

```text
Valeur saisie
      ↓
Unité de départ
      ↓
Conversion
      ↓
Unité d'arrivée
      ↓
Résultat
```

Pour les longueurs et les masses, une **unité de référence** permet de simplifier les calculs.

### Exemple — masse

```text
Livre
  ↓
Kilogramme
  ↓
Gramme
```

### Exemple — longueur

```text
Kilomètre
  ↓
Mètre
  ↓
Centimètre
```

Pour les températures, les conversions utilisent directement les formules mathématiques correspondantes entre Celsius, Fahrenheit et Kelvin.

---

## ✅ Validation des données

L'application vérifie également les valeurs saisies afin d'éviter certaines erreurs.

Par exemple :

* champ vide ;
* valeur qui n'est pas numérique ;
* valeur incompatible avec certaines unités.

Lorsqu'une erreur est détectée, un message d'information est affiché à l'utilisateur.

---

## 🎯 Objectifs pédagogiques

Ce projet permet notamment de mettre en pratique :

* La manipulation du **DOM**
* Les variables JavaScript
* Les conditions `if / else`
* Les structures `switch`
* Les fonctions
* Les événements JavaScript
* La récupération des valeurs d'un formulaire
* La validation des données
* Les opérations mathématiques
* La manipulation des propriétés CSS avec JavaScript
* L'organisation d'un petit projet web

---

## 🔮 Améliorations prévues

Plusieurs évolutions peuvent être ajoutées au projet :

* [ ] Ajouter davantage d'unités de mesure
* [ ] Améliorer le design responsive
* [ ] Ajouter un bouton permettant d'inverser les unités
* [ ] Ajouter un historique des conversions
* [ ] Ajouter l'arrondissement configurable des résultats
* [ ] Améliorer les messages d'erreur
* [ ] Ajouter une interface plus moderne
* [ ] Ajouter d'autres catégories de conversion
* [ ] Optimiser et factoriser le code JavaScript
* [ ] Déployer l'application en ligne

---

## 🌐 Dépôt

Le code source du projet est disponible sur GitHub :

**https://github.com/pascal205/dossConvert**

---

## 👨‍💻 Auteur

**AMETEPE Pascal**

Projet réalisé dans le cadre de l'apprentissage et de la pratique du développement web.

---

## 📄 Licence

Ce projet est un projet personnel à vocation pédagogique.
