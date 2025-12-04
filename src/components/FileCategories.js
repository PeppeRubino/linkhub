import React from 'react';
import categories from './categories';

const FileCategories = ({ onPreviewFile, onDownloadFile, onLinkClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="
            min-h-full flex flex-col justify-between items-center rounded-xl 
            bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-black/90 
            shadow-xl backdrop-blur-xl border border-white/5
            hover:shadow-slate-900/60 transition-all duration-500
          "
        >
          {/* Titolo categoria */}
          <h2
            className="
              text-md text-center text-white tracking-wide font-semibold 
              w-full px-3 py-2 rounded-t-xl 
              bg-gradient-to-r from-blue-500/30 to-cyan-500/10
              shadow-inner
              hover:from-blue-500/60 hover:to-cyan-500/40 
              transition-all duration-300
            "
          >
            {category.name}
          </h2>

          {/* Lista contenuti */}
          <ul
            className="
              w-full flex-grow flex flex-col gap-2 px-6 py-4
            "
          >
            {category.files.length > 0 ? (
              category.files.map((file, fileIndex) => (
                <li
                  key={fileIndex}
                  className="
                    text-slate-200 text-sm
                    hover:text-cyan-400 cursor-pointer 
                    transition-all duration-300
                  "
                  onClick={() => {
                    if (
                      file.name.startsWith('http://') ||
                      file.name.startsWith('https://')
                    ) {
                      onLinkClick(file.name);
                    } else {
                      onDownloadFile();
                      onPreviewFile(file);
                    }
                  }}
                >
                  {file.explicitname}
                  <span className="select-none text-xs text-slate-500 ml-1">
                    ({file.dateAdded})
                  </span>
                </li>
              ))
            ) : (
              <li className="text-slate-400 text-sm">
                Nessun file disponibile
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FileCategories;
