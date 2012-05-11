PARTIES = {"464":{"name-en" : "Ennahdha", fill: "#183883"},
  "446" : { "name-en" : "CPR", fill: "#4CA42F"},
  "500" : { "name-en" : "Petition", fill: "#158600"},
  "430" : { "name-en" : "Ettakatol", fill: "#B22222"},
  "137" : { "name-en" : "PDP", fill: "#FFD600"},
  "447" : { "name-en" : "Initiative", fill: "#15ADFF"},
  "256" : { "name-en" : "PDM", fill: "#0557BA"},
  "401" : { "name-en" : "Afek", fill: "red"},
  "437" : { "name-en" : "PCOT", fill: "#D70F0F"},
}

var width = $("#map-circonscriptions").width(),
    height = width * 2.3,
    tooltip = d3.select("#tooltip");

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

load(svgG, width, height);


function load(svg, width, height) {

    d3.json("data/geojson/circonscriptions.json", function(json) {
	window.data = json;
        getCircoData(json, function(geojson){
	    var path = getProjectionPath(geojson, width, height);
	    updateMap(svg, geojson, path);
	    updateInfoBox(geojson);
	});

	function xjson(code, callback) {
           d3.json("data/results/elus/"+code+ ".json", function(eJson) {
	       d3.json("data/results/agg/"+code+ ".json", function(aJson) {
		   eJson && aJson ? callback(null, { elus : eJson, agg : aJson, code : eJson.circonscription.code}) : callback("error", null);
	       })
	   });
	}
        function getCircoData(geojson,callback){
	    var q = queue(1);
	    geojson.features
	       .forEach(function(feat){
		   var code = feat.properties.code_circo;
		   q.defer(xjson,code)
                   
	       });
	    q.await(function(error, results) { 
		var circos = results.map(function(_){return _.code});
		geojson.features
		    .forEach(function(feat){
			var code = feat.properties.code_circo;
			var i = circos.indexOf(code);
			if(i > -1){
			    feat.properties.elus = results[i].elus;
			    feat.properties.agg = results[i].agg;
			}
		    });
		callback(geojson);
	    });
	    
	}
	
    })

    function getProjectionPath(json, width, height){
	var proj = d3.geo.mercator().scale(1).translate([0, 0]),
	path = d3.geo.path().projection(proj);
	
	var bounds0 = d3.geo.bounds(json),
        bounds = bounds0.map(proj),
        xscale = width/Math.abs(bounds[1][0] - bounds[0][0]),
        yscale = height/Math.abs(bounds[1][1] - bounds[0][1]),
        scale = Math.min(xscale, yscale);

	proj.scale(scale);
	proj.translate(proj([-bounds0[0][0], -bounds0[1][1]]));

	return path;
    }

    
    function updateMap(svg, json, path) {
	var features = svg.selectAll("path")
            .data(json.features, id);
	
	features
            .enter()
            .append("svg:path");
	
	features
            .style("fill",function(d) {
		w = winner(d);
		return w ? w.fill : "grey";
	    })
            .attr("id", id)
            .attr("d", path)
            .on("mouseover", mouseover2)
	    .on("mouseout", mouseout2)
	    .on("mousemove", mousemove)
	
	features.exit().remove(); 
    }
    
    function updateInfoBox(json) {
	var table = d3.select("#info-table").select("tbody");

	var tr = table.selectAll("tr")
	    .data(json.features, id)

	tr.enter()
	    .append("tr")
            .sort(function(a,b) {
		return parseInt(a.properties.code_circo) - parseInt(b.properties.code_circo);
	    } )
	    .on("mouseover", mouseover)
	    .on("mouseout", mouseout);
	
	var td = tr.selectAll("td")
	    .data(function(d) { return [d.properties.code_circo, d.properties.name_circo, d.properties.name_1]; })
	    .enter().append("td")
	    .text(function(d,i) {return d; });

	tr.exit().remove();
    }
    
    function winner(d){
        if (d.properties.elus) return PARTIES[d.properties.elus.listes[0].id];
    }
    
    function id(d){
	return "c" + d.properties.name_1;
    }

    function mouseover2(d,i){
	mouseover(d,i);
	tooltip.style("visibility", "visible");
        var tbl = tooltip.select('table');
	var header = d3.select('#tooltip').select('thead').selectAll('td');
	header.selectAll('p').remove();
	header.append('p')
	    .classed('tooltipTitle',true)
	    .text(d.properties.name_1);

	tbl.select('tbody').remove();
        var trEnter = tbl.append('tbody')
	    .selectAll("tr")
	    .data(d.properties.elus.listes);

	var tr = trEnter.enter()
	    .append("tr");

	tr.append("td")
	    .classed("leftish",true)
	    .text(function(_){
		return PARTIES[_.id] ? PARTIES[_.id]['name-en'] : "other";
	    })
	    .append("div")
	    .style("background-color",function(_){return PARTIES[_.id] ? PARTIES[_.id].fill : "grey"})
	    .classed("partyColoredBox",true);
	tr.append('td')
	    .text(function(_){return Math.floor(_.pourentage * 100) / 100 +"%"; } )
	    .classed("percentage",true);
	tr.append("td")
	    .text(function(_){return _.vote;});
	tr.append("td")
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
	tooltip.style("top", (event.pageY-10)+"px")
	    .style("left",(event.pageX+10)+"px");
    }
    
   
}


