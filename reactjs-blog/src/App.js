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
import api from './api/posts';
import EditPost from "./EditPost";
import useWindowsSize from "./hooks/useWindowsSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import {DataProvider} from "./context/DataContext";

function App() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const {width} = useWindowsSize();
    const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => setPosts(data), [data]);

    useEffect(() => {
        const filteredResults = posts.filter(post =>
            (post.body.toLowerCase().includes(search.toLowerCase()))
            || (post.title.toLowerCase().includes(search.toLowerCase()))
        )
        setSearchResults(filteredResults.reverse());
    }, [posts, search])

    return (
        <div className="App">
            <DataProvider>
                <Header title="React JS Blog"/>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route exact path="/post" element={<NewPost/>}/>
                    <Route path="/edit/:id" element={<EditPost/>}/>
                    <Route exact path="/post/:id" element={<PostPage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Missing/>}/>
                </Routes>
                <Footer/>
            </DataProvider>
        </div>
    );
}

export default App;
