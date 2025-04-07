'use client';
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();
  // The form is submitted to the ShareMeal action, which handles the data processing and storage.
 return <button disabled={pending}>
    {pending ? "SUbmitting..." : "Share Meal"}
 </button>
}