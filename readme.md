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

## Het geleverde werk
Wij hebben samen een prototype gemaakt volledig in de stijl van GloryDays door gebruik te maken van NodeJS. Het prototype is gekoppeld aan FireBase waarbij wij alle data fetchen uit een database. De pagina's zijn opgesteld door het gebruik van handlebars. Het gemaakte werk is het beste te zien op ipad formaat, welke maakt niet uit. Wij hebben ons hierop gefocussed en hebben het responsive gemaakt voor zowel landscape als portrait.


## De Code
```
glory-days                              
├─ assets                               
│  ├─ logo.jpg                          
│  └─ persona.jpg                       
├─ public                               
│  ├─ css                               
│  │  ├─ chart.css                      
│  │  ├─ dashboard.css                  
│  │  ├─ global.css                     
│  │  ├─ location.css                   
│  │  ├─ main.css                       
│  │  ├─ memories.css                   
│  │  ├─ nav.css                        
│  │  ├─ newNoteElement.css             
│  │  ├─ noteElement.css                
│  │  ├─ noteList.css                   
│  │  ├─ sort.css                       
│  │  ├─ userelement.css                
│  │  ├─ userList.css                   
│  │  └─ userSessions.css               
│  ├─ img                               
│  │  ├─ emotions                       
│  │  │  ├─ blij.png                    
│  │  │  ├─ boos.png                    
│  │  │  ├─ extatisch.png               
│  │  │  ├─ geagiteerd.png              
│  │  │  ├─ gedeprimeerd.png            
│  │  │  ├─ gefrustreerd.png            
│  │  │  ├─ gelukkig.png                
│  │  │  ├─ kalm.png                    
│  │  │  ├─ moe.png                     
│  │  │  ├─ ontspannen.png              
│  │  │  ├─ tevreden.png                
│  │  │  └─ verveeld.png                
│  │  ├─ fav                            
│  │  │  ├─ android-chrome-192x192.png  
│  │  │  ├─ apple-touch-icon.png        
│  │  │  ├─ favicon-16x16.png           
│  │  │  ├─ favicon-32x32.png           
│  │  │  ├─ favicon.ico                 
│  │  │  ├─ mstile-150x150.png          
│  │  │  ├─ safari-pinned-tab.svg       
│  │  │  └─ splash-screen-768x768.png   
│  │  ├─ bg.png                         
│  │  ├─ logo.png                       
│  │  ├─ profile.jpg                    
│  │  └─ tieneke.png                    
│  ├─ js                                
│  │  ├─ graphs.js                      
│  │  ├─ index-min.js                   
│  │  ├─ index.js                       
│  │  └─ userList.js                    
│  ├─ browserconfig.xml                 
│  ├─ manifest.json                     
│  └─ sw.js                             
├─ server                               
│  ├─ config.js                         
│  ├─ database.rules.json               
│  ├─ getData.js                        
│  └─ render.js                         
├─ views                                
│  ├─ elements                          
│  │  ├─ article.hbs                    
│  │  ├─ effect.hbs                     
│  │  ├─ percentage-big.hbs             
│  │  └─ percentage-small.hbs           
│  ├─ layouts                           
│  │  └─ main.hbs                       
│  ├─ partials                          
│  │  ├─ listBlocks                     
│  │  │  ├─ newNoteElement.hbs          
│  │  │  ├─ noteElement.hbs             
│  │  │  ├─ userElement.hbs             
│  │  │  └─ userSessionsElement.hbs     
│  │  ├─ lists                          
│  │  │  ├─ noteListElement.hbs         
│  │  │  ├─ noteSortElement.hbs         
│  │  │  ├─ patientList.hbs             
│  │  │  └─ patientSortElement.hbs      
│  │  ├─ charts.hbs                     
│  │  ├─ footer.hbs                     
│  │  ├─ head.hbs                       
│  │  └─ nav.hbs                        
│  ├─ chart.hbs                         
│  ├─ dashboard.hbs                     
│  ├─ home.hbs                          
│  ├─ location.hbs                      
│  ├─ memories.hbs                      
│  ├─ not-found.hbs                     
│  ├─ noteList.hbs                      
│  ├─ offline.hbs                       
│  └─ userList.hbs                      
├─ app.js                               
├─ database-example.json                
├─ firebase.json                        
├─ LICENSE                              
├─ package-lock.json                    
├─ package.json                         
└─ readme.md                            

```
> *app.js*  

Start van de applicatie, staat in de root van het project.

> *package.json*  

Bevat alle scripts en packeges die zijn gebruikt voor dit project.

> */views*  

Bevat alle handlebars views, elements en partials. Sommige elementen en partials zijn onderverdeeld in subfolders.

> */server*  

Hier bevindt zich alle server side code. Het bevat een render.js bestand en helper bestanden voor de server.

> */public*  

Bevat alle client-side bestanden. De folder is onderverdeeld in verschillende subfolders. CSS, JS en img. Deze folders bevatten alle bestanden die gebruikt worden op de client-side en die worden ook gestored in de cache.

> */assets*  

Heeft alle bestanden die nodig zijn in de repo.


## De meegegeven data
Hier is een voorbeeld van de data die in de database staat, en wordt opgehaald voor dit project.
```json
"nursinghome": {
            "users": [{
                "about": "about",
                "age": "99",
                "firstName": "name",
                "lastName": "name",
                "memories": {
                    "negative": [{
                        "feeling": "feeling",
                        "image": "img",
                        "title": "title"
                    }],
                    "ok": [{
                        "feeling": "feeling",
                        "image": "img",
                        "title": "title"
                    }],
                    "positive": [{
                        "feeling": "feeling",
                        "image": "img",
                        "title": "title"
                    }]
                },
                "nationality": "Nederlands",
                "notes": [{
                    "author": "author",
                    "date": "99-99",
                    "text": "text",
                    "title": "title",
                    "userType": "user"
                }],
                "pic": "profilepic",
                "sessions": [{
                    "date": "99-99",
                    "duration": "duration",
                    "endfeeling": "endfeeling",
                    "songs": [{
                        "artist": "artist",
                        "song": "song"
                    }],
                    "startfeeling": "startfeeling"
                }]
            },

```




## Installeer deze repo
Navigeer naar een map naar keuze, hierin kunt u de code pullen en het project zelf inzien.
```bash
cd pad/naar/map
```
Pull de code via git naar deze map
```bash
git init

git remote add origin https://github.com/RickGroot/Glory-Days.git

git pull origin main
```
De code staat nu in uw eigen map. Nu hoeft er alleen maar een database worden gekoppeld.  
Ga naar firebase en maak daar een eigen realtime database aan. In deze database kan een JSON-file worden geïmporteerd, hier is een [voorbeeld van de JSON data](https://github.com/RickGroot/Glory-Days/blob/main/database-example.json). Deze kunt u uploaden naar de realtime database.  
Vervolgens moet u de database koppelen aan de applicatie. Pas de [.env.example file](https://github.com/RickGroot/Glory-Days/blob/main/.env.example) aan naar .env, of maak een .env bestand aan in de root van het project, en voeg daar de volgende verlden aan toe: 
```env
API_KEY={hier uw key}
DATABASE_URL={hier de URL}
APP_ID={hier uw ID}
MESSAGING_SENDER_ID={hier uw ID}
```
Plaats de juiste keys en id's in dit bestand. De correcte informatie is te vinden in uw firebase. Ga naar uw firebase console, en ga naar de project settings. Scroll naar beneden naar het kopje **SDK setup and configuration** en klik op **Config**. Hier staan alle velden die nodig zijn voor het project.  

Start het project vervolgens op met een van de volgende scripts in de console:
```bash
npm run dev

npm start
```

# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)




# Design Rationale

# Debriefing

## Wat is Glory Days?
Glory Days is een applicatie van het bedrijf Good Good Not Bad. Glory Days zorgt ervoor dat alzheimer patiënten meer sociaal contact krijgen met hun familie, vrienden of verzorgers. Dit wordt gedaan doordat er in Glory Days een profiel maakt van een alzheimer patiënt. Hierbij wordt muziek toegevoegd aan het profiel door de familie of vrienden waaraan de patiënt positieve herinneringen heeft. Hierdoor zal de patiënt weer wat herinneringen terugkrijgen aan de periode van zijn en of haar muziek.

## Aanleiding naar project
50 miljoen mensen over de hele wereld hebben alzheimers. Er wordt verwacht dat dit bij 2050 150 miljoen is. Op dit moment is er vooral onderzoek naar het voorkomen en weghalen van de ziekte, maar nog niet echt naar de ervaring beter maken. met deze ziekte kan je nog steeds ouder worden, maar de manier waarop is niet leuk. Elke 20 jaar wordt het aantal patiënten met AD verdubbelt. Er is een hoge nood voor een applicatie die het leven van de patiënten beter kan maken. AD patiënten hebben steeds minder interactie met andere mensen. De opdracht is om het leven van de verzorger en patiënt beter te maken, door middel van muziek en herinneringen. Muziek is een ontzettend krachtig middel om herinneringen terug te krijgen, zelfs als de patiënt al in de laatste stadium is. Bekende en favoriete muziek is heel belangrijk. Dit is een applicatie die zowel helemaal aan het begin als helemaal aan het eind van de ziekte kan worden gebruikt.

## De opdracht
Wij, Rick en Max gaan voor Good Good Not Bad werken aan een Ipad variant van de huidige Iphone App van Glory Days. De huidige Iphone variant is gemaakt voor familie die in samenwerking met de alzheimer patiënt zijn favoriete muziek gaat uitzoeken. Wij gaan dus aan de gang aan de Ipad variant die niet bedoeld is voor de familie maar voor de echte verzorgers van Alzheimer patiënten. Hiervoor moeten kijken naar de behoefte van verzorgers voor de applicatie. Zo is het ook voor ons de uitdaging om een al bestaande iphone variant te upscalen tot ipad variant waarbij wij de huidige stijl in acht nemen. Verders moeten wij nog kijken naar extra opties van de ipad en extra functies voor de verzorgers.

## Wie zijn de eindgebruikers?
De uiteindelijke gebruiker van dit product zijn de mensen met alzheimer, en dit gaat via een verzorger. De applicatie wordt door een verzorger gebruikt waarmee de patiënt herinneringen kan terug beleven. Deze zogenaamde PRO-user is de gebruiker, dit zijn de verzorgers van verzorgingstehuizen en hebben meerdere patiënten waarvoor ze de applicatie kunnen gebruiken.

## Doel van de applicatie
De PRO-user heeft een dashboard waarbij PRO-user alle patiënten ziet van een tehuis, ook kan de PRO-user hier gegevens inzien van het tehuis zelf (tabellen etc). Hierdoor kan hij/zij alle gegevens in een oogopslag zien van een tehuis. Ook kan hij/zij een patiënt specifiek kiezen uit een patientenlijst om vervolgens bij die patiënt zijn favoriete muziek te zien incl. herinneringen en teksten etc. Deze herinneringen zijn allemaal toegevoegd door familieleden en kennissen. De gebruiker hoeft alleen muziek in te zien om hem eventueel rustig te maken of herinneringen te lezen om vervolgens een gesprek aan te gaan met een betreffende patiënt. De gebruiker kan zelf eventueel ook nummers of herinneringen toevoegen over onderwerpen waar ze achter komt tijdens een gesprek, alleen dit is niet de hoofdzaak. De hoofdzaak voor de PRO-user is om inzichten te krijgen van een bepaald tehuis en hoe glory days in het tehuis werkt, verders is het zaak voor de PRO-user om alle patienten gegevens specifiek te kunnen inzien.

## Oplevering
Een web application waar een PRO-user gebruik van kan maken, de applicatie moet werken op tablet. Vormgeving moet aansluiten bij eerder gemaakte prototypes/producten, iconen en kleuren kunnen hiervan worden hergebruikt. Product moet online staan en te gebruiken zijn voor iedereen.

***

# Probleemdefinitie
GoodGoodNotBad heeft nu een volledig iPhone design van hun GloryDays app die gericht is op familieleden van een alzheimers patient. Wij moeten de betreffende app stijl vastleggen en dit gebruiken in een iPad variant van de GloryDays app die bedoelt is voor PRO-users. De iPad variant moet werken op zowel de iPad-mini als de iPad pro 13 inch. Evenals landscape en portrait mode.

***

# De oplossing
Voor de app hebben wij ervoor gekozen om de index pagina echt een dashboard te maken. Hierbij zie je als eerst de belangrijkste data van een tehuis in een oogopslag. Dit zie je zowel in een grafiek als in een blok element. Boven bevindt zich een nav waarbij je kan doorlinken naar de patientlijst. Op de patienlijst zie je de patienten staan en sorteer opties. Druk je op een patient dan krijg je een element te zien met verschillende buttons, grafieken die specifiek slaan op de patient en wat positieve herinneringen van de patient. De buttons brengen je naar een notities pagina waarbij je notities kan inzien, een sessies pagina waarbij je de afgelopen sessies kan inzien en een herinneringen pagina waarbij je specifieke informatie kan vinden over een specifieke patient, de informatie die je hier ziet staan is volledig genomen uit de iPhone variant van de GloryDays app.


## Landscape mode
<img align='right' src="https://github.com/RickGroot/Glory-Days/blob/main/assets/logo.jpg?raw=true" width="300" style="background: white">
Voor landscape mode hebben wij de pagina vooral opgedeeld in 2 colommen. Zo zie je op het dasboard links de grafieken (scrollbaar) en rechts statische elementen. Op de patientenlijst is dit ook het geval. links is een scrollbare patienten lijst en rechts een statische sorteer sectie of patient informatie. Dit is precies hetzelfde zo gedaan bij de notities. Druk je op herinneringen dan hebben wij ons weer aan de 2 colommen gehouden. Dit scherm is volledig geupscaled van de iPhone variant. Hierom hebben wij links de patientinformatie en rechts positieve en negatieve herinneringen geplaatst van de patient die scrollbaar zijn.

## Portrait mode
<img align='right' src="https://github.com/RickGroot/Glory-Days/blob/main/assets/logo.jpg?raw=true" width="300" style="background: white">
Bij portrait hebben we alles nogsteeds opgedeeld in 2 blokken. Alleen de content in deze blokken is wat verschoven zodat alles evengoed toegankelijk is voor de gebruiker. Zo staan nu verschillende knoppen, zoals de sorteer knoppen, onder elkaar in plaats van naast elkaar. Op deze manier blijft alles overzichtelijk en bruikbaar, terwijl het nogsteeds dezelfde style en hoofd-layout heeft van de landscape versie. Het dashboard heeft wel een iets andere indeling gekregen, met boven horizontal scrolling met de grotere grafieken en daaronder de kleine grafieken in een grid-layout.

***

# De code
Wij hebben gewerkt in visual studio code en gewerkt met een zo'n duidelijk mogelijke mappen structuur. Verders hebben wij door gebruik de maken van handlebars zo min mogelijk code hergebruikt. We hebben vooral in elements gewerkt waarbij wij een specifieke element maken + CSS bestand en dit importeren in de nodige pagina's. Zie hieronder de code structuur.


## structuur

> *app.js*  

Start van de applicatie, staat in de root van het project.

> *package.json*  

Bevat alle scripts en packeges die zijn gebruikt voor dit project.

> */views*  

Bevat alle handlebars views, elements en partials. Sommige elementen en partials zijn onderverdeeld in subfolders.

> */server*  

Hier bevindt zich alle server side code. Het bevat een render.js bestand en helper bestanden voor de server. 

> */public*  

Bevat alle client-side bestanden. De folder is onderverdeeld in verschillende subfolders. CSS, JS en img. Deze folders bevatten alle bestanden die gebruikt worden op de client-side en die worden ook gestored in de cache.

> */assets*  

Heeft alle bestanden die nodig zijn in de repo.

