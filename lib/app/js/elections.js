var ELEC = {};

ELEC.main = function(){
    var PARTIES = {
        "464" : { "name-en": "Ennahdha", fill: "#183883",logo:"ennahdha.jpg"},
        "446" : { "name-en": "CPR",    fill: "#4CA42F",logo:"cpr.jpg"},
        "500" : { "name-en": "Aridha", fill: "#158600",logo:"petition.jpg"},
        "430" : { "name-en": "Ettakatol", fill: "#B22222",logo:"ettakatol.jpeg"},
        "137" : { "name-en": "PDP",    fill: "#FFD600",logo:"pdp.jpg"},
        "447" : { "name-en": "Initiative", fill: "#15ADFF",logo:"initiative.jpg"},
        "256" : { "name-en": "PDM",    fill: "#0557BA"},
        "401" : { "name-en" : "Afek",   fill: "red",logo:"afek.jpg"},
        "437" : { "name-en" : "PCOT",   fill: "#D70F0F",logo:"pcot.jpg"},
        "386" : { "name-en" : "MP",     "longname-fr": "Mouvement du Peuple" , fill: "#FBB03B",logo:"mp.jpg"},
        "455" : { "name-en" : "PLP",    "longname-fr": "Parti de la Lutte Progressiste", fill: "#B83589",logo:"plp.jpg"},
        "259" : { "name-en" : "Pole",  fill: "#191919",logo:"pole.jpg"},
        "382" : { "name-en": "MDS",    "longname-fr": "Mouvement des democrates socialistes", fill: "green",logo:"mds.jpg"},
        "355" : { "name-en": "AL",     "longname-fr": "Alwafa Lichouhadaa", fill: "#3c8cc7",logo:"al.jpg"},
        "444" : { "name-en": "PLM",    "longname-fr":"Parti Liberal Maghrebin",fill:"#295c24",logo:"plm.jpg"},
        "435" : { "name-en": "PEE",    "longname-fr":"Parti de l'equite et de l'egalite",fill:"#e5e5e5",logo:"pee.jpg"},
        "136" : { "name-en": "PND",    "longname-fr":"Neo Destour",fill:"#aa56ff",logo:"pnd.jpg"},
        "413" : { "name-en": "PDSN",   "longname-fr":"Parti de l'equite et de l'egalite",fill:"#ff56aa"},
        "410" : { "name-en": "PNCU",   "longname-fr":"Parti de la nation culturel et unioniste",fill:"#75e19c",logo:"pncu.jpg"},
        "394" : { "name-en": "MOUPAD", "longname-fr":"Mouvement des patriotes democrates", fill:"#ffaad4", logo:"moupad.jpg"},
        "387" : {"name-en": "MPUP",    "longname-fr":"Mouvement du peuple unioniste progressiste", fill:"#8e4835",logo:"mpup.jpg"},
        "566" : {"name-en":"FNT",      "longname-fr":"Front National Tunisien", fill:"#ac103b",logo:"fnt.jpg"},
        "330" : {"name-en":"UDC",      "longname-fr":"Union des Diplomes Chommeurs", fill:"#2b2f86",logo:"udc.jpg"},
        "64"  : {"name-en":"LE",       "longname-fr" :"Liste de l'espoir", fill:"#ffe4c2", logo:"le.jpg" },
        "506" : {"name-en":"VI",       "longname-fr":"Voix de l'independant", fill:"#efe9aa", logo:"vi.jpeg"},
        "96"  : {"name-en":"UPL", "longname-fr":"Union  Patriotique Libre", fill:"#d6111b", logo:"upl.jpeg"},
        "8"   : {"name-en":"LIJ", "longname-fr":"Liste Independante Justice", fill:"#d4ffaa", logo:"lij.jpeg"},
        "348" : {"name-en":"LIF", "longname-fr":"Liste Independante Fidelite", fill:"#e86111", logo:"fidelite.jpeg"},
        "286" : {"name-en":"LII", "longname-fr":"Liste Independante l'independant", fill:"#fbb03b"}
    };

    var CIRCONSCRIPTIONS = {
        "111":{"name":"Tunis 1","shp":"tunis1","delegations":{"52":{"name":"Medina"},"53":{"name":"Bab Bhar"},"54":{"name":"Bab Souika"},"61":{"name":"Sijoumi"},"62":{"name":"Ezzouhour"},"63":{"name":"Hrairia"},"64":{"name":"Sidi Hassine"},"65":{"name":"El Ouardia"},"66":{"name":"Kabaria"},"67":{"name":"Sidi El Bechir"},"68":{"name":"Jebel Jelloud"}}},
        "112":{"name":"Tunis 2","shp":"tunis2","delegations":{"51":{"name":"Carthage"},"55":{"name":"Omrane"},"56":{"name":"Omrane Superieur"},"57":{"name":"El Tahrir"},"58":{"name":"El Menzah"},"59":{"name":"Cite El Khadra"},"60":{"name":"Bardo"},"69":{"name":"La Goulette"},"70":{"name":"Kram"},"71":{"name":"La Marsa"}}},
        "120":{"name":"Ariana","shp":"ariana","delegations":{"51":{"name":"Ariana Medina"},"52":{"name":"Soukra"},"53":{"name":"Raoued"},"54":{"name":"Kalaat El Andalous"},"55":{"name":"Sidi Thabet"},"56":{"name":"Ettadhamen"},"57":{"name":"Mnihla"}}},
        "130":{"name":"Ben Arous","shp":"benarous","delegations":{"51":{"name":"Ben Arous"},"52":{"name":"Nouvelle Médina"},"53":{"name":"El Mourouj"},"54":{"name":"Hammam Lif"},"55":{"name":"Hammam Chott"},"56":{"name":"Boumhel"},"57":{"name":"Ezzahra"},"58":{"name":"Radès"},"59":{"name":"Mégrine"},"60":{"name":"M'Hamdia"},"61":{"name":"Fouchana"},"62":{"name":"Mornag"}}},
        "140":{"name":"Manubah","shp":"manubah","delegations":{"51":{"name":"Manouba"},"52":{"name":"Douar Hicher"},"53":{"name":"Oued Ellil"},"54":{"name":"Mornaguia"},"55":{"name":"Borj El Amri"},"56":{"name":"Jedaida"},"57":{"name":"Tebourba"},"58":{"name":"El Battan"}}},
        "151":{"name":"Nabel 1","shp":"nabeul1","delegations":{"51":{"name":"Nabeul"},"52":{"name":"Dar Chaabane El Fehri"},"53":{"name":"Beni Khiar"},"54":{"name":"Korba"},"55":{"name":"Menzel Temime"},"56":{"name":"El Mida"},"57":{"name":"Kelibia"},"58":{"name":"Hammam Ghezaz"},"59":{"name":"Haouaria"}}},
        "152":{"name":"Nabel 2","shp":"nabeul2","delegations":{"60":{"name":"Takelsa"},"61":{"name":"Soliman"},"62":{"name":"Menzel Bouzelfa"},"63":{"name":"Beni Khalled"},"64":{"name":"Grombalia"},"65":{"name":"Bou Argoub"},"66":{"name":"Hammamet"}}},
        "160":{"name":"Zaghouan","shp":"zaghouane","delegations":{"51":{"name":"Zaghouan"},"52":{"name":"Zriba"},"53":{"name":"Bir Mchergua"},"54":{"name":"Fahs"},"55":{"name":"Nadhour"},"56":{"name":"Saouaf"}}},
        "170":{"name":"Bizerte","shp":"bizerte","delegations":{"51":{"name":"Bizerte Nord"},"53":{"name":"Bizerte Sud"},"54":{"name":"Sejnane"},"55":{"name":"Joumine"},"56":{"name":"Mateur"},"57":{"name":"Ghazala"},"58":{"name":"Menzel Bourguiba"},"59":{"name":"Tinja"},"60":{"name":"Utique"},"61":{"name":"Ghar El Melh"},"62":{"name":"Menzel Jemil"},"63":{"name":"El Alia"},"64":{"name":"Ras Jebel"}}},
        "210":{"name":"Beja","shp":"beja","delegations":{"51":{"name":"Beja Nord"},"52":{"name":"Beja Sud"},"53":{"name":"Amdoun"},"54":{"name":"Nefza"},"55":{"name":"Teboursouk"},"56":{"name":"Thibar"},"57":{"name":"Testour"},"58":{"name":"Goubellat"},"59":{"name":"Mejez El Bab"}}},
        "220":{"name":"Jendouba","shp":"jendouba","delegations":{"51":{"name":"Jendouba Sud"},"52":{"name":"Jendouba Nord"},"53":{"name":"Bousalem"},"54":{"name":"Tabarka"},"55":{"name":"Ain Draham"},"56":{"name":"Fernana"},"57":{"name":"Ghardimaou"},"58":{"name":"Oued Mliz"},"59":{"name":"Balta Bou Aouane"}}},
        "230":{"name":"Le Kef","shp":"lekef","delegations":{"51":{"name":"Kef Ouest"},"52":{"name":"Kef Est"},"53":{"name":"Nebeur"},"54":{"name":"Sakiet Sidi Youssef"},"55":{"name":"Tajerouine"},"56":{"name":"Kalaat Senan"},"57":{"name":"Kalaa Khesba"},"58":{"name":"Jerissa"},"59":{"name":"Ksour"},"60":{"name":"Dahmani"},"61":{"name":"Es Sers"}}},
        "240":{"name":"Siliana","shp":"siliana","delegations":{"51":{"name":"Siliana Nord"},"52":{"name":"Siliana Sud"},"53":{"name":"Bouarada"},"54":{"name":"Gaafour"},"55":{"name":"El Krib"},"56":{"name":"Bourouis"},"57":{"name":"Makthar"},"58":{"name":"Rouhia"},"59":{"name":"Kesra"},"60":{"name":"Bargou"},"61":{"name":"Laroussa"}}},
        "310":{"name":"Sousse","shp":"sousse","delegations":{"51":{"name":"Sousse Medina"},"52":{"name":"Sousse Riadh"},"53":{"name":"Sousse Jaouhara"},"54":{"name":"Sousse Sidi Abdelhamid"},"55":{"name":"Hammam Sousse"},"56":{"name":"Akouda"},"57":{"name":"Kalaa Kebira"},"58":{"name":"Sidi Bou Ali"},"59":{"name":"Hergla"},"60":{"name":"Enfidha"},"61":{"name":"Bouficha"},"62":{"name":"Kondar"},"63":{"name":"Sidi El Heni"},"64":{"name":"M'Saken"},"65":{"name":"Kalaa Sghira"},"66":{"name":"Zaouia Ksiba Thraya"}}},
        "320":{"name":"Monastir","shp":"monastir","delegations":{"51":{"name":"Monastir"},"52":{"name":"Ouerdanine"},"53":{"name":"Sahline"},"54":{"name":"Zeramdine"},"55":{"name":"Beni Hassen"},"56":{"name":"Jammel"},"57":{"name":"Bembla"},"58":{"name":"Moknine"},"59":{"name":"Bekalta"},"60":{"name":"Teboulba"},"61":{"name":"Ksar Hellal"},"62":{"name":"Ksibet El Mediouni"},"63":{"name":"Sayada-Lamta-Bou Hjar"}}},
        "330":{"name":"Mahdia","shp":"mahdia","delegations":{"51":{"name":"Mahdia"},"52":{"name":"Boumerdes"},"53":{"name":"Ouled Chamekh"},"54":{"name":"Chorbane"},"55":{"name":"Hbira"},"56":{"name":"Souassi"},"57":{"name":"El Jem"},"58":{"name":"Chebba"},"59":{"name":"Melloulech"},"60":{"name":"Sidi Alouane"},"61":{"name":"Ksour Essef"}}},
        "341":{"name":"Sfax 1","shp":"sfax1","delegations":{"53":{"name":"Sakiet Ezzit"},"54":{"name":"Sakiet Eddaier"},"58":{"name":"Jebeniana"},"59":{"name":"El Amra"},"60":{"name":"Hencha"},"61":{"name":"Menzel Chaker"},"63":{"name":"Bir Ali Ben Khelifa"},"66":{"name":"Kerkennah"}}},
        "342":{"name":"Sfax 2","shp":"sfax2","delegations":{"51":{"name":"Sfax Medina"},"52":{"name":"Sfax Ouest"},"55":{"name":"Sfax Sud"},"57":{"name":"Agareb"},"62":{"name":"El Ghraiba"},"64":{"name":"Skhira"},"65":{"name":"Mahres"}}},
        "410":{"name":"Kairouan","shp":"kairouan","delegations":{"51":{"name":"Kairouan Nord"},"52":{"name":"Kairouan Sud"},"53":{"name":"Chebika"},"54":{"name":"Sbikha"},"55":{"name":"Oueslatia"},"56":{"name":"Haffouz"},"57":{"name":"Alaa"},"58":{"name":"Hajeb El Ayoun"},"59":{"name":"Nasrallah"},"60":{"name":"Chrarda"},"61":{"name":"Bouhajla"}}},
        "420":{"name":"Kasserine","shp":"kasserine","delegations":{"51":{"name":"Kasserine Nord"},"52":{"name":"Kasserine Sud"},"53":{"name":"Ezzouhour"},"54":{"name":"Hassi El Ferid"},"55":{"name":"Sbeitla"},"56":{"name":"Sbiba"},"57":{"name":"Jedeliane"},"58":{"name":"Ayoun"},"59":{"name":"Thala"},"60":{"name":"Hidra"},"61":{"name":"Foussana"},"62":{"name":"Feriana"},"63":{"name":"Majel Belabbes"}}},
        "430":{"name":"Sidi Bou Zid","shp":"sidibouzid","delegations":{"51":{"name":"Sidi Bouzid Ouest"},"52":{"name":"Sidi Bouzid Est"},"53":{"name":"Jelma"},"54":{"name":"Sabalat Ouled Asker"},"55":{"name":"Bir El Hfay"},"56":{"name":"Sidi Ali Ben Aoun"},"57":{"name":"Menzel Bouzaiene"},"58":{"name":"Meknassi"},"59":{"name":"Souk Jedid"},"60":{"name":"Mazzouna"},"61":{"name":"Regueb"},"62":{"name":"Ouled Haffouz"}}},
        "510":{"name":"Gabes","shp":"gabes","delegations":{"51":{"name":"Gabes Medina"},"52":{"name":"Gabes Ouest"},"53":{"name":"Gabes Sud"},"54":{"name":"Ghannouch"},"55":{"name":"Metouia"},"56":{"name":"Menzel Habib"},"57":{"name":"Hamma"},"58":{"name":"Matmata"},"59":{"name":"Matmata Nouvelle"},"60":{"name":"Mareth"}}},
        "520":{"name":"Medenine","shp":"medenine","delegations":{"51":{"name":"Medenine Nord"},"52":{"name":"Medenine Sud"},"53":{"name":"Beni Khedache"},"54":{"name":"Ben Guerdane"},"55":{"name":"Zarzis"},"56":{"name":"Houmt Souk"},"57":{"name":"Djerba Midoun"},"58":{"name":"Djerba Ajim"},"59":{"name":"Sidi Makhlouf"}}},
        "530":{"name":"Tataouine","shp":"tataouine","delegations":{"51":{"name":"Tataouine Nord"},"52":{"name":"Tataouine Sud"},"53":{"name":"Samar"},"54":{"name":"Bir Lahmar"},"55":{"name":"Ghomrassen"},"56":{"name":"Dhiba"},"57":{"name":"Remada"}}},
        "610":{"name":"Gafsa","shp":"gafsa","delegations":{"51":{"name":"Gafsa Nord"},"52":{"name":"Sidi Aich"},"53":{"name":"Ksar"},"54":{"name":"Gafsa Sud"},"55":{"name":"Oum Larais"},"56":{"name":"Redeyef"},"57":{"name":"Metlaoui"},"58":{"name":"Mdhilla"},"59":{"name":"Guetar"},"60":{"name":"Belkhir"},"61":{"name":"Sened"}}},
        "620":{"name":"Tozeur","shp":"tozeur","delegations":{"51":{"name":"Tozeur"},"52":{"name":"Degueche"},"53":{"name":"Tamaghza"},"54":{"name":"Nefta"},"55":{"name":"Hazoua"}}},
        "630":{"name":"Kebili","shp":"kebili","delegations":{"51":{"name":"Kebili Sud"},"52":{"name":"Kebili Nord"},"53":{"name":"Souk El Ahed"},"54":{"name":"Douz Nord"},"55":{"name":"Douz Sud"},"56":{"name":"Faouar"}}}
    };

    GLOBAL_STATS = {
        registered : 8717807,
        voted : 4233851,
        valid : 4045965,
        blank : 99868,
        invalid : 152598,
    };

    ELEC.data = null;

    ELEC.data2 = {
        resultsPerParty : null,
        representativesPerCirconscription : null,
        resultsPerCirconscriptionPerParty : {},
        agg : [],
    };
    ELEC.state = {
        currentParty : null,
        currentCirconscription : null
    };

    var tooltip = d3.select("#tooltip");

    var navigationButton = d3.select("#navigationButton")
        .text("back")
        .on('click',function(){
            if (ELEC.state.currentParty) { 
                selectParty();
            } else if(ELEC.state.currentCirconscription) {
                selectCirconscription();
            }
        });


    var width = $("#map-circonscriptions").width(); 
    var height = width * 2.3;
    var formatNumber = d3.format(",d");

    var svg = d3.select("#map-circonscriptions")
        .append("svg:svg")
        .attr("class", "RdPu")
        .attr("height", height)
        .attr("width", width);

    var svgG = svg.append("svg:g");

    svgG.attr("class","circonscriptionName")
        .attr("transform","translate(0,25)")
        .append("svg:text")
        .attr("class","circonscription")
        .text("");

    //async load of representatives per circonscription per party
    d3.json('data/flat/representativesPerCirconscription.json',function(json){ELEC.data2.representativesPerCirconscription = json;});
    d3.json('data/flat/resultsPerParty.json',function(json){ELEC.data2.resultsPerParty = json;});

    load(svgG, width, height);

    function load(svg, width, height) {
        d3.json("data/geojson/circonscriptions.json", function(json) {
            ELEC.data = json;
            getCirconscriptionData(json, function(geojson){
                var path = getProjectionPath(geojson, width, height);
                updateMap(svg, geojson, path);
                d3.json("data/results/elus.json", function(elusJson) {
                    ELEC.data.elus = elusJson.elected;
                    
                    ELEC.data.elus.forEach(function(_){_.percent = _.vote/4045965 * 100; delete _.pourcentage})

                    ELEC.data.repByParty = d3.nest().key(function(d) {return d.id}).key(function(d) {return d.id}).map(ELEC.data.elus);

                    updateInfoBox();
                });
            });
            function xjson(circonscriptionId, callback) {
                d3.json("data/results/elus/"+circonscriptionId+ ".json", function(eJson) {
                    d3.json("data/results/agg/"+circonscriptionId+ ".json", function(aJson) {
                        eJson && aJson ? callback(null, { elus : eJson, agg : aJson, code : eJson.circonscription.code}) : callback("error", null);
                    })
                });
            }
            function getCirconscriptionData(geojson,callback){
                var q = queue(1);
                geojson.features
                    .forEach(function(feat){
                        var code = feat.properties.code_circo;
                        q.defer(xjson,code);
                    });
                q.await(function(error, results) { 
                    var circos = results.map(function(_){return _.code});

                    geojson.features
                        .forEach(function(feat){
                            var code = feat.properties.code_circo;
                            var i = circos.indexOf(code);
                            if (i > -1){
                                feat.id = id(feat);
                                feat.properties.elus = results[i].elus;
                                feat.properties.agg = results[i].agg;
                                ELEC.data2.agg.push(results[i].agg);
                            }
                        });
                    callback(geojson);
                });
            }
        }); 
    }

    var formatNumber = d3.format(",d");
    var formatPercent = function (base){
        return function(v){
            return Math.floor(10000 * (v / base)) / 100 + '%';
        }
    }

    function updateVoteBar(){
        var circonscription = ELEC.state.currentCirconscription;
        var party = ELEC.state.currentParty;
        var bar = d3.select('#vote-bar')
            .style('display',(party == null) ? 'block' : null);
        if (party == null) {
            if (circonscription != null){
                var agg = getCirconscriptionAgg(circonscription),
                    registered = agg.electeurs.enregistre,
                    voted = agg.electeurs.votant,
                    formatter = formatPercent(voted),
                    valid =  agg.bulletins.correct, 
                    blank = agg.bulletins.blancs, 
                    invalid = agg.bulletins.annule;


            } else {
                var registered = GLOBAL_STATS.registered,
                    voted  = GLOBAL_STATS.voted,
                    formatter = formatPercent(voted),
                    valid = GLOBAL_STATS.valid,
                    blank = GLOBAL_STATS.blank,
                    invalid = GLOBAL_STATS.invalid;
            }

                bar.select('#registered')
                    .text(formatNumber(registered));
                bar.select('#voted')
                    .text(formatNumber(voted));
                bar.select('#abstention')
                    .text(formatPercent(registered)(registered - voted));

                bar.select('#valid')
                    .text(formatter(valid));
                bar.select('#blank')
                    .text(formatter(blank));
                bar.select('#invalid')
                    .text(formatter(invalid));
        }
        
    }

    function updatePartyBar(){
        var table = d3.select('#party-bar');
        if (ELEC.state.currentParty) {
            var i = ELEC.data.elus.map(function(d){return d.id;}).indexOf(ELEC.state.currentParty);
            var barData  = [(ELEC.state.currentCirconscription ? ELEC.data2.representativesPerCirconscription[ELEC.state.currentCirconscription][ELEC.state.currentParty] : ELEC.data.elus[i])];
            barData[0].id = ELEC.state.currentParty;//FIXME work around : nromalize global/percirco data
            table.select('tbody')
                .select('tr').remove();
            var trEnter = table.select('tbody')
                .selectAll('tr')
                .data(barData);
            var tr = trEnter.enter()
                .append('tr');
            createPartyLine(tr);
        } else {
            table.select('tbody')
                .selectAll('tr')
                .remove();
        }
    }

    function getInfoBoxHeader(){
        if (ELEC.state.currentParty){
            if(ELEC.state.currentCirconscription){
                return  ['DIVISION','PERCENTAGE','VOTES'];
            } else {
                return ['DIVISION','PERCENTAGE','VOTES','SEATS'];
            }
        } else {
            return  ['PARTY','PERCENTAGE','VOTES','SEATS'];
        }
    }

    function updateInfoBox() {
        updateVoteBar();
        updatePartyBar();
        var table = d3.select("#info-table");
        table.select("thead").select('tr').selectAll('th').remove();
        var head = table.select("thead")
            .select('tr')
            .selectAll('th')
            .data(getInfoBoxHeader());
        
        head.enter()
            .append('th')
            .text(function(_){return _;});
        
        head.exit().remove();
        
        table.select("tbody").selectAll("tr").remove()
        var infoData;
        var circonscription = ELEC.state.currentCirconscription;
        
        if (ELEC.state.currentParty){
            if (circonscription){
                infoData = d3.entries( CIRCONSCRIPTIONS[circonscription].delegations)
                    .map(function(_){
                        var r = ELEC.data2.resultsPerCirconscriptionPerParty[circonscription][ELEC.state.currentParty];   
                        return {name:_.value.name,pourcentage:r[_.key].pourcentage, vote:r[_.key].vote, id : 'c'+ circonscription +'d' +_.key};
                    })
            } else {
                infoData = d3.entries(ELEC.data2.resultsPerParty[ELEC.state.currentParty]);
                infoData .forEach(function(_){_.id = 'c'+_.key});
            }
            var tr = table.select("tbody")
                .selectAll("tr")
                .data(infoData);
            tr.enter()
                .append("tr")
                .on('mouseover',mouseover)
                .on('mouseout',mouseout)
                .on('click',function(d) {selectCirconscription(d.key);})
                .style('cursor', circonscription ? null : 'pointer');
            tr.append("td")
                .text(function(_){
                    return circonscription ? _.name : CIRCONSCRIPTIONS[_.key].name;
                });
            tr.append('td')
                .text(function(_){return Math.floor( (circonscription ?_.pourcentage : _.value.pourcentage) * 100) / 100 +"%"; } )
                .classed("percentageBig",true);

            tr.append("td")
                .text(function(_){
                    return formatNumber(circonscription ?_.vote : _.value.vote);
                });
            if (!circonscription){
                tr.append("td")
                    .filter(function(_){return ELEC.data2.representativesPerCirconscription[_.key][_.value.id];})
                    .append('span')
                .text(function(_){
                    if (ELEC.data2.representativesPerCirconscription[_.key][_.value.id]) return ELEC.data2.representativesPerCirconscription[_.key][_.value.id].elus.length;
                }).classed('badge badge-inverse',true)
                .style("background-color",function(_){return PARTIES[_.value.id] ? PARTIES[_.value.id].fill : "grey";});
            }

        } else {
    	    if (circonscription){
                var agg = getCirconscriptionAgg(circonscription);
                infoData = d3.entries(ELEC.data2.representativesPerCirconscription[circonscription])
                    .map(function(_){
                        var r = {}; 
                        r = _.value; 
                        r.id = _.key;
                        r.pourcentage = r.percent = r.vote / agg.bulletins.correct * 100;
                        return r})
                    .sort(function(a,b){return a.vote < b.vote});
            } else {
                infoData = ELEC.data.elus;
            }

            var tr = table.select("tbody")
                .selectAll("tr")
                .data(infoData);

            tr.enter().append("tr") ;
            createPartyLine(tr);

            tr.sort(function(a,b) {
                return parseInt(b.elus.length) - parseInt(a.elus.length);
            })
            tr.exit().remove();
        }
    }   

    function createPartyLine(tr){
        var party = tr.append("td")
            .classed("leftish",true);

        party.append("div")
            .style("background-color",function(_){return PARTIES[_.id] ? PARTIES[_.id].fill : "grey";})
            .classed("partyColoredBoxBig",true);
        
        var partyLink =	party.append("div")
            .classed("party",true)
            .append("div")
            .classed("partyLink",true);
        
        partyLink.html(function(_){
        	var img = (PARTIES[_.id] && PARTIES[_.id].logo) ? '<img class="partyLogo" src="data/parties/'+PARTIES[_.id].logo+'" width="41" height="30">' : '';
        	var txt = PARTIES[_.id] ?( PARTIES[_.id]['longname-fr'] || PARTIES[_.id]['name-en']) :_.name;
        	return img+txt;
        })

        party.on('click',function(_){ELEC.state.currentParty ? selectParty() : selectParty(_.id);})
            .on('dblclick',function(_){ELEC.state.currentParty ? selectParty() : selectParty(_.id);});

        tr.append('td')
	       .text(function(_){return Math.floor((_.pourcentage || _.percent) * 100) / 100 +"%"; } ) //FIXME: normalize data
	       .classed("percentageBig",true);

        tr.append("td")
            .text(function(_){return formatNumber(_.vote);});
        tr.append("td")
            .append('span')
            .classed('badge',true)
            .classed('badge-inverse',true)
            .style("background-color",function(_){return PARTIES[_.id] ? PARTIES[_.id].fill : "grey";})
            .text(function(_){return _.elus.length;}); 
                return tr;
    }

    function delegationModeActive(d){
        return  ELEC.state.currentCirconscription && (typeof d.properties.agg !== "undefined");
    }

    function mouseover2(d,i){
        var circonscription = ELEC.state.currentCirconscription,
            isDelegation  = circonscription &&  d.properties.name_2;

        mouseover(d,i);
        tooltip.style("visibility", "visible");
        var tbl = tooltip.select('table');
        var header = d3.select('#tooltip').select('thead').selectAll('td');
        header.selectAll('p').remove();
        header.append('p')
        .classed('tooltipTitle',true)
        .text( isDelegation ? d.properties.name_2 : d.properties.name_1);
        d3.select(this)
        .style('cursor', isDelegation ? 'auto' : null);
        d3.select("#tooltipInstruction")
        .style('display',  isDelegation ? 'none' : null);

        tbl.select('tbody').remove();
        var tooltipData = d.properties.agg.resultat.listes.filter(function(d,i){return i < 5;});
        if (ELEC.state.currentParty || circonscription){
            tooltipData = ( delegationModeActive(d) && d.properties.code_circo == circonscription) ? d.properties.agg.resultat.listes.filter(function(d,i){return i < 5;}) : [];
        } else {
            tooltipData = d.properties.elus.listes;
        }
        if (ELEC.state.currentParty){ 
            var partyResult = getPartyResult(d,ELEC.state.currentParty);
            if (!circonscription){
                if(ELEC.data2.representativesPerCirconscription[d.properties.code_circo][ELEC.state.currentParty]) partyResult.elus = ELEC.data2.representativesPerCirconscription[d.properties.code_circo][ELEC.state.currentParty].elus;
            }
	    tooltipData = [partyResult];//ELEC.data2.representativesPerCirconscription[_.key][_.value.id].elus.length
    }

    var trEnter = tbl.append('tbody')
        .selectAll("tr")
        .data(tooltipData);

    var tr = trEnter.enter()
        .append("tr");

    tr.append("td")
        .classed("leftish",true)
        .text(function(_){
            return PARTIES[_.id] ? PARTIES[_.id]['name-en'] :"other";
        })
        .append("div")
        .style("background-color",function(_){return PARTIES[_.id] ? PARTIES[_.id].fill : "grey"})
        .classed("partyColoredBox",true);
        tr.append('td')
        .text(function(_){
            var percent = _.pourentage || _.pourcentage; 
            return Math.floor(percent * 100) / 100 +"%"; 
        })
        .classed("percentage",true);
            tr.append("td")
                .text(function(_){return formatNumber(_.vote);});
            tr.filter(function(_){return _.elus;}).append("td")
                .append('span')
                .classed('badge',true)
                .classed('badge-inverse',true)
                .style("background-color",function(_){return PARTIES[_.id] ? PARTIES[_.id].fill : "grey"})
                .text(function(_){return _.elus.length;});
        trEnter.order();

    }

    function mouseout2(d,i){
        mouseout(d,i);
        tooltip.style("visibility", "hidden");
    }

    function mousemove(d,i){
        tooltip.style("top", (d3.event.pageY+10)+"px") 
    	   .style("left",(d3.event.pageX+15)+"px"); //d3.event instead of event which does not work on firefox
    }

    function refreshMapAndLegend(){
        colorMapAndLegend(ELEC.state.currentParty);
    }

    function id(d){
        return "c" + d.properties.code_circo + (typeof d.properties.code_deleg !== "undefined" ? "d" + d.properties.code_deleg :"");
    }

    function updateMap(svg, json, path) {
        var features = svg.selectAll("path")
            .data(json.features, id);
        
        features
            .enter()
            .append("svg:path");
            
        features
            .attr("id", id)
            .attr("d", path)
            .on("mouseover", mouseover2)
            .on("mouseout", mouseout2)
            .on("mousemove", mousemove)
            .on('click', function(d){selectCirconscription(d.properties.code_circo);});
            
        features.exit().remove(); 
        refreshMapAndLegend();
    }

    function fetchDelegationData(circonscriptionId, delegationId, callback) {
         d3.json("data/results/agg/"+circonscriptionId+ "/" + delegationId + ".json", function(delegationData) {
            delegationData ? callback(null, { agg : delegationData, delegationId : delegationId}) : callback("error", null);
         });
    }

    function fetchAllDelegationsPerCirconscription(geojson, callback){
        var q = queue(1);
        var circonscriptionId = geojson.features[0].properties.code_circo; 
        Object.keys(CIRCONSCRIPTIONS[circonscriptionId].delegations)
            .forEach(function(delegationId){
                q.defer(fetchDelegationData, circonscriptionId, delegationId) 
            });

        q.await(function(error, results) { 
            var delegations = results.map(function(_){return _.delegationId});
            geojson.features
                .forEach(function(feat){
                    var code = feat.properties.code_deleg;
                    var i = delegations.indexOf(code);
                    if (i > -1) {
                        feat.id = id(feat);
                        feat.properties.agg = results[i].agg;
                    }
                });
            callback(geojson);
        });
    }


    function selectCirconscription(id){
        var previousCirconscription = ELEC.state.currentCirconscription;
        if (previousCirconscription) {
            ELEC.data.features = ELEC.data.features.filter(function(d){
                return (typeof d.properties.code_deleg === "undefined" && typeof d.properties.name_2 === "undefined");
            });
        }
        var circonscription = ELEC.state.currentCirconscription = id;
        navigationButton.style('display', function(){return ELEC.state.currentParty || circonscription ? 'inline-block' : null})
        
        if (circonscription) {	
            d3.json('data/geojson/'+CIRCONSCRIPTIONS[circonscription].shp+'.json',function(circoGeojson){
    	    //FIXME: get the election data per circo here
        	    d3.json('data/flat/circonscriptions/' + circonscription +'.json',function(flatResults){
                    ELEC.data2.resultsPerCirconscriptionPerParty[circonscription] = flatResults;
        		    circoGeojson.features.forEach(function(d){d.properties.code_circo = circonscription}); //FIXME: on the geojson
        		    var circoPath = getProjectionPath(circoGeojson, width, height);
        		    fetchAllDelegationsPerCirconscription(circoGeojson,function(geojson){
                        ELEC.data.features.push.apply(ELEC.data.features,geojson.features);
                        updateMap(svgG, ELEC.data, circoPath);
                        updateInfoBox();
                    });
                });  
    	    });
        } else {
            var globalPath = getProjectionPath(ELEC.data, width, height);
            updateMap(svg, ELEC.data, globalPath);
            updateInfoBox();
        }
    }

    function selectParty(id){
        ELEC.state.currentParty = (id && PARTIES[id]) ? id : null;

        navigationButton.style('display', function(){return ELEC.state.currentParty || ELEC.state.currentCirconscription ? 'inline-block' : null})

        updateInfoBox();
        refreshMapAndLegend();
    }

    function getPartyResult(feature,id){
        if (typeof feature.properties.agg === "undefined") return;
        var l = feature.properties.agg.resultat.listes; //feature.properties.elus.listes;
        var i = l.map(function(_){return _.id}).indexOf(id);
        if (i == -1){
            l = feature.properties.agg.resultat.listes;
            i = l.map(function(_){return _.id}).indexOf(+id);
        }
        if (i > -1) return l[i];
    }

    var colorMapAndLegend = (function() {
        var minValue=0, maxValue=60,  legend, legendGradient, legendTicks,continuousScale;
        var legendGradientWidth = 15;
        var legendGradientHeight = 200;
        var extraTranslateRight =30;

        var hue = d3.hsl(PARTIES[355].fill).h;
        var svg = d3.select('#map-circonscriptions').select('svg');
        
        legend = svg.append('svg:g').attr('transform', 'translate(' + (0 + extraTranslateRight) + ', 640)');
        legendGradient = legend.append('svg:g');
        legendTicks = legend.append('svg:g');
        continuousScale = d3.scale.linear().domain([minValue, maxValue]).range([0, 1]);

        return  function(id){
                    eraseLegend();
                    drawLegend(id);
                    colorMap(id);
                };
                
        function convertPercentToColor(id, percent) {
            return d3.hsl( getPartyHue(id), 1, 1 - continuousScale(percent));
        }

        function getPartyHue(id){
            return d3.hsl(PARTIES[id].fill).h;
        }


        function colorMap(){
    	    //FIXME: merge the 2 if branches (put them inside the fill option)
            if (ELEC.state.currentParty){
                svg.selectAll('path').style('fill',function(d){
                    if (ELEC.state.currentCirconscription && typeof d.properties.code_deleg === "undefined") return;
                    var result = getPartyResult(d,ELEC.state.currentParty);
                    if (!result) return;
            		var percent = result.pourcentage || result.pourentage; //FIXME: on the api side /elus
            		return convertPercentToColor(ELEC.state.currentParty,percent);
                })
            } else {
                svg.selectAll("path")
                    .style("fill",function(d) {
                        if (ELEC.state.currentCirconscription && typeof d.properties.code_deleg === "undefined") return;
                          var first = d.properties.agg ? d.properties.agg.resultat.listes[0]: null;
                          w = first ?  PARTIES[first.id] : null;
                          return w ? w.fill : null;
                    });
            }
        }

        function eraseLegend() {
        	legend.selectAll('text').remove();
        	legend.selectAll('rect').remove(); //for the border
        	legendGradient.selectAll('rect').remove();
        	legendTicks.selectAll('text').remove();
        }

        function drawLegend(id) {
            if (!id) return;
            legend.append('svg:text')
                .attr('class', 'legend-title')
                .attr('x', -30)
                .attr('y', -20)
                .text('percent');

    	    // create the color gradient
    	    legendGradient.selectAll('rect')
                .data(d3.range(0, 1, 0.01))
                .enter()
                .insert('svg:rect')
                .attr('x', 1)
                .attr('y', function (d, i) {
                    return i * 2;
                })
                .attr('width', legendGradientWidth)
                .attr('height', 2)
                .style('fill', function (d, i) {
                    return d3.hsl(getPartyHue(id), 1, d);
                });

            legendTicks.selectAll('text')
                .data([maxValue, minValue])
                .enter()
                .insert('svg:text')
                .attr('class', 'legend-tick')
                .attr('text-anchor', 'end')
                .attr('x', 0)
                .attr('y', function (d, i) {
                    return i * legendGradientHeight + 5;
                })
                .text(function(d, i) {
                    return d3.format('.0f')(d) + '%';
                });

    	    // this is a dumb way of creating a border!
    	    legend.append('svg:rect')
                .attr('y', 0)
                .attr('x', 1)
                .attr('width', legendGradientWidth)
                .attr('height', legendGradientHeight)
                .style('fill', 'none')
                .style('stroke', '#ccc')
                .style('shape-rendering', 'crispEdges');
        }

    }())

    function getCirconscriptionAgg(circonscription){
        var agg = ELEC.data2.agg.filter(function(_) {
                return _.circonscription.code == circonscription;
            }).map(function(_) {
                return _.resultat
            })[0];
        return agg;
    }
    function fade(opacity) {
        return function(g) {
            svg.selectAll("svg>g>path")
            .filter(function(d) {
                return d.id != g.id;
            })
            .transition()
            .style("opacity", opacity);
        };
    }

    function mouseover(d,i) {
        fade(.5)(d,i);
    }

    function mouseout(d,i) {
        fade(1)(d,i);
    }

    function getProjectionPath(geojson, width, height){
        var proj = d3.geo.mercator().scale(1).translate([0, 0]),
        path = d3.geo.path().projection(proj);
        
        var bounds0 = d3.geo.bounds(geojson),
        bounds = bounds0.map(proj),
        xscale = width/Math.abs(bounds[1][0] - bounds[0][0]),
        yscale = height/Math.abs(bounds[1][1] - bounds[0][1]),
        scale = Math.min(xscale, yscale);
        
        proj.scale(scale);
        proj.translate(proj([-bounds0[0][0], -bounds0[1][1]]));
        
        return path;
    }

}
