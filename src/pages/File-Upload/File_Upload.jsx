import React from 'react'
import './File_Upload.css'

const File_Upload = () => {

      const imptFile = document.getElementById("imptFile");
      const previewContainer = document.getElementById("imagePreview");
      const previewImage = previewContainer.querySelector(
        "image-preview__image"
      );
      const previewDefaultText =
        previewContainer.querySelector("image-deafult-text");

      imptFile.addEventListener("change", function () {
        const File = this.files[0];

        if (File) {
          const reader = new FileReader();

          previewDefaultText.style.display = "none";
          previewImage.style.display = "block";

          reader.addEventListener("load", function () {
            console.log(this);
            previewImage.setAttribute("src", this.result);
          });

          reader.readAsDataURL(File);
        } else {
          previewDefaultText.style.display = "null";
          previewImage.style.display = "null";
          previewImage.setAttribute("src", " ");
        }
      });
      
  return (
    <>
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form>
      <label for="File name">File Name</label>
      <input type="file" name="Import File" id="imptFile" />
      <div class="image-preview" id="image-preview">
        <img src="" alt="Preview" class="image-preview__image" />
        <span class="image-preview__default-text">Image Preview</span>
      </div>

      <button>Upload</button>
      <div class="social">
        <button class="button button--flex">
          Save
          <i class="ri-arrow-right-up-line button__icon"></i>
        </button>
      </div>
      </form> 
    </>
  )
}

export default File_Upload