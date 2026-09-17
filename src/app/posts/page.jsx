import React from 'react';

const getPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}

const PostsPage = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

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