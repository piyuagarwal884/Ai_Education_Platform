
"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const supabase = await createSupabaseClient();

  const { data, error } = await supabase
    .from("Companions")
    .insert({
      ...formData,
      author: userId,
    })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};
