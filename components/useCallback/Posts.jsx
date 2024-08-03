import React, { useCallback, useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
//   console.log("🚀 ~ Posts ~ posts:", posts)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
      );
      const data = await response.json();
      setLoading(false);
      setPosts(data);
    } catch (error) {
      setError(error?.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      {posts?.length > 0 &&
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => <p key={post.id} className="p-3 border shadow">{post.body}</p>)}
            </div>}

      {posts?.length === 0 && <p>No posts found</p>}
    </div>
  );
};

export default React.memo(Posts); //Posts;
