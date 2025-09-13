import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import LoadingAnimation from './components/LoadingAnimation';
import './styles/tailwind.css';

const App = () => {
    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate fetching comments from an API
        setTimeout(() => {
            setComments([
                { id: 1, author: 'User1', content: 'This is a comment.', timestamp: new Date().toISOString() },
                { id: 2, author: 'User2', content: 'This is another comment.', timestamp: new Date().toISOString() },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    const handleNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Comments</h1>
            {loading ? <LoadingAnimation /> : <CommentList comments={comments} />}
            <CommentForm onNewComment={handleNewComment} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));