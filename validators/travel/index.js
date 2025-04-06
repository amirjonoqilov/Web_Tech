const { body, param } = require('express-validator');
const travel_service = require('../../services/travel');

const addTravelValidation = () => {
    return [
        body('title')
            .notEmpty().withMessage('Title must not be empty')
            .isLength({ min: 5, max: 255 }).withMessage('Title must be between 5 and 255 characters long'),
        body('location')
            .notEmpty().withMessage('Location must not be empty'),
        body('photos')
            .optional()
            .isArray().withMessage('Photos must be an array'),
        body('experiences')
            .optional()
            .isString().withMessage('Experiences must be a string'),
    ];
};

const updateTravelValidation = () => {
    return [
        param('id').custom(async (id) => {
            const exists = await travel_service.getById(id);
            if (!exists) {
                throw new Error('Travel post not found');
            }
        }),
        body('title')
            .optional()
            .isLength({ min: 5, max: 255 }).withMessage('Title must be between 5 and 255 characters long'),
        body('location')
            .optional(),
        body('photos')
            .optional()
            .isArray().withMessage('Photos must be an array'),
        body('experiences')
            .optional()
            .isString().withMessage('Experiences must be a string'),
    ];
};

const deleteTravelValidation = () => {
    return [
        param('id').custom(async (id) => {
            const exists = await travel_service.getById(id);
            if (!exists) {
                throw new Error('Travel post not found');
            }
        }),
    ];
};

module.exports = {
    addTravelValidation,
    updateTravelValidation,
    deleteTravelValidation,
};