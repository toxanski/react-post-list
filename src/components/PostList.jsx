import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                (<PostItem key={post.id} post={post} number={index + 1} remove={remove}/>)
            )}
        </div>
    );
};

export default PostList;