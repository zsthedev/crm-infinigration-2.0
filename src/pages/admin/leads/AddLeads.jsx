import React, { useCallback } from "react";
import Dropzone from "dropzone";
import { useDropzone } from "react-dropzone";
import "./add-leads.scss";

import { GoUpload } from "react-icons/go";
const AddLeads = () => {
  //   let myDropzone = new Dropzone("");
  //   myDropzone.on("addedfile", (file) => {
  //     console.log(`File added: ${file.name}`);
  //   });

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <section id="add-leads" className="section">
      <div className="row">
        <form action="">
          <input type="text" placeholder="Client Name" />
          <input type="text" placeholder="Client Phone" />
          <input type="text" placeholder="Client Email" />
          <input type="text" placeholder="Program Selected" />
          <input type="text" placeholder="Source" />
          <button className="primary-btn">Submit</button>
        </form>
        <div className="upload-file">
          <div {...getRootProps()}>
            <GoUpload />
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag and drop excel file here, or click to select files</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddLeads;
