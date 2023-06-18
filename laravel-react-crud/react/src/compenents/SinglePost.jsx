import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const SinglePost = () => {
  const { id } = useParams();

  const [singlePost, setSinglePost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${id}`)
      .then(response => setSinglePost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!singlePost) {
    return (
      <div role="status">
        {/* ... */}
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      if (!window.confirm('Are you sure you want to delete this post?')) {
        return;
      }
      await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`);
      navigate('/allposts');
    } catch (error) {
      console.error(error);
    }
  };

  const { category, title, description, image, created_at } = singlePost;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={`http://127.0.0.1:8000/images/${image}`} alt="" />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-blue-500 uppercase">{category.name}</p>

            <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
              {title}
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {description}
            </p>

            <p className="mt-3 text-sm text-blue-500 dark:text-gray-300 md:text-sm">
              {moment(created_at).fromNow()}
            </p>

            <div className="flex flex-items-center mt-4">
              <Link to="edit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </Link>

              <button onClick={handleDelete} type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ms-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
