import './styles/App.css'
import PostList from "./components/PostList";
import {useMemo, useState} from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Дядя Богдан', body: 'Механик'},
        {id: 2, title: 'Алексей', body: 'Пилот'},
        {id: 3, title: 'Владимир', body: 'Разработчик'},
        {id: 4, title: 'John', body: 'Builder'},
        {id: 5, title: 'Юлий', body: 'Майор'},
        {id: 6, title: 'Светлана', body: 'Садовод'},
    ]);

    const [filter, setFilter] = useState({selectedSort: '', searchQuery: ''});

    const sortedPosts = useMemo(() => {
            console.log('Функция sortedPosts сработала');
            if (filter.selectedSort) {
                return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
            } else {
                return posts;
            }
        }, [filter.selectedSort, posts]);

    const sortedAndSearchingPosts = useMemo(() => {
        console.log('Функция sortedAndSearchingPosts сработала');
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()));

    }, [filter.searchQuery, sortedPosts])


    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(removePost) {
        setPosts([ ...posts.filter(post => post.id !== removePost.id)]);
    }

    return (
    <div className="App">
        <PostForm create={createPost}/>

        <hr style={{margin: '6px 0 16px 0', height: '2px', background: 'teal'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>

        <PostList posts={sortedAndSearchingPosts} title={'Post List'} remove={removePost}/>
    </div>
  );
}

export default App;
