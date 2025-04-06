const fs = require('fs');
const travelPosts = require(global.mock_db);

const travel_service = {
    getAll() {
        return travelPosts;
    },
    getById(id) {
        return travelPosts.find(post => post.id === id);
    },
    create(req, res) {
        const { title, location, photos, experiences } = req.body;
        const newPost = {
            id: generateId(),
            title,
            location,
            photos: photos ? photos.split(',').map(photo => photo.trim()) : [],
            experiences,
        };
        travelPosts.push(newPost);
        saveToDatabase(travelPosts);
        return newPost;
    },
    update(id, updateData) {
        const postIndex = travelPosts.findIndex(post => post.id === id);
        if (postIndex === -1) {
            return null;
        }
        travelPosts[postIndex] = {
            ...travelPosts[postIndex],
            ...updateData,
            photos: updateData.photos ? updateData.photos.split(',').map(photo => photo.trim()) : travelPosts[postIndex].photos,
        };
        saveToDatabase(travelPosts);
        return travelPosts[postIndex];
    },
    delete(id) {
        const postIndex = travelPosts.findIndex(post => post.id === id);
        if (postIndex === -1) {
            return null;
        }
        travelPosts.splice(postIndex, 1);
        saveToDatabase(travelPosts);
    },
};

function saveToDatabase(data) {
    fs.writeFileSync(global.mock_db, JSON.stringify(data, null, 4), 'utf8');
}

function generateId() {
    return Math.random().toString(36).substr(2, 6);
}

module.exports = travel_service;