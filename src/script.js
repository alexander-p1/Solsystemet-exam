const myPlanets = document.querySelectorAll('.planets').forEach(planet => {
    planet.addEventListener('click', function() {
        showPopup(this);
    });
});