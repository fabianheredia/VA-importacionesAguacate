const svg2 = d3.select(".grafico2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

const color = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb",
    "#e78ac3", "#a6d854", "#ffd92f"
]);

const pie = d3.pie()
    .value(d => d.value)
    .sort(null);

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
    const path = svg2.selectAll("path")
        .data(pie(datos));

    // Update existing arcs
    path.transition().duration(200).attrTween("d", arcTween);

    // Enter new arcs
    path.enter().append("path")
        .data(datos)
        .attr("fill", (d) => color(d.key))
        .attr("d", arc)
        .attr("stroke", "white")
        .attr("stroke-width", "6px")
        .each(function (d) {
            this._current = d;
        });
}