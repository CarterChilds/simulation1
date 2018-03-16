

module.exports = {
    getInventory: function (req, res) {
        const database = req.app.get('db');
        database.get_inventory()
        
        .then( inventory => res.status(200).send( inventory ) )
        .catch( () => res.status(500).send() );
        
    }
}