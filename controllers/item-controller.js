const Item = require('../model/Item')


module.exports.AddItem = (req, res) => {
    const item = new Item()
    item.name = req.body.name;
    item.date = req.body.date;
    item.save()
        .then(r => {
            res.send('OK')
        })
        .catch(err => {
                res.send('Not OK')
            }
        )
}

module.exports.Items = (req, res) => {
    Item.find()
        .then(items => res.send(items))
        .catch(err => res.send([]))
}
