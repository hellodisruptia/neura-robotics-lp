# Neura Robotics – Landing Page

Landing page développée avec **Astro** et **Storyblok**, avec prise en charge de deux langues : anglais et français.

## 1. Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version compatible avec le projet).
- npm (installé avec Node.js).
- Un compte Storyblok avec accès au projet.
- Git.

## 2. Installation du projet

Clonez le repository GitHub :

```bash
git clone https://github.com/hellodisruptia/neura-robotics-lp.git
```

Accédez au dossier :

```bash
cd neura-robotics-lp
```

Installez les dépendances :

```bash
npm install
```

## 3. Configuration de Storyblok

Le projet utilise Storyblok comme CMS pour gérer le contenu de la landing page.

À la racine du projet, créez un fichier `.env` :

```env
STORYBLOK_DELIVERY_API_TOKEN=YOUR_STORYBLOK_TOKEN
```

Remplacez `YOUR_STORYBLOK_TOKEN` par le Delivery API Token de votre espace Storyblok.

**Important :**
- Ne partagez jamais ce token publiquement.
- Ne committez jamais le fichier `.env` sur GitHub.
- Le fichier `.env` doit rester dans le `.gitignore`.

## 4. Lancer le projet en local

Démarrez le serveur de développement :

```bash
npm run dev
```

Le projet est accessible aux adresses suivantes :

| Page | URL |
|---|---|
| Home – English | https://localhost:4321/ |
| Home – French | https://localhost:4321/fr |

Le serveur utilise HTTPS pour permettre l'intégration avec le Visual Editor de Storyblok.

Acceptez l'avertissement du navigateur relatif au certificat local si nécessaire.

## 5. Structure du projet

```text
neura-robotics-lp/
│
├── public/
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── fr/
│   │       └── index.astro
│   │
│   ├── storyblok/
│   │   ├── Page.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Teaser.astro
│   │   ├── Grid.astro
│   │   ├── Feature.astro
│   │   ├── CtaBanner.astro
│   │   └── SpecsTable.astro
│   │
│   └── styles/
│
├── .env
├── .gitignore
├── astro.config.mjs
├── package.json
└── README.md
```

## 6. Gestion du contenu

Le contenu des pages est géré depuis Storyblok.

Les composants Astro sont associés aux blocs Storyblok grâce au mapping configuré dans `astro.config.mjs`.

Les principales fonctionnalités :

- Gestion du contenu depuis Storyblok.
- Visual Editor pour prévisualiser les modifications.
- Composants réutilisables.
- Gestion multilingue anglais / français.
- Traductions des champs depuis Storyblok.

Les pages disponibles :

- `/` : version anglaise.
- `/fr` : version française.

## 7. Commandes disponibles

### Développement

```bash
npm run dev
```

Lance le serveur de développement local.

### Build

```bash
npm run build
```

Génère la version statique du site dans le dossier `dist/`.

### Prévisualisation du build

```bash
npm run preview
```

Permet de prévisualiser localement la version générée.

## 8. Déploiement

Le projet peut être déployé sur une plateforme compatible avec les sites statiques, comme Vercel.

Avant le déploiement :

1. Vérifiez que les contenus anglais et français sont publiés dans Storyblok.
2. Configurez la variable d'environnement `STORYBLOK_DELIVERY_API_TOKEN` sur la plateforme d'hébergement.
3. Lancez le build :

```bash
npm run build
```

Le dossier `dist/` contient les fichiers statiques à déployer.

## 9. GitHub

Repository du projet :

https://github.com/hellodisruptia/neura-robotics-lp.git

Pour envoyer les dernières modifications :

```bash
git add -A
git commit -m "Update landing page"
git push origin main
```

---

**Technologies :** Astro · Storyblok · JavaScript · CSS · GitHub