const travel_service = require('../../../services/travel');

const travel_controller = {
    getAll(req, res) {
        res.json(travel_service.getAll());
    },
    create(req, res) {
        travel_service.create(req, res);
        res.redirect('/'); // Redirect to the homepage after adding a travel post
    },
    update(req, res) {
        const updatedPost = travel_service.update(req.params.id, req.body);
        if (updatedPost) {
            res.redirect('/'); // Redirect to the homepage after updating a travel post
        } else {
            res.status(404).send('Travel post not found');
        }
    },
    delete(req, res) {
        const travelPost = travel_service.getById(req.params.id);
        if (travelPost) {
            travel_service.delete(req.params.id);
            res.status(204).send('Travel post deleted successfully');
        } else {
            res.status(404).send('Travel post not found');
        }
    },
};

module.exports = travel_controller;
