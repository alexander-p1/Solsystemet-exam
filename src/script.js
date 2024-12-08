/* MINA IMPORTS FRÅN JS-FILER */
import { getKey, getPlanets } from "./api.js";
import { 
    popupOverlay,
    currentPlanet,
    planets,
    planetName,
    latinName,
    planetInfo,
    circumferenceInfo,
    distanceInfo,
    maxTempInfo,
    minTempInfo,
    moonsInfo,
    planetColor
 } from "./dom.js";

/* EVENTLISTENER OCH FUNKTION FÖR PLANETERNA */
const initPlanets = async () => {
    
    const key = await getKey('POST', 'keys');

    const fetchPlanetData = await getPlanets('GET', '/bodies', key);

    planets.forEach((planet, index) => {
        planet.addEventListener('click', () => {
            popupOverlay.style.display = 'flex';
            currentPlanet.style.backgroundColor = planetColor[index];
            const data = fetchPlanetData.bodies[index];

            planetName.textContent = data.name;
            latinName.textContent = data.latinName;
            planetInfo.textContent = data.desc;
            circumferenceInfo.textContent = data.circumference + ' km';
            distanceInfo.textContent = data.distance + ' miljoner km';
            maxTempInfo.textContent = data.temp.day + ' °C';
            minTempInfo.textContent = data.temp.night + ' °C';

            /* OM DET ÄR FÖR MÅNGA MÅNAR */
            moonsInfo.innerHTML = ''; 
            
            const totalMoons = data.moons.length;

            if (totalMoons > 0) {
                const moonList = document.createElement('ul');
                moonsInfo.appendChild(moonList);

                const moonsToShow = data.moons.slice(0, 10);
                moonsToShow.forEach(moon => {
                    const listItem = document.createElement('li');
                    listItem.textContent = moon;
                    moonList.appendChild(listItem);
                });

                if (totalMoons > 10) {
                    const showMoreText = document.createElement('p');
                    showMoreText.textContent = '...'; 
                    showMoreText.style.cursor = 'pointer'; 
                    showMoreText.style.color = 'white'; 

                    moonsInfo.appendChild(showMoreText);
                }
            } 
            else {
                moonsInfo.textContent = 'Denna har inga månar.'; 
            }
            
        });
    });
};
initPlanets();

/* EVENTLISTENER FÖR ATT STÄNGA NER OVERLAY */
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});