import React, { useState } from 'react';

const AdminPanel = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [posts, setPosts] = useState([]);

    const handleAddPost = (e) => {
        e.preventDefault();
        if (postTitle.trim() && postContent.trim()) {
            const newPost = {
                id: Date.now(),
                title: postTitle,
                content: postContent,
                date: new Date().toISOString().split('T')[0]
            };
            setPosts([newPost, ...posts]);
            setPostTitle('');
            setPostContent('');
            alert('Post added successfully!');
        }
    };

    const handleDeletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        alert('Post deleted!');
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <h1>Admin Panel</h1>
            
            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
                <h2>Add New Post</h2>
                <form onSubmit={handleAddPost}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Post Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                            placeholder="Enter post title"
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="content" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Post Content
                        </label>
                        <textarea
                            id="content"
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            placeholder="Enter post content"
                            rows="6"
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: '#FFD700',
                            color: '#001F3F',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Add Post
                    </button>
                </form>
            </div>

            <div>
                <h2>Posts ({posts.length})</h2>
                {posts.length === 0 ? (
                    <p>No posts yet. Create one!</p>
                ) : (
                    <div>
                        {posts.map(post => (
                            <div key={post.id} style={{ background: '#f0f0f0', padding: '15px', marginBottom: '10px', borderRadius: '4px' }}>
                                <h3>{post.title}</h3>
                                <p style={{ color: '#666' }}>{post.date}</p>
                                <p>{post.content}</p>
                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                    style={{
                                        background: '#d32f2f',
                                        color: 'white',
                                        padding: '8px 16px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;