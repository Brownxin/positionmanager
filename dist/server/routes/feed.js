"use strict";
const express_1 = require('express');
const uuid = require('node-uuid');
const feedRouter = express_1.Router();
exports.feedRouter = feedRouter;
feedRouter.post('/', (request, response) => {
    response.json({
        id: uuid.v4(),
        text: request.body.text,
        name: request.body.name
    });
});
feedRouter.delete('/:id', (request, response) => {
    response.json({
        id: request.params.id
    });
});
//# sourceMappingURL=/Users/Brown/Projects/positionmanager/dist/server/routes/feed.js.map