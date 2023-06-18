import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category_id, setCategory_id] = useState('');
  const { postId } = useParams();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [data, setData] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getPostsData = async()=>{
        try {
          const response =  await axios.get(`http://127.0.0.1:8000/api/projects/${postId}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCategory_id(response.category_id);
          setData(response.data)
        } catch (error) {
          console.log(error)
        }
    }
    getPostsData();
    getCategories();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/projects/${postId}`, {
        id: postId,
        title: title,
        description: description,
        category_id: category_id,
      });

      setMessage('Project Updated Successfully');
      navigate('/allposts')
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  };

  return (
    <div>
      <div className="mt-14 container max-w-3xl mx-auto bg-white shadow-lg p-4 rounded-lg">
        <div className="text-center p-4 w-full">
          <h1 className="font-bold text-3xl">Edit Post</h1>
        </div>
        {message && (
          <div className="mb-5 flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>{message}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Project Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                value={category_id}
                onChange={(e) => setCategory_id(e.target.value)}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option disabled value="">
                  Choose a category
                </option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Update Post
          </button>
        </form>
      </div>
      {
        console.log(data.title)
      }
    </div>
  );
};

export default EditPost;
