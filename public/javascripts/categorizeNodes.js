

// the goal of this funtion is to condence a string of any length into one word
// the word should be meaning full and descriptive
// function countWords(data){
//     let wordCounts = new Object(0);
//     let allWords = '';


    
//     const unwantedWords = [
//             'this',
//             'that',
//             'you',
//             'me',
//             'there',
//             'is',
//             'a',  
//             'in',
//             'also',
//             'like',
//             'and',
//             'were',
//             'with',
//             'to',
//             'the',
//             'of',
//             'on',
//             'one',
//         ];
        

//     data.forEach(item => {
//         allWords = allWords.concat(item.snippet) ;
//     });

//     allWords.toLowerCase().split(' ').forEach(word => {

//        let pureWord = word.replace(/[^a-z]/gi, '');
//         if(!unwantedWords.includes(pureWord)){
//             wordCounts[pureWord] = (wordCounts[pureWord] || 0) + 1
//         };
//     });
    
//     return wordCounts;
// };

// create keywords

function countNouns(data, nounDictionary, searchTerm){
    let wordCounts = new Object(0);
    let allWords = '';
    data.forEach(item => {
        allWords = allWords.concat(item.snippet, item.title) ;
    });

    allWords.toLowerCase().split(' ').forEach(word => {

       let pureWord = word.replace(/[^a-z]/gi, '');
        if(word !== searchTerm.toLowerCase() && pureWord != '' && pureWord in nounDictionary ){
            wordCounts[pureWord] = (wordCounts[pureWord] || 0) + 1
        };
    });
    
    return wordCounts;
};
// use keywords to categorize a node
function categorize(data, keywords) {
        let category

        (data.title + data.snippet).toLowerCase().split(' ').forEach(word => {
           // the first word that shows up in keywords is the category
            let pureWord = word.replace(/[^a-z]/gi, '');
            if(pureWord in keywords){
                category = ({
                        id: 1,
                        name: pureWord,
                        link: '',
                })
            };
    })
    
    return category
}

