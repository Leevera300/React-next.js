"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function ShareMeal(formData) {
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
    // You can then process the meal data as needed, such as saving it to a database or sending it to an API.

    //console.log(meal); // For demonstration purposes, log the meal object to the console.

    await saveMeal(meal);

    redirect("/meals")
    }