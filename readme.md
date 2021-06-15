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
<img align='right' src="https://github.com/RickGroot/Glory-Days/blob/main/public/img/logo.png?raw=true" width="230" style="background: white">  

Wij, Rick en Max gaan voor Good Good Not Bad werken aan een Ipad variant van de huidige Iphone App van Glory Days. De huidige Iphone variant is gemaakt voor familie die in samenwerking met de alzheimer patiënt zijn favoriete muziek gaat uitzoeken. Wij gaan dus aan de gang aan de Ipad variant die niet bedoeld is voor de familie maar voor de echte verzorgers van Alzheimer patiënten. Hiervoor moeten kijken naar de behoefte van verzorgers voor de applicatie. Zo is het ook voor ons de uitdaging om een al bestaande iphone variant te upscalen tot ipad variant waarbij wij de huidige stijl in acht nemen. Verders moeten wij nog kijken naar extra opties van de ipad en extra functies voor de verzorgers.

## Het geleverde werk
Wij hebben samen een prototype gemaakt volledig in de stijl van GloryDays door gebruik te maken van NodeJS. Het prototype is gekoppeld aan FireBase waarbij wij alle data fetchen uit een database. De pagina's zijn opgesteld door het gebruik van handlebars. Het gemaakte werk is het beste te zien op ipad formaat, welke maakt niet uit. Wij hebben ons hierop gefocussed en hebben het responsive gemaakt voor zowel landscape als portrait.

## De Code
```
glory-days                              
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
│  │  ├─ settings.css                   
│  │  ├─ sort.css                       
│  │  ├─ styleguide.css                 
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
│  │  │  ├─ android-chrome-512x512.png  
│  │  │  ├─ apple-touch-icon.png        
│  │  │  ├─ favicon-16x16.png           
│  │  │  ├─ favicon-32x32.png           
│  │  │  ├─ favicon.ico                 
│  │  │  ├─ mstile-150x150.png          
│  │  │  └─ safari-pinned-tab.svg       
│  │  ├─ bg.png                         
│  │  ├─ ipadmockupwhite.png            
│  │  ├─ ipadmockupwhite2.png           
│  │  ├─ logo.png                       
│  │  ├─ profile.jpg                    
│  │  └─ tieneke.png                    
│  ├─ js                                
│  │  ├─ graphs.js                      
│  │  ├─ index.js                       
│  │  ├─ sw.js                          
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
│  ├─ location.hbs                      
│  ├─ memories.hbs                      
│  ├─ not-found.hbs                     
│  ├─ noteList.hbs                      
│  ├─ offline.hbs                       
│  ├─ settings.hbs                      
│  ├─ styleguide.hbs                    
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

## Installeer dit project
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
De code staat nu in uw eigen map. Navigeer naar de map, en installeer vervolgens alle modules. 
```bash
cd Glory-Days

npm install
```
Nu hoeft er alleen maar een database worden gekoppeld. Ga naar firebase en maak daar een eigen realtime database aan. In deze database kan een JSON-file worden geïmporteerd, hier is een [voorbeeld van de JSON data](https://github.com/RickGroot/Glory-Days/blob/main/database-example.json). Deze kunt u uploaden naar de realtime database.  
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

## Documenten
* [Design rationale](https://github.com/RickGroot/Glory-Days/wiki/Design-rationale)
* [Product biografie Rick](https://www.notion.so/Glory-Days-86b3ba607103479eabdfc47ca8f6b941)
* [Product biografie Max](https://www.notion.so/Product-Biografie-45212559494e4774a5db3760c7240c0b)

# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)