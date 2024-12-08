/* DOM ELEMENT FÖR OVERLAY */
export const popupOverlay = document.querySelector('.popup-overlay');
export const currentPlanet = document.querySelector('.current-planet');
export const planets = document.querySelectorAll('.planets');

/* DOM ELEMENT INFO */
export const planetName = document.querySelector('.planet-name');
export const latinName = document.querySelector('.latin-name');
export const planetInfo = document.querySelector('.planet-info');
export const circumferenceInfo = document.querySelector('.circumference');
export const distanceInfo = document.querySelector('.distance');
export const maxTempInfo = document.querySelector('.temp-day');
export const minTempInfo = document.querySelector('.temp-night');
export const moonsInfo = document.querySelector('.moons-info');

/* FÄRG FÖR VARJE PLANET */
export const planetColor = [
    '#FFD029', //Solen
    '#888888', //Merkurius
    '#E7CDCD', //Venus
    '#428ED4', //Jorden
    '#EF5F5F', //Mars
    '#E29468', //Jupiter
    '#C7AA72', //Saturnus
    '#C9D4F1', //Uranus
    '#7A91A7', //Neptunus
];