
function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx",  d => d.x + 6)
        .attr("cy",  d => d.y - 6);
}

function formatData(data, searchTerm) {
    const nodes = data.map((datum, idx) => {
        return {
            id: idx + 2,
            name: datum.title,
            link: datum.link
        }
    });

    nodes.unshift({
        id: 1,
        name: searchTerm,
        link: '',
    })

    const links = data.map((datum, idx) => {
        return {
            source: 1,
            target: idx + 2,
        }
    });

    return {
        nodes,
        links,
    }
}

function makeLeaf(searchData) {
    d3.select('svg').remove()
    let title = d3.select('#title')
    let margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 800 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    let svg = d3.select("#search_area")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top} )`);

    const data = formatData(searchData, 'Ruby');


        let link = svg
            .selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .style("stroke", "#aaa")

        let node = svg
            .selectAll("circle")
            .data(data.nodes)
            .enter()
            .append("circle")
            .attr("r", 50)
            .attr('class', 'leaf')
            
            // .style("fill", "#66E89D ")
            // .style("font", "roboto")
            

        let text = svg
            .selectAll("text")
            .data(data.nodes)
            .enter()
            .append("text")
                .attr('text-anchor', 'middle')
                .attr("font-family", "sans-serif")
                .attr("font-size", "10px")
                .text(d => d.name);

        let simulation = d3.forceSimulation(data.nodes)                
            .force("link", d3.forceLink()                              
                .id(d => d.id)                    
                .links(data.links)
                .distance(100)                                   
            )
            .force("charge", d3.forceManyBody().strength(-500))         
            .force("center", d3.forceCenter(width / 2, height / 2))     
            .on("tick", ticked);

        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d =>d.target.y);

            node
                .attr("cx", d =>  d.x + 6)
                .attr("cy", d =>  d.y - 6);

            // node.attr("x", d =>  d.x + 6)
            // .attr("y", d =>  d.y - 6);

            text
                .attr("x", d =>  d.x + 3)
                .attr("y", d =>  d.y - 3);
        }


}