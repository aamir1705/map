
var mymap = L.map('mapid').setView([23.1815, 79.9864], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWFtaXIxNzA1IiwiYSI6ImNrYTltdnUzOTA2dW8zNW9pZ2pmMjBoOWQifQ.GECdmPfUFyKNRjq8CZhRrA'
}).addTo(mymap);