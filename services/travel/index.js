const fs = require('fs');

// Access global mock db file
const travelPosts = require(global.mock_db);

// Write service method implementations
const travel_service = {
    getAll() {
        return travelPosts;
    },
    getById(id) {
        return travelPosts.find(post => post.id == id);
    },
    create(req, res) {
        let new_id = genRandId(6);

        const { title, location, photos, experiences } = req.body;

        const new_post = {
            id: new_id,
            title,
            location,
            photos: photos || [],
            experiences: experiences || '',
        };

        travelPosts.push(new_post);

        writeToFile(travelPosts);

        return new_post;
    },
    update(id, updateData) {
        const postIndex = travelPosts.findIndex(post => post.id == id);

        if (postIndex === -1) {
            return null;
        }

        travelPosts[postIndex] = { ...travelPosts[postIndex], ...updateData };

        writeToFile(travelPosts);

        return travelPosts[postIndex];
    },
    delete(id) {
        const index = travelPosts.findIndex(post => post.id == id);
        if (index === -1) {
            return null;
        }
        travelPosts.splice(index, 1);
        writeToFile(travelPosts);
    },
};

// Create function for overwriting the db file with updated content
let writeToFile = async (data) => {
    await fs.writeFileSync(
        global.mock_db,
        JSON.stringify(data, null, 4),
        'utf8'
    );
};

// Generate random id inspired by uuid
let genRandId = (count) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

module.exports = travel_service;