# Convertor 🔄

**Convertor** est une application web de conversion d'unités de mesure, conçue pour permettre de convertir rapidement et simplement différentes valeurs entre plusieurs unités.

Le projet a été développé avec **HTML, CSS et JavaScript**, dans le but de mettre en pratique les fondamentaux du développement web, notamment la manipulation du DOM, la gestion des événements, la validation des données et l'utilisation des structures conditionnelles.

---

## 📌 Présentation

Convertor propose une interface simple permettant à l'utilisateur de :

1. sélectionner une catégorie de mesure ;
2. saisir une valeur ;
3. choisir l'unité de départ ;
4. choisir l'unité d'arrivée ;
5. obtenir automatiquement le résultat de la conversion.

L'application prend actuellement en charge trois catégories :

* 📏 **Longueur**
* ⚖️ **Masse**
* 🌡️ **Température**

---

## ✨ Fonctionnalités

### 📏 Longueur

Convertor permet d'effectuer des conversions entre plusieurs unités de longueur :

* Kilomètre (km)
* Centimètre (cm)
* Millimètre (mm)
* Yard (yd)
* Pied (ft)
* Pouce (in)

Les conversions sont calculées automatiquement en fonction de l'unité de départ et de l'unité d'arrivée.

### ⚖️ Masse

La catégorie Masse prend en charge les unités suivantes :

* Kilogramme (kg)
* Gramme (g)
* Milligramme (mg)
* Tonne (t)
* Livre (lb)
* Once (oz)
* Stone (st)

Le kilogramme est utilisé comme unité de référence afin de simplifier les conversions.

### 🌡️ Température

Convertor permet également de convertir les températures entre :

* Celsius (°C)
* Fahrenheit (°F)
* Kelvin (K)

Les formules mathématiques appropriées sont appliquées selon les unités sélectionnées.

---

## 🛠️ Technologies utilisées

| Technologie    | Utilisation                             |
| -------------- | --------------------------------------- |
| **HTML5**      | Structure des interfaces                |
| **CSS3**       | Design et mise en forme                 |
| **JavaScript** | Logique des conversions et interactions |

Le projet ne nécessite actuellement aucun framework ou bibliothèque JavaScript externe.

---

## 📂 Structure du projet

```text
Convertor/
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

| Fichier         | Description                              |
| --------------- | ---------------------------------------- |
| `index.html`    | Page d'accueil de l'application          |
| `longueur.html` | Interface de conversion des longueurs    |
| `long.js`       | Logique des conversions de longueur      |
| `masse.html`    | Interface de conversion des masses       |
| `masse.js`      | Logique des conversions de masse         |
| `temp.html`     | Interface de conversion des températures |
| `temp.js`       | Logique des conversions de température   |
| `style.css`     | Styles généraux de l'application         |
| `styl.css`      | Styles complémentaires de l'interface    |

---

## ⚙️ Installation

Convertor est une application web statique. Aucune installation de dépendances n'est nécessaire.

### Cloner le projet

```bash
git clone https://github.com/pascal205/dossConvert.git
```

### Accéder au dossier

```bash
cd dossConvert
```

### Lancer l'application

Ouvrez simplement le fichier :

```text
index.html
```

dans un navigateur web moderne.

Pour une meilleure expérience de développement, le projet peut également être lancé avec **Live Server** dans Visual Studio Code.

---

## 🔄 Fonctionnement

Le principe général de l'application est le suivant :

```text
┌─────────────────────┐
│    Valeur saisie    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Unité de départ   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│     Conversion      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Unité d'arrivée   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│      Résultat       │
└─────────────────────┘
```

Pour les conversions de longueur et de masse, une unité de référence est utilisée afin de faciliter les calculs.

### Exemple

Pour une conversion de masse :

```text
Livre
   ↓
Kilogramme
   ↓
Gramme
```

Pour une conversion de longueur :

```text
Kilomètre
   ↓
Mètre
   ↓
Centimètre
```

Les températures utilisent quant à elles les formules spécifiques entre Celsius, Fahrenheit et Kelvin.

---

## ✅ Validation des données

L'application intègre également des contrôles sur les valeurs saisies.

Elle peut notamment détecter :

* un champ vide ;
* une valeur qui n'est pas numérique ;
* une valeur invalide pour certaines unités.

Lorsqu'une erreur est détectée, un message est affiché afin d'informer l'utilisateur.

---

## 🎯 Objectifs du projet

Ce projet permet de pratiquer plusieurs notions fondamentales de JavaScript :

* Variables et constantes
* Conditions `if / else`
* Structures `switch`
* Fonctions
* Événements
* Manipulation du DOM
* Récupération des valeurs des formulaires
* Validation des données
* Opérations mathématiques
* Manipulation des propriétés CSS avec JavaScript
* Organisation d'un projet web

Convertor constitue également une base pour expérimenter progressivement de nouvelles fonctionnalités et améliorer la qualité du code.

---

## 🚀 Améliorations futures

Plusieurs fonctionnalités peuvent être ajoutées au projet :

* [ ] Ajouter de nouvelles unités de mesure
* [ ] Ajouter un bouton pour inverser les unités
* [ ] Ajouter un historique des conversions
* [ ] Améliorer la précision et l'arrondissement des résultats
* [ ] Améliorer les messages d'erreur
* [ ] Optimiser le code JavaScript
* [ ] Améliorer davantage le responsive design
* [ ] Ajouter de nouvelles catégories de conversion
* [ ] Ajouter un mode sombre
* [ ] Déployer l'application en ligne

---

## 🌐 Projet

Le code source du projet est disponible sur GitHub :

[Dépôt GitHub de Convertor](https://github.com/pascal205/dossConvert?utm_source=chatgpt.com)

---

## 👨‍💻 Auteur

**AMETEPE Pascal**

Projet personnel réalisé dans le cadre de l'apprentissage et de la pratique du développement web.

---

## 📄 Licence

Ce projet est actuellement un projet personnel à vocation pédagogique.
