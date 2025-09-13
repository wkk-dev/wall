import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit({ author, content });
        setAuthor('');
        setContent('');
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Your Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <textarea
                placeholder="Your Comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <button
                type="submit"
                className={`p-2 text-white rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                disabled={loading}
            >
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default CommentForm;