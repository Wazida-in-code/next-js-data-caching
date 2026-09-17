import React from 'react';

//option-2-data-fetching
const getPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}

//option-1-data-fetching
const PostsPage = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

//option-3-data-fetching
const getPost2 = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json()
    }
    catch(error){
        throw new Error("Failed to load data!")
    }
}

//option-4-data-fetching
const getPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!res.ok){
        throw new Error("Failed to load data!")
    }
}


    const posts = await getPost();
    console.log(posts);

    return (
        <div>
            <h2>Hello Posts</h2>
            <h3>Posts: {posts.length}</h3>
        </div>
    );
};

export default PostsPage;