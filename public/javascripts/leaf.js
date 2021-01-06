
// function ticked() {
//     link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//     node
//         .attr("cx", d => d.x + 6)
//         .attr("cy", d => d.y - 6);
// }

function formatData(data, searchTerm) {
    const nodes = data.map((datum, idx) => {
        return {
            id: idx + 2,
            name: datum.title,
            link: datum.link,
            snippet: datum.snippet
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










