"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@notionhq/client");
const notion_markdownify_1 = require("notion-markdownify");
const dotenv = require("dotenv");
dotenv.config();
const { NOTION_API_KEY = '', DATABASE_ID = '', CONTENT_LOCATION = '' } = process.env;
function createNotionDownify() {
    // A NOTION_API_KEY is required to create a Client object.
    const notion = new client_1.Client({ auth: NOTION_API_KEY });
    const downify = new notion_markdownify_1.NotionDownify({ notionClient: notion });
    return downify;
}
exports.default = createNotionDownify;
