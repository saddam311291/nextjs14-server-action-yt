import Image from "next/image";
import { getData, create, edit, deleteAction } from "./action";
import { SubmitBtn, SaveBtn, UpdateBtn, DeleteBtn } from "../components/Btn";
import BetterForms from "../components/betterForms";


export default async function betterExample() {
  const data = await getData();
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className=" border rounded-lg shadow-xl p-10 w-[30vw]">
        <BetterForms />
        <div className="mt-5 flex flex-col gap-y-2">
          {data.map((todo) => (
            <div key={todo.id} className=" w-full h-full flex items-center">
              <form action={edit}>
                <input type="hidden" name="inputId" value={todo.id} />
                <input
                  className="border p-1"
                  type="text"
                  name="input"
                  defaultValue={todo.input}
                />
                <UpdateBtn />
              </form>
              <form action={deleteAction}>
                <input type="hidden" name="inputId" value={todo.id} />

                <DeleteBtn />
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
