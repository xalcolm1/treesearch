

function countNouns(data, nounDictionary, searchTerm){
    let wordCounts = new Object(0);
    let allWords = '';
    data.forEach(item => {
        allWords = allWords.concat(item.snippet, item.title);
    });

    allWords.toLowerCase().split(' ').forEach(word => {

       let pureWord = word.replace(/[^a-z]/gi, '');
        if(word !== searchTerm.toLowerCase() && pureWord != '' && pureWord in nounDictionary ){
            wordCounts[pureWord] = (wordCounts[pureWord] || 0) + 1
        };
    });


    
    return wordCounts;
};
//refine keywords
function filterKeywords(data, keywords){

}


// use keywords to categorize a node
function categorize(data, keywords) {
        // let categories = new Object()
        let category 

        `${data.title} ${data.snippet}`.toLowerCase().split(' ').forEach(word => {

           // the first word that shows up in keywords is the category
            let pureWord = word.replace(/[^a-z]/gi, '');
            if(pureWord in keywords){
                category =({
                        id: 1,
                        name: pureWord,
                        type: 'category',
                })
            };
    })
    //find the most common category in a snippet
//    category = Object.keys(categories).reduce((accumulator, key) => {
//        return  category[key] > category[accumulator]
//     }); 

    return category
}


// function filterKeywords(data, keywords) {
//     let categories = new Object()
    
//     debugger
//     `${data.title} ${data.snippet}`.toLowerCase().split(' ').forEach(word => {

//        // the first word that shows up in keywords is the category
//         let pureWord = word.replace(/[^a-z]/gi, '');
//         if(pureWord in keywords){
//             // category =({
//             //         id: 1,
//             //         name: pureWord,
//             //         type: 'category',
//             // })
//             category[{
//                 id: 1,
//                 name: pureWord,
//                 type: 'category',
//             }] = (category[{
//                         id: 1,
//                         name: pureWord,
//                         type: 'category',
//                   }] || 0 ) ++
//         };
// })
// //find the most common category in a snippet
// category = Object.keys(categories).reduce((accumulator, key) => {
//    return  category[key] > category[accumulator]
// }); 

// return category
// }