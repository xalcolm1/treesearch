

// the goal of this funtion is to condense a string of any length into one word
// the word should be meaning full and descriptive
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
            'and',
            'were',
            'with',
            'to',
            'the',
            'of',
            'on',
            'one',
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


// other ideas: 
// take  the title string/ remove filler 