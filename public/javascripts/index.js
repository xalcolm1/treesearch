
//  async function search(query){
//   await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`,{
//        method: 'GET', 
//        mode: 'cors'
//       })
//          .then(res => {
//               if(!res.ok) throw('invalid search')
//               return res.json()})
//          .then(data => {
             
//               newLeaf(data.items)
            
//          })
//          .catch(err => console.log(err))
//     }


 
async function search(query){
  await fetch(`/api/search?q=${query}`)
       .then(res => {
            if(!res.ok) throw('invalid search')
            console.log(res)
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