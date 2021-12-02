# E2E Avatars

Ce projet a pour but d'implémenter la librairie [avataaars](https://github.com/fangpenlin/avataaars#readme) en suivant [cet exemple](https://github.com/fangpenlin/avataaars-generator). L'objectif est de réussir à afficher les options sous forme d'image au lieu de le faire avec des selects comme dans l'exemple.

## Fichiers
* `src/index.js`: Fichier d'instanciation de l'application
* `src/App.js`: Fichier racine de l'application
* `src/Avatars.tsx`: Fichier contenant les composants utiles au générateur d'avatar

## Composants
* `Pieces`: Composant sensé pouvoir afficher toutes les pièces que l'on peut sélectionner
* `PartSelector`: Composant sensé pouvoir afficher toutes les pièces que l'on peut sélectionner

## Ce qui a déjà été fait:
* Création d'une application React
* Importation de la librairie `avataaars`
* Affichage d'une seule pièce en particulier
* Instanciation

Le composant `Piece` est donné par la librairie `avataaars` et permet d'afficher une seule pièce pourvu qu'on lui donne les bons paramètres dont la partie et la valeur souhaitée.

`OptionContext` est instancié au début du composant `Pieces`. Cette classe est essentiel à la création d'un avatar, il permet de lister les différentes parties, leur disponibilité et les valeurs possibles. Elle est utilisée pour définir la variable `avatarParts` qui contient donc la liste des parties de l'avatar. Cette classe devrait aussi permettre de définir et retrouver des valeurs pour ces parties mais cela ne fonctionne pas encore, c'est ce que j'essaie de faire juste après la déclaration de `avatarParts`.

Il y a des hooks qui ont été déclarés pour tenter reproduire le fonctionnement de l'exemple mais ils ne fonctionnent pas, certainement car l'évènement `change` n'est jamais déclenché.

Le composant `PartSelector` est sensé donner un sélecteur de valeurs imitant le comportement du `select` de l'exemple mais en sélectionnant une valeur en cliquant sur une image. Il est relié à une interface appelée `SelectorProps` qui contient la déclaration des propriétés qui lui sont passées. Ces propriétés sont:
* `type`: Le type (ou partie) d'élément à sélectionner
* `label`: Le texte à afficher comme "titre" de la section
* `optionContext`: L'object `OptionContext` permettant d'accéder à la configuration de l'Avatar
À partir du type, il est possible de retrouver le nom de la propriété correspondante dans l'`OptionContext`. L'`optionState` est retrouvé grâce à l'`optionContext` et est associé à un type en particulier (celui passé en propriété). Il devrait permettre de récupérer la liste des valeurs disponibles pour ce type cependant ça ne fonctionne pour l'instant pas.

## Ce qu'il reste à faire
* Obtenir des valeurs par défaut pour l'`OptionContext`
* Afficher les images de toutes les valeurs possibles pour chaque partie disponible
* Sélectionner une valeur en cliquant sur l'image

## Piste à explorer
Peut-être qu'il faudrait instancier un objet `Avatar` qui partage l'unique `OptionContext` afin d'avoir des valeurs par défaut et ainsi rendre certaines parties disponible (pour l'instant aucun n'est disponible sauf erreur).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
