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