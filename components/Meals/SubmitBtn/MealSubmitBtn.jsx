'use client';

import { useFormStatus } from 'react-dom';
import classes from './MealSubmitBtn.module.css';

export default function MealSubmitBtn() {
  const { pending } = useFormStatus();

  return <button disabled={pending} type="submit">{pending ? 'Submitting...' : 'Share Meal'}</button>
}