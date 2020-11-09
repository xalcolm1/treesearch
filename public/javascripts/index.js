
 
async function search(query){
//   await fetch(`/api/search?q=${query}`)
//        .then(res => {
//             if(!res.ok) throw('invalid search')
            
//             return res.json()
//        })
//        .then(data => {   

//             makeLeaf(data.items, query)          
//         })
//        .catch(err => console.log(err))


       //testers:
    makeLeaf([{kind: "customsearch#result", title: "Mushishi - Wikipedia", htmlTitle: "<b>Mushishi</b> - Wikipedia", link: "https://en.wikipedia.org/wiki/Mushishi", displayLink: "en.wikipedia.org"},
    {kind: "customsearch#result", title: "Mushishi (Mushi-Shi) - MyAnimeList.net", htmlTitle: "<b>Mushishi</b> (<b>Mushi</b>-<b>Shi</b>) - MyAnimeList.net", link: "https://myanimelist.net/anime/457/Mushishi", displayLink: "myanimelist.net"},
    {kind: "customsearch#result", title: "Mushi-Shi (TV Series 2005–2006) - IMDb", htmlTitle: "<b>Mushi</b>-<b>Shi</b> (TV Series 2005–2006) - IMDb", link: "https://www.imdb.com/title/tt0807832/", displayLink: "www.imdb.com"},
    {kind: "customsearch#result", title: "MUSHI-SHI - Watch on Crunchyroll", htmlTitle: "<b>MUSHI</b>-<b>SHI</b> - Watch on Crunchyroll", link: "https://www.crunchyroll.com/mushi-shi", displayLink: "www.crunchyroll.com"},
    {kind: "customsearch#result", title: "Watch Mushi-shi Streaming Online | Hulu (Free Trial)", htmlTitle: "Watch <b>Mushi</b>-<b>shi</b> Streaming Online | Hulu (Free Trial)", link: "https://www.hulu.com/series/mushi-shi-ccf3a98b-b68b-4778-adf7-772db07b0890", displayLink: "www.hulu.com"},
    {kind: "customsearch#result", title: "MUSHI-SHI (sequel series) Trailer - YouTube", htmlTitle: "<b>MUSHI</b>-<b>SHI</b> (sequel series) Trailer - YouTube", link: "https://www.youtube.com/watch?v=CXhPRWY1L0E", displayLink: "www.youtube.com"},
    {kind: "customsearch#result", title: "Mushishi (anime) | Mushishi Wiki | Fandom", htmlTitle: "<b>Mushishi</b> (anime) | <b>Mushishi</b> Wiki | Fandom", link: "https://mushi-shi.fandom.com/wiki/Mushishi_(anime)", displayLink: "mushi-shi.fandom.com"},
    {kind: "customsearch#result", title: "GR Anime Review: Mushi-Shi", htmlTitle: "GR Anime Review: <b>Mushi</b>-<b>Shi</b>", link: "https://www.youtube.com/watch?v=_PDkqaJLpew", displayLink: "www.youtube.com"},
    {kind: "customsearch#result", title: "Watch Mushi-Shi Sub & Dub | Action/Adventur"}], 'mushishi')

}

document.addEventListener('DOMContentLoaded',() => {
    // console.log(search);
    const searchbar = document.getElementById('search');
    
    searchbar.addEventListener("submit", (e) => {
        e.preventDefault()

        let query = document.getElementById('query');
        
        let results = search(query.value);
    })
});