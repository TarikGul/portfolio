import React, { useState, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/blog_form.scss';

const BlogForm = (props) => {
    const params = useParams();

    const [ownerId, setOwnerId] = useState(props.session.user.id);
    const [pictureFiles, setPictureFiles] = useState(null);
    const [success, setSuccess] = useState(false);

    const [filterInput, setFilterInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            title: '',
            quote: '',
            authorQuote: '',
            description: '',
            blogType: '',
            imageFile: null,
            imageFileName: null
        }
    );

    // The backend is setup with the ability to connect to AWS and store picture 
    // in mongo and the cloud. But i need to setup the functionality in the frontend

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setFilterInput({ [name]: value });
    };

    const handleFile = (e) => {
        const f = e.currentTarget.files[0]

        setFilterInput({ imageFile: f, imageFileName: f.name });
    }

    const handleSubmit = () => {

        const { createBlog } = props;
        const { 
            description, 
            title, 
            quote, 
            authorQuote, 
            imageFile, 
            imageFileName, 
            blogType 
        } = filterInput;

        if (title.length === 0 || description.length === 0) {
            return null
        } 

        const formData = new FormData()

        formData.set('title', title);
        formData.set('description', description);
        formData.set('authorQuote', authorQuote);
        formData.set('quote', quote);
        formData.set('blogType', blogType);
        formData.append('imageFile', imageFile, imageFileName)

        createBlog(formData)
            .then (() => {
                setSuccess(true);
                setFilterInput({
                    description: '',
                    title: '',
                    quote: '',
                    authorQuote: '',
                    imageFile: null,
                    imageFileName: null
                })
            })
                .then(() => {
                    setTimeout(() => {
                        setSuccess(false)
                    }, 5000)
                });
    };

    useEffect(() => {
        // Adds the current param we are at to the blogType so that we can
        // organize on better in the DB.
        const { blogType } = params;

        setFilterInput({ blogType });
    }, [])

    return (
        <div className='blog-form-container'>
            <div className='welcome-back-tarik'>
                Welcome back Tarik! Remember, the only way out is forward! <br />
                    Keep chugging along bud, I know you got this. <br />
                    One Love -Leafy
                </div>
            <div className='blog-form-inner-container'>
                <form onSubmit={() => handleSubmit()} className='blog-form'>
                    <p>Blog Cover Photo</p>
                    <input type='file'
                            accept='image/png, image/jpeg'
                            onChange={(e) => handleFile(e)}
                            className='upload-file-input'/>
                    <label>
                        <input
                            type='text'
                            name='title'
                            className='blog-form-title'
                            placeholder='Title'
                            value={filterInput.title}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='quote'
                            className='blog-form-quote'
                            placeholder='Quote'
                            value={filterInput.quote}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='authorQuote'
                            className='blog-form-authorQuote'
                            placeholder='Author Quote'
                            value={filterInput.authorQuote}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <label>
                        <textarea
                            type='text'
                            name='description'
                            className='blog-form-description'
                            placeholder='Description'
                            value={filterInput.description}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <div className='submit-container'>
                        <button className='submit-button' type='submit'>
                            Submit
                        </button>
                    </div>
                    {
                        success ?
                            (
                                <div className='posted-blog-post'>
                                    Posted
                                </div>
                            ) : (
                                null
                            )
                    }
                </form>
            </div>
        </div>
    )
}

export default BlogForm;