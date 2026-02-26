// import { useState } from "react";
// import blogData from "./blogData";
// import BlogModal from "./BlogModal";

// import CachedImage from "../CachedImage";

// const PflegeBlog = () => {
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const handleOpenModal = (blog) => {
//     setSelectedBlog(blog);
//   };

//   const handleCloseModal = () => {
//     setSelectedBlog(null);
//   };

//   // Utility function to strip HTML tags from a string
//   const stripHtmlTags = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.textContent || div.innerText || "";
//   };

//   return (
//     <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
//       {/* Header Section */}
//       <div className="space-y-6">
//         <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
//           Sernitas Blog & Gesundheitsbulletins
//         </h2>
//         <p className="text-primary/90 text-justify">
//           In unserem Blog berichten wir regelmäßig über relevante Entwicklungen
//           in der Pflegebranche, teilen Erfahrungen aus unserer Arbeitspraxis und
//           geben hilfreiche Ratgeber zu aktuellen Themen. Wir verstehen Pflege
//           als gesellschaftliche Aufgabe – mit Verantwortung, Kompetenz und
//           Menschlichkeit.
//         </p>
//       </div>

//       {/* Blog Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
//         {blogData.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300 cursor-pointer"
//             onClick={() => handleOpenModal(blog)}
//           >
//             <CachedImage
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
//                 <i className="far fa-calendar-alt text-gray-500"></i>{" "}
//                 {blog.date}
//               </p>
//               <h3 className="text-lg font-bold text-primary/90 mb-2">
//                 {blog.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {stripHtmlTags(blog.description).slice(0, 100)}...
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Blog Modal */}
//       {selectedBlog && (
//         <BlogModal
//           isOpen={!!selectedBlog}
//           onClose={handleCloseModal}
//           blogData={selectedBlog}
//         />
//       )}
//     </div>
//   );
// };

// export default PflegeBlog;

/** PflegeBlog: List of blog posts from blogData; each links to /pflege-blog/:id (BlogPage). */
import blogData from "./blogData";
import CachedImage from "../CachedImage";

const PflegeBlog = () => {
  // Utility function to strip HTML tags from a string
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Header Section */}
      <div className="space-y-6">
        <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Sernitas Blog & Gesundheitsbulletins
        </h2>
        <p className="text-primary/90 text-justify">
          In unserem Blog berichten wir regelmäßig über relevante Entwicklungen
          in der Pflegebranche, teilen Erfahrungen aus unserer Arbeitspraxis und
          geben hilfreiche Ratgeber zu aktuellen Themen. Wir verstehen Pflege
          als gesellschaftliche Aufgabe – mit Verantwortung, Kompetenz und
          Menschlichkeit.
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
        {blogData.map((blog) => (
          <a
            key={blog.id}
            href={`/pflege-blog/${blog.id}`}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300 cursor-pointer"
          >
            <CachedImage
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                <i className="far fa-calendar-alt text-gray-500"></i>{" "}
                {blog.date}
              </p>
              <h3 className="text-lg font-bold text-primary/90 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stripHtmlTags(blog.description).slice(0, 100)}...
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PflegeBlog;
