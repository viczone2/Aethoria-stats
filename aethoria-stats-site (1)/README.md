# Site de statistiques Aethoria

Ce dossier est la page de stats (fichiers statiques). **Avec le plugin, tu n'as rien à y toucher** : la commande
`/stats site` l'installe dans le sous-dossier `stats/` de ton dépôt GitHub et la tient à jour.
➡ Voir `DEMARRAGE-RAPIDE.md`.

Hébergement ailleurs que GitHub : envoie ces fichiers sur ton hébergeur et fais écrire `snapshot.json` dans le dossier
`data/` (option `publish.local-file` du plugin). `config.js` : adresse du fichier de données (`snapshot`), adresse HTTPS
de l'API pour du temps réel (`api`, optionnel), fréquence de relecture (`refreshSec`).
`data/snapshot.json` fourni ici = données de démonstration (bandeau « Démonstration »).
