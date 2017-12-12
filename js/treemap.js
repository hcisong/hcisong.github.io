var w_tree = 1000,
  h_tree = 500,
  color = d3.scale.category20c(),
  root,
  node,
  master,
  data;

var treemap = d3.layout.treemap()
//.round(false)
  .size([w_tree, h_tree])
//.sticky(false)
  .children(function(d) {
  return d.values;
}).value(function(d) {
  return d.key;
});

var svg_tree = d3.select("body").style("width", w_tree + "px").style("height", h_tree + "px").append("svg:svg").append("svg:g").attr("transform", "translate(.5,.5)");

//load csv and copy to global variable
d3.csv("data/museen.csv", function(csv) {
  master = data = csv;
  init(master);
});

// d3.select("body #firstPage").on("change", redraw);

function init() {
  datanest();
  datadraw();
}

function secfilter() {
  var sect = document.getElementById("sec");
  var section = sect.options[sect.selectedIndex].value;
  // console.log ("selected section = " + section)

  data = master.filter(function(d) {
    return d.sec == "Alte Pinakothek";
  });
  return data;
}

function datanest() {
  node = root = {
    values: d3.nest().key(function(d) {
      return d.sec;
    }).rollup(function(d) {
      return d.map(function(d) {
        return {key: d.wert};
      });
    }).entries(data)
  };
  console.log(root)
  return node;
  return root;
}
//.....TO BE BUILT SOON MULTIPLE OTHER NESTS....

function datadraw() {

  //join data to .cell elements
  var cell = svg_tree.selectAll(".cell").data(treemap.nodes(root).filter(function(d) {
    return !d.values;
  }))
  treemap.sticky(false) // ****	Guessing this is something to do with it... https://github.com/mbostock/d3/issues/393

  // enter new elements
  var cellEnter = cell.enter().append("g").attr("class", "cell")
  // .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

  cellEnter.append("rect")
  cellEnter.append("text")

  // update remaining elements

  cell.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  })

  cell.select("rect").attr("width", function(d) {
    return d.dx - 1;
  }).attr("height", function(d) {
    return d.dy - 1;
  }).style("fill", function(d) {
    return color(d.parent.key);
  })

  cell.select("text").attr("x", function(d) {
    return d.dx / 2;
  }).attr("y", function(d) {
    return d.dy / 2;
  }).attr("dy", ".35em").attr("text-anchor", "middle").text(function(d) {
    return d.key;
  }).text(function(d) {
    return d.parent.key;
  }).style("opacity", function(d) {
    d.w = this.getComputedTextLength();
    return d.dx > d.w
      ? 1
      : 0;
  })

  // remove old elements
  cell.exit().remove()
}
