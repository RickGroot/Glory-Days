const users = {
    1: {firstName: "Tieneke", lastName: "van Aartsen", pic: "../img/tieneke.png"},
    2: {firstName: "Arnold", lastName: "Medaille", pic: "https://images.unsplash.com/photo-1514425623522-e08e404b4a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"},
    3: {firstName: "Laura", lastName: "van Weerwolf", pic: "https://images.unsplash.com/photo-1537735319956-df7db4b6a4e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80"},
    4: {firstName: "Martha", lastName: "Augustijn", pic: "https://images.unsplash.com/photo-1494438043283-22a3c46831a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
    5: {firstName: "Katja", lastName: "Garagemans", pic: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"},
    6: {firstName: "Jesse", lastName: "Klaver", pic: "https://images.unsplash.com/photo-1534954553104-88cb75be7648?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    7: {firstName: "Lisa", lastName: "Joosten", pic: "https://images.unsplash.com/photo-1536122522160-72ca6bd783ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    8: {firstName: "Abraham", lastName: "Papier", pic: "https://images.unsplash.com/photo-1520799139422-a4a178de50ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"},
    9: {firstName: "Elise", lastName: "Tulp", pic: "https://images.unsplash.com/photo-1508216404415-a35220fab80e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
    10: {firstName: "Joost", lastName: "Faber", pic: "https://images.unsplash.com/photo-1503443062224-9f77d743cf25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=409&q=80"},
    11: {firstName: "Julia", lastName: "Koog", pic: "https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"},
    12: {firstName: "Barry", lastName: "van de Kroeg", pic: "https://images.unsplash.com/photo-1515515957482-9bfec374dbc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"},
    13: {firstName: "Joop", lastName: "Vuilnishoop", pic: "https://images.unsplash.com/photo-1507809796103-09a999870b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80"},
    14: {firstName: "Arie", lastName: "Knager", pic: "https://images.unsplash.com/photo-1532561566109-6d16632e2961?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=607&q=80"},
    15: {firstName: "Roos", lastName: "Vis", pic: "https://images.unsplash.com/photo-1526795443948-005b48ce4791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
}

const notes = {
    1: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "pro", text: "Lorem ipsum"},
    2: {title: "De kaasboedrerei ban Tieneke", author: "Jopie Staalfabriek", date: "30-05", userType: "pro", text: "Kaas is een zuivelproduct met een vaste structuur. Door het toevoegen van stremsel en zuursel worden de vaste stoffen in de melk (eiwitten, vetten en mineralen) gescheiden van het vocht (de wei). Voorts wordt zout en eventueel schimmels toegevoegd tijdens de bereiding van kaas. Het Nederlandse woord voor kaas stamt van het Latijnse caseus, dat dezelfde betekenis heeft. Kaas bevat, naast de hoofdbestanddelen dierlijk vet en eiwit, calcium en vitamines A, B en D. Studies hebben uitgewezen dat kaas waarschijnlijk gezond is voor de tanden.[1] Kaas wordt een 'levend' voedsel genoemd omdat er miljoenen bacteriën in leven en vaak ook schimmels. In bepaalde kazen zoals de Mimolette en Stilton bevindt zich de kaasmijt die gaten en spleten in de kaas vreet. Een andere soort kaasmijt wordt gebruikt bij de productie van de kwarkkaas Milbenkäse of 'mijtkaas'. De kaasvlieg komt voor in Casu marzu. Kaas wordt gemaakt van de melk van bijna alle gedomesticeerde herbivoren, dat is in verreweg de meeste gevallen van koe-, geiten- en schapenmelk. Verder wordt kaas ook gemaakt van buffel-, paarden-, kamelenmelk, rendierenmelk en jakmelk."},
    3: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "fam", text: "Olifanten zijn grote zoogdieren uit de familie van de Elephantidae binnen de orde van de slurfdieren (Proboscidea). Traditioneel worden er twee soorten erkend, de Afrikaanse olifant (Loxodonta africana) en de Aziatische olifant (Elephas maximus). Uit DNA-studies is vastgesteld dat de Afrikaanse olifanten bestaan uit twee aparte soorten, respectievelijk de savanneolifant (Loxodonta africana) en de bosolifant (Loxodonta cyclotis).Olifanten komen verspreid voor in Afrika ten zuiden van de Sahara en in het zuiden en zuidoosten van Azië. Zij zijn de enige nog levende soorten van de slurfdieren, uitgestorven zijn onder andere de mammoeten en mastodonten. Olifanten zijn de grootste levende landdieren. De mannelijke Afrikaanse olifanten kunnen een hoogte van 4 m en een massa van 7000 kg bereiken. Deze dieren hebben verschillende onderscheidende kenmerken, zoals een slurf die wordt gebruikt voor vele doeleinden, met name voor het grijpen van voorwerpen. Hun snijtanden groeien uit tot slagtanden en dienen als hulpmiddelen voor het verplaatsen van objecten, het graven en als wapen tijdens gevechten. De grote oorflappen van de olifant worden gebruikt om de temperatuur van het lichaam te beheersen. Afrikaanse olifanten hebben grotere oren en een holle rug, terwijl Aziatische olifanten kleinere oren hebben een bolle of rechte rug.Stropers schieten de olifanten voor het ivoor van hun slagtanden.[2] Ivoorhandel is een van de belangrijkste bedreigingen voor wilde olifantpopulaties. Vanwege hun onmiskenbare uiterlijk en intelligente gedrag spelen olifanten een rol in kunst, religie, mythologie en populaire cultuur."},
    4: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "pro", text: "Lorem ipsum"},
    5: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "pro", text: "Lorem ipsum"},
    6: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "fam", text: "Lorem ipsum"},
    7: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "fam", text: "Lorem ipsum"},
    8: {title: "Tieneke vindt het lastig", author: "Jopie Staalfabriek", date: "30-05", userType: "pro", text: "Lorem ipsum"},
}

const nursing = {
    1: {nursinghome: "zonnepark"},
    2: {nursinghome: "bloemenveld"}
}

let userData = {
    1: {
        firstName: "Tieneke",
        lastName: "van Aartsen",
        pic: "../img/tieneke.png",
        age: 75,
        nationality: "Nederlands",
        about: "Tieneke is een gezellige moeder, oma en partner. Ze is altijd in voor een feestje. Haar favoriete bezigheden zijn bingo en dansen.",
        memories: {
            positive: [{
                feeling: "gelukkig",
                title: "onze trouwdag",
                image: "",
            }, {
                feeling: "blij",
                title: "vakantie",
                image: "",
            }, {
                feeling: "ontspannen",
                title: "dagje spa",
                image: "",
            }, {
                feeling: "gelukkig",
                title: "wereldreis",
                image: "",
            }],
            ok: [{
                feeling: "gelukkig",
                title: "onze trouwdag",
                image: "",
            }, {
                feeling: "blij",
                title: "vakantie",
                image: "",
            }, {
                feeling: "ontspannen",
                title: "dagje spa",
                image: "",
            }, {
                feeling: "gelukkig",
                title: "wereldreis",
                image: "",
            }],
            negative: [{
                feeling: "boos",
                title: "de 80's",
                image: "",
            }, {
                feeling: "verdrietig",
                title: "mijn man",
                image: "",
            }, {
                feeling: "moe",
                title: "dagje spa",
                image: "",
            }, {
                feeling: "verveeld",
                title: "vakantie australië",
                image: "",
            }],
        },
        songs: "T.B.A"
    }
}

module.exports = {
    users,
    notes,
    nursing,
    userData
}