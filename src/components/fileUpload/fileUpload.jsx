import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropFileUpload = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const droppedFile = acceptedFiles[0];
    setFile(droppedFile);
    setFilePreview(URL.createObjectURL(droppedFile));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-3/4">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full"
        onSubmit={handleSubmit}
      >
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 cursor-pointer focus:outline-none ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Пусни снимката тук ...</p>
          ) : (
            <p className="text-gray-500">
              Премести изображението тук или кликни за да избереш.
            </p>
          )}
        </div>
        {file && (
          <div className="mt-4">
            {filePreview && (
              <div className="mt-4">
                <img
                  src={filePreview}
                  alt="Preview"
                  className="max-w-full h-auto"
                />
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default DragAndDropFileUpload;
