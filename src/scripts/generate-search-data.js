const path = require('path');
const fs = require('fs')
const shell = require('shelljs')
const { parseMarkdownFile } = require('@docusaurus/utils')


const loadMDXFromPages = async (mdxDir = 'blog') => {
  console.log(">>>>>>> Building Search Metadata <<<<<<<<")
  const dir = path.join(process.cwd(), 'pages', mdxDir);
  const filenames = shell.ls('-R', `${dir}/**/*.mdx`);

  const dataPromise = filenames.map(async file => {
    const {frontMatter} = await parseMarkdownFile(file)

    return {
      title: frontMatter.title,
      description: frontMatter.description,
      tags: frontMatter.tags,
      url: '/' + file.replace(dir, mdxDir).replace(/\.mdx$/, '')
    }
  })

  const data = await Promise.all(dataPromise);
    
  fs.writeFileSync(path.join(process.cwd(), 'configs', 'search-metadata.json'), JSON.stringify(data, null, 2), {encoding: 'utf8'})
  console.log(">>>>>>> DONE <<<<<<<<")
};

loadMDXFromPages()