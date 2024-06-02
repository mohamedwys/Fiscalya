import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";

interface SearchParamProps {
  searchParams: { page?: string };
}

interface User {
  creditBalance: number;
  // Add other user properties as needed
}

const Profile = async () => {
  
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  //   return null;
  // }

  // let user: User | null = null;

  // try {
  //   user = await getUserById(userId);
  // } catch (error) {
  //   console.error('Failed to fetch user profile:', error);
  //   // Handle error, e.g., redirect to an error page or show a message
  //   return <div>Error loading profile. Please try again later.</div>;
  // }

  // if (!user) {
  //   return <div>User not found.</div>;
  // }

  return (
    <>
      <Header title="Profile" />
      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            {/* <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2> */}
          </div>
        </div>
        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          {/* Add more content as needed */}
        </div>
      </section>
    </>
  );
};

export default Profile;
