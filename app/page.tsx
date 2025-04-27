import { currentUser } from "@clerk/nextjs/server";
import SideBar from "@/components/home/SideBar";
import Feed from "@/components/home/Feed";
import News from "@/components/home/News";

export default async function Home() {
  const user = await currentUser();
  console.log("Clerk currentUser:", user); // Debug
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        <SideBar user={user} />
        <Feed user={user} />
        <News />
      </div>
    </div>
  );
}