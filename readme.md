# Glory Days project
```js
const projectNaam = "Glory Days"
const website = "https://www.goodgoodnotbad.org/"
const opdrachtgevers = ["Marnix Tellings", "Bas Hennekam"]
const studenten = ["Rick Groot", "Max Mulder"]

const minor = {
    naam: "Web Design & Development",
    jaar: 2021,
    coach: "Joost Faber"
}
```

## Opdracht
<img align='right' src="https://github.com/RickGroot/Glory-Days/blob/main/assets/logo.jpg?raw=true" width="230" style="background: white">
Wij, Rick en Max gaan voor Good Good Not Bad werken aan een Ipad variant van de huidige Iphone App van Glory Days. De huidige Iphone variant is gemaakt voor familie die in samenwerking met de alzheimer patiënt zijn favoriete muziek gaat uitzoeken. Wij gaan dus aan de gang aan de Ipad variant die niet bedoeld is voor de familie maar voor de echte verzorgers van Alzheimer patiënten. Hiervoor moeten kijken naar de behoefte van verzorgers voor de applicatie. Zo is het ook voor ons de uitdaging om een al bestaande iphone variant te upscalen tot ipad variant waarbij wij de huidige stijl in acht nemen. Verders moeten wij nog kijken naar extra opties van de ipad en extra functies voor de verzorgers.


## Inhoud
* [Persona](#persona)
* [User scenario](#user-scenario)

## Persona
![Sarah](https://github.com/RickGroot/Glory-Days/blob/main/assets/persona.jpg?raw=true)

## User scenario
Sarah doet haar dagelijkse rondje door het tehuis heen en komt langs de kamer van Arie. Arie is 85 jaar oud en heeft erg veel last van Alzheimers. Hij herkent zijn eigen familie niet meer en kan zich niets meer van zijn jeugd herinneren. Sarah vindt dit erg jammer omdat ze hierdoor nooit een gesprek heeft met Arie, terwijl hij veel leuke foto’s van zijn kinderen op vakantie heeft staan in zijn kamer.

Om sociaal contact te leggen gebruikt Sarah de Glory Days ipad app. Hiermee kan ze het profiel bekijken van Arie om vervolgens zijn favoriete muziek af te spelen. De familie van Arie heeft ook al wat herinneringen tekstueel en visueel toegevoegd aan bepaalde nummers. Hierdoor kan Sarah een gesprek aanknopen met Arie over bepaalde onderwerpen terwijl ze het nummer afspeelt.

Zo komt Sarah erachter dat Arie tijdens de vakantie naar luxemburg in 1983 constant de CD van Michael Jackson afspeelde genaamd BAD. Sarah maakt een kopje thee voor haar zelf en gaat even zitten, ze zet vervolgens de muziek van de CD aan en ziet Arie direct opvrolijken. Arie begint uit zichzelf te praten over de vakantie. Sarah heeft voor het eerst dat ze Arie kent een gesprek met hem, ze wordt hier erg gelukkig van. Sarah blijft een kwartier lang praten met Arie en komt erachter dat Arie Michael Jackson fan is en bij een concert van hem is geweest. Dit onthoudt ze en vult ze aan onder zijn profiel in de Glory Days app. Ook zegt Arie dat hij tijdens de vakantie van 1993 op vakantie naar Spanje de opvolger van BAD afspeelde in de auto genaamd Dangerous. Ook dit vult ze aan in de Glory Days app zodat de familie hier ook van af weet. Nu kan ze de volgende keer dat ze met Arie is de Dangerous CD afspelen en het over een andere vakantie van hem hebben, alleen nu moet ze naar de volgende patiënt omdat ze anders haar ronde niet kan afmaken.

## Requirements
* Database
    * Clients
    * Caretakers
    * Connections between users
* API's
    * Play music
* Data
    * Users
    * Images
    * Client mindset
* Caretaker interactions
    * Connect to client
    * Add songs to playlists
    * Add images (with texts) to songs
    * look into clients information (mainly mood)
    * Different types
        * Family
        * Healthcare workers
* Client interactions
    * Listen to song/playlist
    * View memories added by caretakers
    * Input current mood
* Real time events
    * Update playlist when song is added
    * Start a memory from different device

## Tablet extra functions
Maybe add some kind of logbook which contains all the clients emotions over the passed month?

# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)