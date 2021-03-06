import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Haaaai!!!', likesCount: 12},
        {id: 2, message: 'Its my first post!', likesCount: 443}
    ]

    let postsElements = posts
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>
        )

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;

