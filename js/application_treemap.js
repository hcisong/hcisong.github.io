function reSortRoot(root,value_key) {
	for (var key in root) {
		if (key == "key") {
			root.name = root.key;
			delete root.key;
		}
		if (key == "values") {
			root.children = [];
			for (item in root.values) {
				root.children.push(reSortRoot(root.values[item],value_key));
			}
			delete root.values;
		}
		if (key == value_key) {
			root.value = parseFloat(root[value_key]);
			delete root[value_key];
		}
	}
	return root;
}

$( document ).ready(function() {

	d3.csv("data/museen.csv", function(csv_data){

		function drawTree() {
			var nested_data = d3.nest()
       				.key(function(d)  { return d.wert; })
       				.key(function(d)  { return d.symbol; })
              .key(function(d)  { return d.date = parse(d.date); })
				      .entries(csv_data);

			var root = {};

			root.key = "Animate with time";
			root.values = nested_data;

			root = reSortRoot(root,"wert");

			loadData(root);
		}

		var parse = d3.time.format("%b %Y").parse;

		csv_data = csv_data.filter(function(d) {
			return d.date  == "Jan 2014";
		});

		var data_loop;

		d3.csv("data/time.csv", function(csv_data){
			for( var i =0; i < 12*5+1; i++) {
				var parse = d3.time.format("%b %Y").parse;
				return data_loop = csv_data[i].date;
				console.log(data_loop);
			}
		});

		// csv_data = csv_data.filter(function(d) {
		// 	return d.date  == data_loop;
		// });

		// secfilter();
		// datanest();
		// datadraw();
		drawTree();

		d3.select("#nextMonth").on("click", function() {
			csv_data = csv_data.filter(function(d) {
				return d.date  == "Feb 2014";
			});

    	div.selectAll("div")
      .data(treemap.value(function(d) { return d.date; }))
     	.style("background", function(d) { return color(d.roc2); })
    	.transition()
      .duration(1500)
      .call(cell);

    d3.select("#nextMonth").classed("active", true);
    d3.select("#pop").classed("active", false);
  });
			//
	});
});
