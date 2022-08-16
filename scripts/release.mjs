import gp from 'gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

gp.publish(path.resolve(__dirname, '../packages/site/dist'), (err) => {
  if (err) {
  } else {
    console.log('release success');
  }
});
