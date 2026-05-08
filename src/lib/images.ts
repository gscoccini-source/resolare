// URL centralizzate delle foto del sito.
// Tutte da Unsplash, licenza commerciale gratuita.
// Tutte verificate visivamente — il commento descrive cosa contiene la foto.
// Per cambiare una foto, modifica solo qui — viene aggiornata ovunque.

const UNSPLASH = "https://images.unsplash.com";

export const IMG = {
  // HERO — impianto FV aereo in zona agricola (utente l'ha approvata da Unsplash)
  // Sorgente: unsplash.com/it/foto/pannelli-solari-neri-sul-campo-in-erba-verde-IwY-27ceRCA
  heroBackground: `${UNSPLASH}/photo-1629726797843-618688139f5a?auto=format&fit=crop&w=2000&q=80`,

  // CATEGORIE
  // Aerial di pannelli solari blu su erba verde (Germania) — verificata
  categoryRtb: `${UNSPLASH}/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=70`,
  // Campo agricolo al tramonto (greenfield, no solare) — verificata
  categoryGreenfield: `${UNSPLASH}/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=70`,
  // Pannelli solari ravvicinati su campo verde — verificata
  categoryPlants: `${UNSPLASH}/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=70`,

  // SELL WITH US — ingegnere con casco giallo che monta pannelli — verificata
  // Sorgente: unsplash.com/photos/JlhvFEVMwng
  sellWithUs: `${UNSPLASH}/photo-1719848576338-9516ba7ccd8b?auto=format&fit=crop&w=1600&q=75`,

  // ANNUNCI ESEMPIO — tutte verificate
  // Aerial pannelli su campo verde
  listingAgriPV: `${UNSPLASH}/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=70`,
  // Tetto industriale con pannelli FV (sawtooth) — sorgente: unsplash.com/photos/NEIfsHMjHSQ
  listingRooftop: `${UNSPLASH}/photo-1745321633881-d2d2218911bd?auto=format&fit=crop&w=900&q=70`,
  // Distesa enorme di pannelli solari (utente l'ha approvata da Unsplash)
  // Sorgente: unsplash.com/it/foto/lotto-di-pannelli-solari-grigi-dCx2xFuPWks
  listingGround: `${UNSPLASH}/photo-1508790762848-8a3096277c8f?auto=format&fit=crop&w=900&q=70`,
  // Casa in mattoni con pannelli sul tetto — sorgente: unsplash.com/photos/9CalgkSRZb8
  listingResidential: `${UNSPLASH}/flagged/photo-1566838616631-f2618f74a6a2?auto=format&fit=crop&w=900&q=70`,
  // Campo agricolo al tramonto (riusa categoryGreenfield)
  listingGreenfield: `${UNSPLASH}/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=70`,
  // Pannelli solari su campo verde (riusa categoryPlants)
  listingUtility: `${UNSPLASH}/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70`,
};
