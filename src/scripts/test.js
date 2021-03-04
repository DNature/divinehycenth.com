const util = require('util');

const exec = util.promisify(require('child_process').exec);
async function f(path){
  const {stdout} = await exec(`git log --reverse --format="%ct, %an" --follow ${path} | head -n 1`)

  return stdout
}

const ans = f("/home/divine/Documents/projects/blog/divinehycenth/pages/blog/file-uploads-with-apolloserver-2.mdx")
console.log({ans})