
 
async function search(query){
  await fetch(`/api/search?q=${query}`)
       .then(res => {
            if(!res.ok) throw('invalid search')
            
            return res.json()
       })
       .then(data => {   

            makeLeaf(data.items)          
        })
       .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded',() => {
    console.log(search);
    const searchbar = document.getElementById('search');
    
    searchbar.addEventListener("submit", (e) => {
        e.preventDefault()

        let query = document.getElementById('query');
        
        let results = search(query.value);
        console.log(results)
    })

    //

});