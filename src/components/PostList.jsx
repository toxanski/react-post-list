import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (<h1>Посты не найдены</h1>)
    }

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