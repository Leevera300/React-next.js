"use client";
import classes from './image-picker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    // The useState hook is used to create a state variable called pickedImage.
    const [pickedImage, setPickedImage] = useState();
    // The useRef hook is used to create a reference to the file input element.
    const imageInput = useRef();

    function handlePicClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setPickedImage(reader.result);
            // You can also set the image preview here if needed
        }
        reader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image chosen</p>}
                {pickedImage && <Image src={pickedImage} 
                alt="The image selected by the user" 
                fill />}
            </div>
            <input 
            className={classes.input}
            type="file" 
            id={name} 
            accept="image/png, image/jpeg" 
            name={name} 
            ref={imageInput} 
            onChange={handleImageChange} 
            required />
            <button type="button" className={classes.button}
            onClick={handlePicClick} >
                Choose Image
            </button>
        </div>
    </div>
  )
}