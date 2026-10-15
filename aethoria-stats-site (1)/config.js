// Configuration du site de statistiques Aethoria (modifie ce fichier, pas index.html)
window.AETHORIA_CONFIG = {
  // Fichier publié automatiquement par le plugin dans ce dépôt (publish.github.* dans la config du plugin).
  // Peut aussi être une URL complète, ex : "https://raw.githubusercontent.com/TON_PSEUDO/TON_DEPOT/main/data/snapshot.json"
  snapshot: "data/snapshot.json",

  // OPTIONNEL — temps réel : URL HTTPS de l'API du plugin (reverse proxy / tunnel), ex : "https://stats.monsite.fr".
  // Si elle est injoignable, le site retombe tout seul sur le snapshot. Laisse null pour ne pas l'utiliser.
  // (Un site en HTTPS ne peut pas appeler une API en http:// : le navigateur le bloque.)
  api: null,

  // Fréquence de relecture du snapshot par le navigateur (secondes, min 15)
  refreshSec: 60
};
