"use client";

import { PlaceholdersAndVanishInput } from "../global/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[3rem] flex flex-col justify-center  items-center px-4">
           
{/*  <h2 className="mb-5 sm:mb-5 text-xl text-center sm:text-xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />      
*/}
      <div>
       <h2 className="mb-5 sm:mb-5 text-s text-center sm:text-l dark:text-white text-black h-2">
       © Copyright @Moonfrost Esencia. All Rights Reserved.
 </h2>
 </div>
    </div>
  );
}
