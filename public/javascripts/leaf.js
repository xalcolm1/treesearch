 
let leaf = document.getElementById('template')

function makeLeaf(data){
    // words = new Object(0)
    // data.forEach(item => {
    //     item.snippet


    // })
    const svg = d3.select('svg')

    const root = svg.select('foreignObject')
                root
                    .selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                        .text(d => d.snippet)
                        .classed('leaf', true)
                        .attr('width', 100)
                        .attr('height', 100)
                        .attr('x', 120)
                        .attr('rx',15)
                    }


function eraseLeaf(){
    

};
function countWords(data){
    let wordCounts = new Object(0);
    let allWords = '';
    const unwantedWords = [
            'this',
            'that',
            'you',
            'me',
            'there',
            'is',
            'a',  
            'in',
            'also',
            'like',
            ''
        ];
        

    data.forEach(item => {
        allWords = allWords.concat(item.snippet) ;
    });

    allWords.toLowerCase().split(' ').forEach(word => {

       let pureWord = word.replace(/[^a-z]/gi, '');
        if(!unwantedWords.includes(pureWord)){
            wordCounts[pureWord] = (wordCounts[pureWord] || 0) + 1
        };
    });
    
    return wordCounts;
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