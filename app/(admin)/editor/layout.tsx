import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

interface EditorProps {
  children?: React.ReactNode;
}

export default async function EditorLayout({ children }: EditorProps) {
  const user = await getCurrentUser();

  if (!user || !user.email) {
    return notFound();
  }

  const administrators = ["wedabeast360@gmail.com"];
  let isAdmin = administrators.includes(user.email);
  if (!isAdmin) {
    return notFound();
  }

  return (
    <div className="container mx-auto grid items-start gap-10 py-8">
      {children}
    </div>
  );
}
