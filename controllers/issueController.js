const db = require('mongoose');
const Issue = require('../models/customerIssue');


exports.createIssue = (req, res) => {

    const issue = new Issue(
        {
            _id:            new db.Types.ObjectId,
            customeremail:  req.body.customeremail,
            createdby:      req.body.createdby,
            title:          req.body.title,
            description:    req.body.description,
            status:         req.body.status
        }
    )

    issue.save()
    
        .then(() => {
            res.status(201).json({
                payload: issue,
                message: 'Issue was created successfully'
            })
        })

        .catch((error) => {
            res.status(500).json({
                message: 'Unable to create issue',
                error: error
            })
        })

}

exports.getIssues = (req, res) => {
    Issue.find()
    .then(data => res.status(200).json(data));
}

exports.getIssueById = (req, res) => {
    Issue.findOne({ _id: req.params.id }).then(data => res.status(200).json(data));
}

exports.getIssuesByEmail = (req, res) => {
    Issue.find({ customeremail: req.params.email })
    .then(data => res.status(200).json(data));
}

exports.deleteIssuesById = (req, res) => {
    Issue.deleteOne({ _id: req.params.id })
            .then(() => {
            res.status(200).json({
                message: 'Issue was deleted'
            })})

}