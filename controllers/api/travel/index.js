const travel_service = require('../../../services/travel');

const travel_controller = {
    getAll(req, res) {
        res.json(travel_service.getAll());
    },
    create(req, res) {
        res.status(201).json(travel_service.create(req, res));
    },
    update(req, res) {
        const updatedPost = travel_service.update(req.params.id, req.body);
        if (updatedPost) {
            res.json(updatedPost);
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
