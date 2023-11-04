"use server"
import prisma from '../db';
import { revalidatePath } from 'next/cache';


export async function getData() {
  const data= await prisma.todo.findMany({
    select:{
      input: true,
      id: true
    },
    orderBy:{
      createAt:"desc"
    }
  });
  return data;  
}

export async function create(prevState:any,formData:FormData) {
     try{
      const input = formData.get("input") as string

      await prisma.todo.create({
        data:{
          input:input,
        },
      });
      revalidatePath("better/")

    }catch(error){
        return "Failed to submiting.!";
    }
  }
  export  async function edit(formData:FormData) {
    const input = formData.get("input") as string
    const inputId = formData.get("inputId") as string

    await prisma.todo.update({
      where:{
        id:inputId
      },
      data:{
        input:input,
      },
    });
    revalidatePath("better/")
  }
  export  async function deleteAction(formData:FormData) {
    const input = formData.get("input") as string
    const inputId = formData.get("inputId") as string

    await prisma.todo.delete({
      where:{
        id:inputId
      },
    });
    revalidatePath("better/")
  }