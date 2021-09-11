import './styles/App.css'
import PostList from "./components/PostList";
import {useRef, useState} from "react";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(removePost) {
        setPosts([ ...posts.filter(post => post.id !== removePost.id)]);
    }

    return (
    <div className="App">
        <PostForm create={createPost}/>

        {posts.length !== 0
            ? <PostList posts={posts} title={'Список JS'} remove={removePost}/>
            : <h1 className='posts-undefined'>Посты не найдены =(</h1>
        }
    </div>
  );
}

export default App;
