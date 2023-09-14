
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, BookMarkAddButton}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 mt-10'>

            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between mt-8'>

                <div className='flex'>
                 <img className='w-14' src={author_img} alt="" />
                 <div className='ml-6 '>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                 </div>
                </div>
                
        

                <div>
                  <span>{reading_time} min read</span>
                  <button onClick={() => BookMarkAddButton(blog)} className='ml-3 text-red-400 text-2xl'><FaBookmark></FaBookmark></button>


                </div>


            </div>
            <h2 className="text-4xl mt-5">{title}</h2>
            <p className='mt-5'>
               {
                     hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                
               }


            </p>
        </div>
    );
};
Blog.propTypes ={
   blog : PropTypes.object.isRequired
   
}
export default Blog;