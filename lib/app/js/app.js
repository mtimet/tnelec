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
  fade(.2)(d,i);
}

function mouseout(d,i) {
  fade(1)(d,i);
}


