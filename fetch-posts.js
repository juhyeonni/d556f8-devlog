"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const createNotionDownify_1 = require("./createNotionDownify");
const postlnFile = fs.readFileSync('./postsLink.json', 'utf8');
const postlnJson = JSON.parse(postlnFile);
const ids = postlnJson.links.map((link) => link.id);
const downify = (0, createNotionDownify_1.default)();
function fetchPosts() {
    ids.forEach(async (id) => {
        await downify.dbDownify(id, './content');
    });
}
fetchPosts();
