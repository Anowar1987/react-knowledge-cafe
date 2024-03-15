import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddBookmark}) => {
    const {title, cover_img, author_img, reading_time, author, posted_date, hashtag} = blog;
    return (
        <div>
            <img className='w-full mb-10' src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6 mb-8'>
                <div>
                    <img className='w-14 rounded' src={author_img} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <p className='text-base font-semibold text-[#11111199]'>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span className='text-xl font-medium text-[#11111199]'>{reading_time} min read</span>
                    <button
                    onClick={() => handleAddBookmark(blog)} 
                    className='ml-3 text-2xl text-red-500'>
                        <FaRegBookmark></FaRegBookmark></button>
                </div>
                </div>
            <h2 className="text-4xl mb-10 font-bold">{title}</h2>
            <div className='flex gap-5 font-medium text-xl text-[#11111199] mb-8'>
                <p>{hashtag}</p>
                <p>{hashtag}</p>
            </div>
            </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}
export default Blog;