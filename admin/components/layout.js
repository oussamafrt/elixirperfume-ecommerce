import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/nav";

export default function Layout({children}) {
  const { data: session } = useSession();
  console.log(session);
  if(!session) {
    return (
      <div className="bg-gray-900 w-scfeen h-screen flex items-center">
      <div className="text-center w-full">
        <button onClick={() => signIn("google")} className="bg-white p-2 px-4 rounded-lg" >login with Google</button>
      </div>
    </div>
  )
}

return (
  <div className="bg-gray-900 min-h-screen flex">
    <Nav/>
    <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
    </div>
  </div>
);
}