const travel_service = require('../../../services/travel');

const home_controller = {
    index: async (req, res) => {
        res.render('home');
    },
    add: async (req, res) => {
        res.render('home/add_update', { mode: 'Add' });
    },
    update: async (req, res) => {
        const travelPost = await travel_service.getById(req.params.id);
        res.render('home/add_update', { mode: 'Update', travelPost: travelPost });
    }
};

module.exports = home_controller;
