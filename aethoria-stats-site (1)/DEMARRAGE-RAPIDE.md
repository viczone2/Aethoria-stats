# AethoriaStats 1.4 — démarrage rapide

## 1. Installer le plugin
Dépose `AethoriaStats-1.4.0.jar` dans `plugins/` et **redémarre** le serveur (pas de `/reload`).
Dans le jeu : `/stats` (aperçu), `/stats lag` (qui fait lag), `/stats report` (rapport complet à m'envoyer).
Le plugin détecte tout seul tes plugins **et tes mods** (jars de `plugins/` et `mods/`) : rien à configurer.

## 2. Mettre les stats sur un site GitHub (une seule fois, ~10 min)
Le site s'installe dans un **sous-dossier `stats/`** de ton dépôt : ton site principal n'est **jamais** écrasé,
et les données vont sur une branche séparée (`stats-data`) qui ne relance pas la construction de ton site.

1. Un dépôt GitHub **public** existe déjà (ou crée-le : https://github.com/new, coche « Add a README »).
2. Crée un token (formulaire prérempli) :
   https://github.com/settings/personal-access-tokens/new?name=AethoriaStats&description=Publication+des+stats&expires_in=365&contents=write&pages=write
   → « Repository access » : **Only select repositories** → ton dépôt → **Generate token** → copie-le.
3. Dans `plugins/AethoriaStats/config.yml`, partie `site:` :
   ```yaml
   site:
     repo: "TON_PSEUDO/TON_DEPOT"     # ex : viczone2/Aethoria
     token: "github_pat_xxxxxxxx"
   ```
   puis `/stats reload`.
4. Tape `/stats site` : le plugin dépose la page dans `stats/`, crée la branche de données, publie les premières
   statistiques et t'affiche l'adresse : `https://TON_PSEUDO.github.io/TON_DEPOT/stats/`

Ensuite tout se met à jour tout seul toutes les 10 minutes. Si GitHub Pages n'est pas encore activé sur ton dépôt,
le plugin te dit où cliquer (Settings > Pages > main / root).

## 3. Ce que tu verras sur le site
Joueurs, record, TPS, ping · **Diagnostic automatique** (conseils) · **Qui occupe le serveur** (plugin/mod et type de travail,
5 min / 1 h) · pics de lag avec **sources et causes** · carte de chaleur jour × heure · tendance 7 jours · rétention ·
bouton **Copier le rapport** (texte à coller dans une conversation avec Claude).

## 4. Rapports pour analyse détaillée
- Public (sans pseudo ni coordonnée) : bouton « Copier le rapport » sur le site.
- **Complet (privé)** : `/stats report` → fichier `plugins/AethoriaStats/reports/rapport-….txt`, ou le bouton
  « Générer le rapport » du panel `/admin`. Envoie-moi le contenu pour une analyse approfondie.

## Si ça coince
`/stats site` explique chaque erreur. Cas fréquents : nom du dépôt faux ou token d'un autre compte (« dépôt introuvable »),
token sans la permission « Contents » ou sans accès à CE dépôt, Pages non activé (1 clic), dépôt privé (passe-le en public).
Ne partage jamais le token (ni en capture d'écran). Il expire au bout d'un an : refais l'étape 2.

## Panel d'administration (optionnel, désactivé par défaut)
Console, gamerules (cases à cocher + recherche), joueurs, whitelist, mondes, plugins : voir `admin.*` dans `config.yml`.
Il demande un port web supplémentaire chez l'hébergeur, un `admin.token` de 16 caractères minimum et, idéalement,
`admin.allowed-ips`. Le dashboard temps réel intégré (`web.enabled`) demande aussi ce port : désactivé par défaut.
