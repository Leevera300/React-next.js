"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function ShareMeal(prevState, formData) {

  function isInvalidText(text) {
    // Check if the text is empty or contains only whitespace
    return !text || text.trim() === "";
  }

    // This function is called when the form is submitted. It handles the form data.

    // This function will handle the form submission. It will be called when the user submits the form.
    // The "use server" directive indicates that this function will be executed on the server side.
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'), 
      instructions: formData.get('instructions'),
      image: formData.get('image'), // Assuming you have an input field for the image
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    };

    if (isInvalidText(meal.title) || 
    isInvalidText(meal.summary) || 
    isInvalidText(meal.instructions) || 
    isInvalidText(meal.creator) || 
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0) {
      // Check if the meal object has any invalid fields.
      // If any of the required fields are empty, throw an error.
      //throw new Error("Invalid input. Please fill all fields correctly.");
      return {
        message: "Invalid input. Please fill all fields correctly.",
        values: meal,
      };
       
    }

    // You can then process the meal data as needed, such as saving it to a database or sending it to an API.

    //console.log(meal); // For demonstration purposes, log the meal object to the console.

    await saveMeal(meal);
    revalidatePath("/meals"); // Revalidate the path to ensure the data is up to date.
    redirect("/meals")
    }