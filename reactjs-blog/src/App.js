import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react";
import {format} from "date-fns";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "First",
            dateTime: "July 01, 2021 11:17:36 AM",
            body: "Here is the first post"
        },
        {
            id: 2,
            title: "Second",
            dateTime: "July 02, 2021 10:20:41 AM",
            body: "Here is the second post"
        },
        {
            id: 3,
            title: "Third",
            dateTime: "August 20, 2021 06:17:36 AM",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula elementum neque, efficitur dictum dolor efficitur et. Donec iaculis tristique nibh, eu vestibulum elit pellentesque eu. Curabitur sem tortor, sollicitudin eget rhoncus et, hendrerit eu leo. Suspendisse potenti. In condimentum vehicula augue, eu malesuada massa blandit eget. Curabitur ac mi neque. Sed erat urna, aliquam nec lacinia ut, rutrum vitae metus. Praesent quis lectus feugiat, convallis nibh eget, placerat arcu. Ut lectus lectus, cursus laoreet dui venenatis, feugiat egestas justo. Nam lectus ipsum, viverra eu sagittis vitae, hendrerit et tortor. Fusce sodales tempus faucibus. Nunc urna urna, fringilla et mollis vitae, sollicitudin vel nulla. Ut porttitor consectetur neque eu elementum."
        }
    ]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {
            id: id,
            dateTime: dateTime,
            title: postTitle,
            body: postBody
        };
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
    }

    const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
        navigate('/');
    }

    return (
        <div className="App">
            <Header title="React JS Blog"/>
            <Nav search={search} setSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<Home posts={posts}/>}/>
                <Route exact path="/post"
                       element={<NewPost
                           handleSubmit={handleSubmit}
                           postTitle={postTitle}
                           setPostTitle={setPostTitle}
                           postBody={postBody}
                           setPostBody={setPostBody}
                       />}
                />
                <Route exact path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Missing/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
