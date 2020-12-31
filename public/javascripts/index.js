
 
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
    // makeLeaf([{kind: "customsearch#result", title: "Mushishi - Wikipedia", htmlTitle: "<b>Mushishi</b> - Wikipedia", link: "https://en.wikipedia.org/wiki/Mushishi", displayLink: "en.wikipedia.org"},
    // {kind: "customsearch#result", title: "Mushishi (Mushi-Shi) - MyAnimeList.net", htmlTitle: "<b>Mushishi</b> (<b>Mushi</b>-<b>Shi</b>) - MyAnimeList.net", link: "https://myanimelist.net/anime/457/Mushishi", displayLink: "myanimelist.net"},
    // {kind: "customsearch#result", title: "Mushi-Shi (TV Series 2005–2006) - IMDb", htmlTitle: "<b>Mushi</b>-<b>Shi</b> (TV Series 2005–2006) - IMDb", link: "https://www.imdb.com/title/tt0807832/", displayLink: "www.imdb.com"},
    // {kind: "customsearch#result", title: "MUSHI-SHI - Watch on Crunchyroll", htmlTitle: "<b>MUSHI</b>-<b>SHI</b> - Watch on Crunchyroll", link: "https://www.crunchyroll.com/mushi-shi", displayLink: "www.crunchyroll.com"},
    // {kind: "customsearch#result", title: "Watch Mushi-shi Streaming Online | Hulu (Free Trial)", htmlTitle: "Watch <b>Mushi</b>-<b>shi</b> Streaming Online | Hulu (Free Trial)", link: "https://www.hulu.com/series/mushi-shi-ccf3a98b-b68b-4778-adf7-772db07b0890", displayLink: "www.hulu.com"},
    // {kind: "customsearch#result", title: "MUSHI-SHI (sequel series) Trailer - YouTube", htmlTitle: "<b>MUSHI</b>-<b>SHI</b> (sequel series) Trailer - YouTube", link: "https://www.youtube.com/watch?v=CXhPRWY1L0E", displayLink: "www.youtube.com"},
    // {kind: "customsearch#result", title: "Mushishi (anime) | Mushishi Wiki | Fandom", htmlTitle: "<b>Mushishi</b> (anime) | <b>Mushishi</b> Wiki | Fandom", link: "https://mushi-shi.fandom.com/wiki/Mushishi_(anime)", displayLink: "mushi-shi.fandom.com"},
    // {kind: "customsearch#result", title: "GR Anime Review: Mushi-Shi", htmlTitle: "GR Anime Review: <b>Mushi</b>-<b>Shi</b>", link: "https://www.youtube.com/watch?v=_PDkqaJLpew", displayLink: "www.youtube.com"},
    // {kind: "customsearch#result", title: "Watch Mushi-Shi Sub & Dub | Action/Adventur"}], 'mushishi')

    makeLeaf([{kind: "customsearch#result", title: "You | Netflix Official Site", htmlTitle: "<b>You</b> | Netflix Official Site", link: "https://www.netflix.com/title/80211991", displayLink: "www.netflix.com",},
    {kind: "customsearch#result", title: "You (TV series) - Wikipedia", htmlTitle: "<b>You</b> (TV series) - Wikipedia", link: "https://en.wikipedia.org/wiki/You_(TV_series)", displayLink: "en.wikipedia.org", },
    {kind: "customsearch#result", title: "YouTube", htmlTitle: "YouTube", link: "https://www.youtube.com/", displayLink: "www.youtube.com", },
    {kind: "customsearch#result", title: "Error Messages | Maps JavaScript API | Google Developers", htmlTitle: "Error Messages | Maps JavaScript API | Google Developers", link: "https://developers.google.com/maps/documentation/javascript/error-messages", displayLink: "developers.google.com", },
    {kind: "customsearch#result", title: "How Google uses information from sites or apps that use our services", htmlTitle: "How Google uses information from sites or apps that use our services", link: "https://policies.google.com/technologies/partner-sites?hl=en-US", displayLink: "policies.google.com", },
    {kind: "customsearch#result", title: "You (TV Series 2018– ) - IMDb", htmlTitle: "<b>You</b> (TV Series 2018– ) - IMDb", link: "https://www.imdb.com/title/tt7335184/", displayLink: "www.imdb.com", },
    {kind: "customsearch#result", title: "Privacy Policy – Privacy & Terms – Google", htmlTitle: "Privacy Policy – Privacy &amp; Terms – Google", link: "https://policies.google.com/privacy?hl=en-US", displayLink: "policies.google.com", },
    {kind: "customsearch#result", title: "Create your Google Account", htmlTitle: "Create your Google Account", link: "https://accounts.google.com/Signup", displayLink: "accounts.google.com", },
    {kind: "customsearch#result", title: "If you forgot your Apple ID password - Apple Support", htmlTitle: "If <b>you</b> forgot your Apple ID password - Apple Support", link: "https://support.apple.com/en-us/HT201487", displayLink: "support.apple.com", },
    {kind: "customsearch#result", title: "YouTube - Apps on Google Play", htmlTitle: "YouTube - Apps on Google Play", link: "https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en_US&gl=US", displayLink: "play.google.com", }]
    , 'you')


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


