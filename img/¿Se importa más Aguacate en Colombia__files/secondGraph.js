const svg2 = d3.select(".grafico2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
    svg2.append("g")
    .attr("class", "labels");

const color = d3.scaleOrdinal(d3.schemeCategory10)
// .domain(_listImp.categoriaDep.key);

let pie = d3.pie()
    .value(d => d.value)
    .sort(null);

var key = function (d) {
    return d.key;
};



const arc = d3.arc()
    .innerRadius(50)
    .outerRadius(radius);


function arcTween(a) {
    const i = d3.interpolate(this._current, a);
    this._current = i(1);
    return (t) => arc(i(t));
}



function update(datos) {
    // Join new data
    //d3.select(".labels").remove();
    const path = svg2.selectAll("path")
        .data(pie(datos));

    // Update existing arcs
    path.transition().duration(200).attrTween("d", arcTween);

    // Enter new arcs
    let pathEnter = path.enter().append("path");
    path.merge(pathEnter)
        // .data(datos)
        .attr("fill", (d) => {

            return color(d.data.key)
        })
        .attr("d", arc)
        .attr("stroke", "white")
        .attr("stroke-width", "6px")
        .each(function (d) {
            this._current = d;
        });
    path.exit().remove();

    d3.selectAll(".textospie").remove();
    var label = svg2.select('.labels').selectAll('text')
        .data(pie(datos))
        
        .enter().append('text')
        .attr("class","textospie")
        .attr('dy', '.25em')
        .html(updateLabelText)
        .attr('transform', labelTransform)
        .style('text-anchor', function (d) {
            return (midAngle(d)) < Math.PI ? 'start' : 'end';
        });

        //label.exit().remove();
}

function updateLabelText(d) {
    return d.data.key + ': <tspan>' + percentFormat(d.data.value) + '</tspan>';
}

function labelTransform(d) {
    var pos = outerArc.centroid(d);
    pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
    return 'translate(' + pos + ')';
}

function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
}
var percentFormat = d3.format('.6');
var outerArc = d3.arc()
    .outerRadius(radius * 0.9)
    .innerRadius(radius * 0.9);