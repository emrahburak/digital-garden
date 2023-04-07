import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(),'posts')

export function getSortedPostsData(){
 // Get file names under /posts
 const fileNames = fs.readdirSync(postsDirectory);
 const allPostData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id

    const id = fileName.replace(/\.md$/,'');

    // read markdown file as string

    const fullPath = path.join(postsDirectory,fileName);

    const fileContents = fs.readFileSync(fullPath,'utf-8');

    // use gray-matter  to parse the post meta data section

    const matterResult = matter(fileContents);

    // Combine  the data with the id 
    return {
        id,
        ...matterResult.data,
    };
 });


 return allPostData.sort((a,b) => {
    if(a.date < b.date) {
        return 1;
    }else {
        return -1;
    }
 });

}