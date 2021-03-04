const path = require('path');
const util = require('util');
const fromUnixTime = require('date-fns/fromUnixTime');
const format = require('date-fns/format');
const { getEditUrl, addLeadingSlash } = require('@docusaurus/utils');
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const exec = util.promisify(require('child_process').exec);

const fileToPath = (str) => {
  return addLeadingSlash(str.replace('.mdx', ''));
};

const getGithubUserData = async (username) => {
  try {
    const { data } = await octokit.users.getByUsername({ username });

  const {
    avatar_url: avatarUrl,
    html_url: githubUrl,
    blog: websiteUrl,
    bio,
    name,
    twitter_username: twitterUsername,
  } = data;

  return {
    login: username,
    avatarUrl,
    githubUrl,
    websiteUrl,
    bio,
    name,
    twitterUsername,
  };
  } catch (err) {
    console.error(err)
  }
};

/**
 * Format the last edited timestamp and author from
 * get output
 */
const getTimestampAndAuthor = (str) => {
  if (!str) return null;

  
  const GIT_COMMIT_TIMESTAMP_AUTHOR_REGEX = /^(\d+), (.+)$/;
  
  const temp = str.match(GIT_COMMIT_TIMESTAMP_AUTHOR_REGEX);
  if (!temp || temp.length < 3) return null;
  
  const [, timestamp, author] = temp;
  const dateStr = fromUnixTime(+timestamp);

  return {
    date: format(dateStr, 'MMMM dd, yyyy'),
    author,
  };
};


/**
 * Gets the last edited timestamp and author from git
 * using `git log`
 *
 * %an = author name
 * %ct = committer date, UNIX timestamp
 */
const getLastEdited = async (filePath) => {
  try {
    const {stdout} = await exec(`git log -1 --format="%ct, %an" --follow ${filePath}`)
    return getTimestampAndAuthor(stdout.trim());
  } catch (er) {
    console.error(er)
  }
};

const getDateCreated = async (filePath) => {
  try {
    const {stdout} = await exec(`git log --reverse --format="%ct, %an" --follow ${filePath} | head -n 1`)
    
    return getTimestampAndAuthor(stdout.trim());
  } catch (er) {
    console.error(er)
  }
};


const processFrontMatter = async (options) => {
  const { path: mdxPath, author, tags, baseEditUrl, ...rest } = options;

  // read the file path
  const filePath = path.join(process.cwd(), 'pages', mdxPath);
  
  // Get the last edited author and date
  const lastEdited = (await getLastEdited(filePath)) || null;

  // Get the edit url
  const editUrl = getEditUrl(path.join(mdxPath), baseEditUrl);

  // Get the slug
  const slug = fileToPath(mdxPath);

  // If frontMatter includes author, add the authors data
  const authorData = author ? await getGithubUserData(author) : lastEdited.author;


  return {
    ...rest,
    slug,
    lastEdited,
    editUrl,
    author: authorData,
    tags,
  };
};

module.exports = {
  getTimestampAndAuthor,
  fileToPath,
  getLastEdited,
  processFrontMatter,
  getGithubUserData,
  getDateCreated,
};
