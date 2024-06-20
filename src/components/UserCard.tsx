import React from "react";
import {
  FaTwitter,
  FaBuilding,
  FaMapMarkerAlt,
  FaLink,
  FaGithub,
} from "react-icons/fa";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  twitter_username: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="mt-6 p-8 w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-4">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <img
          className="h-24 w-24 rounded-full"
          src={user.avatar_url}
          alt={`${user.name}'s avatar`}
        />
        <div className="text-center sm:text-left">
          <div className="text-2xl font-medium text-black dark:text-white">
            {user.name}
          </div>
          <p className="text-gray-500 dark:text-gray-400">{user.login}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-gray-500 dark:text-gray-400 flex items-center">
          <FaGithub className="mr-2" /> <strong className="mr-1">Repos:</strong>{" "}
          {user.public_repos}
        </p>
        <p className="text-gray-500 dark:text-gray-400 flex items-center">
          <strong className="mr-1">Followers:</strong> {user.followers}
        </p>
        <p className="text-gray-500 dark:text-gray-400 flex items-center">
          <strong className="mr-1">Following:</strong> {user.following}
        </p>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" />{" "}
          <strong className="mr-1">Location:</strong>{" "}
          {user.location || "Not Available"}
        </p>
        <p className="flex items-center">
          <FaLink className="mr-2" /> <strong className="mr-1">Blog:</strong>{" "}
          {user.blog ? (
            <a
              href={user.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              {user.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </p>
        <p className="flex items-center">
          <FaBuilding className="mr-2" />{" "}
          <strong className="mr-1">Company:</strong>{" "}
          {user.company || "Not Available"}
        </p>
        <p className="flex items-center">
          <FaTwitter className="mr-2" />{" "}
          <strong className="mr-1">Twitter:</strong>{" "}
          {user.twitter_username ? (
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              @{user.twitter_username}
            </a>
          ) : (
            "Not Available"
          )}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
