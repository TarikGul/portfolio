import axios from 'axios';

export const createBlog = (blogData) => {
    const blogHeaders = {
        'Content-Type': `multipart/form-data boundary=${blogData._boundary}`,
    }
    return axios.post('/api/blogs/blog', blogData, { headers: blogHeaders })
};

export const getBlogs = () => {
    return axios.get('/api/blogs')
};

export const getTypeBlogs = (type) => {
    return axios.get(`/api/blogs/${type}`)
}
