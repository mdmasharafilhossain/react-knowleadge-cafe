
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3">
          <h2 className="text-3xl">BookMarks :{bookMarks.length}</h2>
          {
            bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }  
        </div>
    );
};

export default Bookmarks;