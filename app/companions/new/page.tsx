import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import CompanionForm from "@/components/CompanionForm";

const NewCompanion = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="items-center justify-center min-md:w-2/3 min-lg:w-1/3">
      <article className="flex w-full flex-col gap-4">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
