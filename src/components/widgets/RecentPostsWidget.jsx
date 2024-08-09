import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import SingleRecentPost from './SingleRecentPost';

const RecentPostsWidget = () => {
    return (
        <>
            <div className="sidebar-item recent-post">
                <h4 className="title">Recent Post</h4>
                <ul>
                    {blogData.slice(0, 3).map(blog =>
                        <SingleRecentPost blog={blog} key={blog.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default RecentPostsWidget;