'use client';
import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);

  }
  function handlePickClick() {
    imageInput.current.click();
  }
  return <div className={classes.picker}>
    <label htmlFor={name}>{ label }</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>No image picked yet</p>}
        {pickedImage && <Image src={pickedImage} alt="The image picked by the user" fill></Image>}
      </div>
      <input 
        ref={imageInput} 
        type="file"
        id={name} 
        accept="image/png, image/jpeg" 
        name={name} 
        className={classes.input} 
        required
        onChange={handleImageChange}
      />
      <button type="button" className={classes.button} onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  </div>
}