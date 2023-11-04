"use client";
import { useRef } from "react";
import { SubmitBtn } from "./Btn";
import { create } from "../better/action";
import { useFormState } from "react-dom";

export default function BetterForms() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(create, null);
  return (
    <form
      className=" flex flex-col"
      action={async (formData: FormData) => {
        formAction(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      <input
        type="text"
        name="input"
        className=" border p-1 bordrer-gray-800"
      />
      <SubmitBtn />
      <p className=" text-red-600"> {state as string}</p>
    </form>
  );
}
