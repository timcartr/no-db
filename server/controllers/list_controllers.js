require('dotenv').config();
const axios= require('axios')
let lists = []

module.exports = {
    getGames:(req, res) => {
        let { userInput } = req.params
        axios.get(`https://api-endpoint.igdb.com/games/?search=${userInput}&fields=*`, {
        headers: {
        "user-key": "9cbcd24f091eba8b28f4854313a08485"}
        })
        .then( results => {
            // console.log(results.data)
    
            res.status(200).send( results.data )
        })
    },
    getList:(req, res)=>{
        return res.send(lists);
    },
    create:(req, res)=>{
        // Optionally check for required properties on the body object
        let newList = {
            games: req.body.games,
            name: req.query.listName
        }
        lists.push(newList)
        return res.status(200).send('New List Added')
    },
    delete:(req, res)=>{
        if (! lists[req.params.id]){
            return res.status(404).send('No list to delete with that id');
        }
        lists.splice(req.params.id, 1);
        res.status(200).send('List deleted');
    }
}