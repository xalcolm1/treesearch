

const svg = d3.select('svg')
const svgHeight =svg.attr('height')
const svgWidth = svg.attr('width')
const root = svg.select('foreignObject')
           // .attr('x', svgWidth/2)
           // .attr('y', svgHeight/2)
const nodes = []


// var simulation = d3.forceSimulation(nodes)
//                    .alphaDecay(0.03)
//                    .force("center", d3.forceCenter(svgHeight/2, svgWidth/2))
//                    .force("attractForce",attractForce)
//                    .force("repelForce",repelForce);

// var attractForce = d3.forceManyBody()
//                     .strength(200)
//                     .distanceMax(400)
//                     .distanceMin(60);

// var repelForce = d3.forceManyBody()
//                   .strength(-10)
//                   .distanceMax(50)
//                   .distanceMin(20);
// })
function makeLeaf(data){
    // words = new Object(0)
    // data.forEach(item => {
        //     item.snippet
        
        
        
        svg
            .selectAll('a')
            .data(data)
            .enter()
            .append('a')
                .attr('href', d => d.formattedUrl)
            .append('rect')
                .classed('leaf', true)
                .attr('width', 100)
                .attr('height', 50)
                .attr('y', (d, i) => (i + 1) * data.length * 4)
                .attr('x', (d, i) => (i + 2) * data.length * 4)
                .attr('rx',10)
            .append('text')
                .text(d => d.title);

            const attractForce = d3.forceManyBody()
                    .strength(200)
                    .distanceMax(400)
                    .distanceMin(60);

            const repelForce = d3.forceManyBody()
                .strength(-10)
                .distanceMax(50)
                .distanceMin(20);


            const simulation = d3.forceSimulation(data)
                .alphaDecay(0.03)
                .force("center", d3.forceCenter(svgHeight/2, svgWidth/2))
                .force("attractForce",attractForce)
                .force("repelForce",repelForce)
                


        
        // let nodes = svg.select('leaf')
        // let links = []
        // nodes.forEach(node => {
            //     links.push({source: root, target: node})
            // })
            // console.log(nodes)
            // nodes.unshift(root);
            // console.log(nodes)
            // simulation = d3.forceSimulation(root, nodes)
            //     .force('charge', d3.forceManyBody().strength(-100))
            //     .force('center', d3.forceCenter(width / 2, height / 2))
            //     .force('link', d3.forceLink().links(links))
           

        }
//     function animate(){
//             let svg = d3.select('svg')
              
//             svg.enter()
//               .append('rect')
//               .attr('r', 5)
//               .merge(svg)
//               .attr('cx', function(d) {
//                 return d.x
//               })
//               .attr('cy', function(d) {
//                 return d.y
//               })
//         svg
//               .selectAll('a')
//               .data(data)
              
//         svg
//               .enter()
//               .append('a')
//                   .attr('href', d => d.formattedUrl)
//               .append('rect')
//                   .classed('leaf', true)
//                   .attr('width', 100)
//                   .attr('height', 50)
//                   .attr('x', d => d.x)
//                   .attr('y', d => d.y)
//                   .attr('rx',15)
//               .append('text')
//                   .text(d => d.title)
//             u.exit().remove()
//     }

    
//     function updateLinks() {
//         var u = d3.select('.links')
//         .selectAll('line')
//         .data(links)
            
//     u.enter()
//       .append('line')
//       .merge(u)
//       .attr('x1', function(d) {
//         return d.source.x
//       })
//       .attr('y1', function(d) {
//         return d.source.y
//       })
//       .attr('x2', function(d) {
//         return d.target.x
//       })
//       .attr('y2', function(d) {
//         return d.target.y
//       })
  
//     u.exit().remove()
//   }


function eraseLeaf(){
    

};






function formHierarchy(data){
    words = countWords(data);

    var data = {
        "name": "searchbar",
        "children": [
        {
            "name": "B1",
            "children": [
            {
                "name": "C1",
                "value": 100
            },
            {
                "name": "C2",
                "value": 300
            },
            {
                "name": "C3",
                "value": 200
            }
            ]
        },
        {
            "name": "B2",
            "value": 200
        }
        ]
    }
    
  var root = d3.hierarchy(data)

}