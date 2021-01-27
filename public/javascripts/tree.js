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


    let link = svg  //buildlinks
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr('class', 'link')

    let node = svg //build node
        .selectAll("foreignObject")
        .data(data.nodes)
        .enter()
        .append("foreignObject")
        .attr('width', 380)//essentially max  width and height
        .attr('height', 380)
        .attr('class', 'leaf')
       



     // node hover effect
    function handleMouseenter() {
        d3.select(this)

        // .select('.circle')
        .select('.circle-link')
        .attr("x", d =>  d.x - 90)
        .attr("y", d => d.y - 120)
        .append('xhtml:h2')
        .attr('class', 'info')
        
        .text(d => {
            console.log("snippet", d)
            return d.snippet ? d.snippet : null
        })
        
        
    } 
     
    function handleMouseleave() {
        d3.select(this)
        // .select('.circle')
        .attr("x", d =>  d.x - 60)
        .attr("y", d => d.y - 60)
        .selectAll(".info").remove();
    } 

    node.filter((d, i) => i === 0)
        .classed("circle", false)
        .attr('class', 'leaf-root')
        
    //physics
    let attractForce = d3.forceManyBody().strength(10).distanceMin(300).distanceMax(500);
    let collisionForce = d3.forceCollide(12).strength(1).iterations(100);
    let charge = d3.forceManyBody().strength(-500);
    let center =  d3.forceCenter(width / 2, height / 2);
    let links = d3.forceLink()
                    // .attr('class', 'branch')
                    .id(d => d.id)
                    .links(data.links)
                    .distance(150)

    let simulation = d3.forceSimulation(data.nodes)
        .force("link", links)
        .force("charge", charge)
        .force("center", center)
        // .force('attractForce', attractForce)
        // .force("collisionForce", collisionForce)
        .on("tick", ticked);

   

                    
    node.append('xhtml:div')
    .on('mouseenter', handleMouseenter)
    .on('mouseleave', handleMouseleave)
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
        .attr("x", d =>  d.x - 60)
        .attr("y", d => d.y - 60);
    }
    

}