let _tag = "eula";

const postImportResult = import.meta.glob('./_core/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify((
  posts.map((p) =>  {
      
      if((p.frontmatter.tags.indexOf(_tag) !== -1) ? true : false) {
            return {

                //?     Core
                status: p.frontmatter.status,
                //*     URL
                url: p.url,
                slug: `https://kbve.com${p.url}`,
                //?     Title
                title: p.frontmatter.title,
                description: p.frontmatter.description,
                //?     Content
                content: p.compiledContent(),
                tags: p.frontmatter.tags,
            }
        }
            else  {
                return {
                    status: false
                };
            }
        
    })
  ));
  return {
    body: json
  }
}