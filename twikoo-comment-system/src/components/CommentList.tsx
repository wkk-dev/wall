import React from 'react';
import { Comment } from '../types';

interface CommentListProps {
  comments: Comment[];
  loading: boolean;
}

const CommentList: React.FC<CommentListProps> = ({ comments, loading }) => {
  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="mt-4">
      {comments.length === 0 ? (
        <p className="text-gray-500">没有评论</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 py-4">
            <h3 className="font-semibold">{comment.author}</h3>
            <p className="text-gray-700">{comment.content}</p>
            <span className="text-gray-500 text-sm">{new Date(comment.timestamp).toLocaleString()}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;