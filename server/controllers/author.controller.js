const Author = require("../models/author.model")

module.exports.testApi = (req, res) => {
    
    res.json({status: "ok"})
}

module.exports.allAuthors = (req, res) => {
    Author.find()
    .then(authorsList => res.json(authorsList))
    .catch(err => res.status(400).json(err))
}

module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneAuth => res.json(oneAuth))
    .catch(err => res.status(400).json(err))
}

module.exports.addAuthor = (req, res) => {
    Author.create(req.body)
    .then(createdAuthor => res.json(createdAuthor))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedAuth => res.json(updatedAuth))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(deletedAuthor => res.json(deletedAuthor))
    .catch(err => res.status(400).json(err))
}