
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect('dashboard/main')
  return (
   <>
   <h1 className="text-7xl text-center">HomePage</h1>
   </>
  );
}
