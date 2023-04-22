import * as fs from 'fs';
import createNotionDownify from './createNotionDownify';

interface PostLinks {
  links: {
    name: string;
    id: string;
  }[];
}

const postlnFile = fs.readFileSync('./postsLink.json', 'utf8');
const postlnJson: PostLinks = JSON.parse(postlnFile);

const ids = postlnJson.links.map((link) => link.id);

const downify = createNotionDownify();

function fetchPosts() {
  ids.forEach(async (id) => {
    await downify.dbDownify(id, './content');
  })
}

fetchPosts();


