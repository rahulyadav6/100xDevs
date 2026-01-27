import React, { useEffect, useState } from "react";

const GithubProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "rahulyadav6";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
        <img
          src={user.avatar_url}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
        <p className="text-gray-600 text-sm mt-1">{user.bio}</p>

        <div className="flex justify-around mt-4 text-sm">
          <div>
            <p className="font-bold">{user.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <p className="font-bold">{user.public_repos}</p>
            <p className="text-gray-500">Repos</p>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default GithubProfile;
