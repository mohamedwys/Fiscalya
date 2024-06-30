/* eslint-disable @next/next/no-async-client-component */


import Image from "next/image";
import Header from "@/components/shared/Header";

interface SearchParamProps {
  searchParams: { page?: string };
}

interface User {
  creditBalance: number;
  // Add other user properties as needed
}

const Profile = async () => {
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
