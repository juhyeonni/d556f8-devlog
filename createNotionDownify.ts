import { Client } from '@notionhq/client';
import { NotionDownify } from 'notion-markdownify';
import * as dotenv from 'dotenv';
dotenv.config();

const {
  NOTION_API_KEY = '',
  DATABASE_ID = '',
  CONTENT_LOCATION = ''
} = process.env;

function createNotionDownify() {
  // A NOTION_API_KEY is required to create a Client object.
  const notion = new Client({ auth: NOTION_API_KEY });

  const downify = new NotionDownify({ notionClient: notion });

  return downify;
}

export default createNotionDownify;