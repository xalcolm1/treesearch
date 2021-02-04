
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
    const keywords = countNouns(data, dictionary, searchTerm);
    const nodes = [];
    const links = [];
    
    let categoryId = data.length + 2;

    data.forEach((datum, idx) => {
       let category = categorize(datum, keywords)//return the category name 
        //find if the category already exists
        let categoryExists
        nodes.forEach(item => {
             if (category && item && item.name === category.name) {
                categoryExists = item 
             }});

         //decide if a new categry needs to be made 
        if(categoryExists){
            // debugger
            links.push({
                source: categoryExists.id,
                target: idx + 2,
            })

        } else if (category){
            category.id = categoryId && categoryId++

            nodes.push(category)

            links.push({
                source: 1,
                target: category.id
            } , {
                source: category.id,
                target: idx + 2,
            })
        } else {
            links.push({
                source: 1,
                target:idx + 2
            })
        }

       
        nodes.push({
            id: idx + 2,
            type: 'information',
            name: datum.title,
            link: datum.link,
            snippet: datum.snippet
        })
        
        
        
       
    });
// links between central node and categories

// links between categories and children

//nodes for the categories


    nodes.unshift({
        id: 1,
        name: searchTerm,
        type: 'root',

        // link: '',
    })

    // const links = data.map((datum, idx) => {
    //     return {
        
    //     }
    // });

    return {
        nodes,
        links,
    }
}










