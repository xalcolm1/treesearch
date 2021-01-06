function makeLeaf(searchData, searchTerm) {
    d3.select('svg').remove()
    let title = d3.select('#title')
    let margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = window.innerWidth
        height = window.innerHeight
        // - margin.left - margin.right,
        // - margin.top - margin.bottom;

    let svg = d3.select("#result_area")
        .append("svg")
        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.top + margin.bottom)
        .attr('width', '100%')
        .attr('height', '100%')
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top} )`);

    const data = formatData(searchData, searchTerm);


    let link = svg
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        // .style("stroke", "#aaa")
        .attr('class', 'link')

    let node = svg
        .selectAll("foreignObject")
        .data(data.nodes)
        .enter()
        .append("foreignObject")
        .attr('width', 380)
        .attr('height', 380)
        .attr('class', 'leaf')
        .on('mouseenter', handleMouseover)
        .on('mouseleave', handleMouseout)

    function handleMouseover() {
        d3.select(this)
        .select('.circle')
        .select('.circle-link')
        .append('xhtml:h2')
        .attr('class', 'info')
        .text(d => {
            console.log("snippet", d)
            return d.snippet ? d.snippet : ""
        })
        
    } 

    function handleMouseout() {
        d3.select(this)
        .select('.circle')
        .attr("x", d =>  d.x - 40)
        .attr("y", d => d.y - 40)
        .selectAll(".info").remove();
    } 

    node.filter((d, i) => i === 0)
        .attr('class', 'leaf-root')
        

    let simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink()
            // .attr('class', 'branch')
            .id(d => d.id)
            .links(data.links)
            .distance(100)
        )
        
        .force("charge", d3.forceManyBody().strength(-15025))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

    node.append('xhtml:div')
        .attr('class', 'circle')
        .append('xhtml:a')
        .attr('class', 'circle-link')
        .attr('href', d => d.link ? d.link : '#')
        .attr('target', d => d.link ? '_blank' : '_self')
        .text(d => d.name)
        // .on("mouseover", d => {
        //     d3.select(this)
        //       .append('title')
        //       .text(d => d.snippet)
        // })

    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("x", d =>  d.x - 80)
            .attr("y", d => d.y - 80);
    }


}