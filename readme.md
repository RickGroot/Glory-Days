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
* [Job stories](#job-stories)
* [File structure](#file-structure)

## Persona
![Sarah](https://github.com/RickGroot/Glory-Days/blob/main/assets/persona.jpg?raw=true)

## User scenario
Sarah komt aan bij haar tehuis genaamd zonnepark. Ze moet hier voor de rest van de week werken, ze werkt hier om de week en de andere week bij tehuis zonnestraal. Ze begint de week hier door te kijken in de GloryDays app zodat ze ziet hoe de statistieken hiervan ervoor staan.  Ze selecteert eerst haar tehuis waar ze nu is. Nu ziet ze direct alle belangrijke informatie betreft de patienten en Glory Days. 85% van de gebruikers heeft een positieve ervaring gehad, dat is een stijging van 4% ten opzichte van vorige week. Dit is goed nieuws, Sarah is nu alleen benieuwd naar de slechte ervaringen om die te verhelpen. Hierom gaat Sarah kijken in de lijst van de positieve ervaringen en sorteert ze de lijst van laag naar hoog. Ze ziet dat Arie een slechte ervaring had met 55%. Hierom gaat ze naar het profiel van Arie kijken, hier ziet ze dat zijn gebruikuren vaak om 20:00 zijn. Hierom besluit Sarah om rond 20:00 langs bij Arie te gaan en te kijken of zij hem een betere ervaring kan bieden met Glory Days.

## Job Stories
- **Wanneer ik** het Glory Days dashboard open **wil ik** direct de positiviteit van alle patienten zien **zodat ik** kan stellen wie er een goede en slechte ervaring met de app heeft.
- **Wanneer ik** het Glory Days dashboard open **wil ik** een lijst met alle patienten beschikbaar hebben **zodat ik** specifiek kan zoeken naar een patient
- **Wanneer ik** het Glory Days dashboard open **wil ik** specifieke informatie kunnen vinden van specifieke patienten **zodat ik** direct kan zien hoe een patient ervoor staat m.b.t de app.
- **Wanneer ik** het Glory Days dashboard open **wil ik** een specifiek tehuis selecteren waar ik op het moment werk **zodat ik** alle patienten van een specifiek tehuis kan inzien
- **Wanneer ik** een grafiek bekijk van de positiviteit m.b.t de app in percentages **wil ik** een optie hebben om te sorteren **zodat ik** de grafiek kan afstellen naar mijn eigen keuzes en bijv alfabetisch alles kan inzien.
- **Wanneer ik** het Glory Days dashboard open **wil ik** een inzicht krijgen m.b.t de stijging of daling in positiviteit **zodat ik** direct kan zien of de afgelopen week goed beviel of niet.

## File structure
> *app.js*  

Start of the application, located at the root of this project.

> *package.json*  

Holds all scripts and packages that are used for this project.

> */views*  

Contains all handlebars views, elements and partials. Some elements and partials are divided into subfolders.

> */server*  

This folder is used for all server side code. It contains the render.js file, and helper files for the server.

> */public*  

Contains all client-side files. This folder is divided to multiple subfolders, css, js and img. These folders contain all the files that are used client-side and that coud be stored in cache.

> */assets*  

Has all the files that make this repo shine.


# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)