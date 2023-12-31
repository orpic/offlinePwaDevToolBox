"use server";

type EmailAddress = {
  id: string;
  email: string;
};

type PhoneNumber = {
  id: string;
  number: string;
};

type Web3Wallet = {
  id: string;
  address: string;
};

type ExternalAccount = {
  id: string;
  provider: string;
};

type User = {
  id: string;
  passwordEnabled: boolean;
  totpEnabled: boolean;
  backupCodeEnabled: boolean;
  twoFactorEnabled: boolean;
  banned: boolean;
  createdAt: number;
  updatedAt: number;
  profileImageUrl: string;
  imageUrl: string;
  hasImage: boolean;
  gender: string;
  birthday: string;
  primaryEmailAddressId: string | null;
  primaryPhoneNumberId: string | null;
  primaryWeb3WalletId: string | null;
  lastSignInAt: number | null;
  externalId: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  publicMetadata: Record<string, any>;
  privateMetadata: Record<string, any>;
  unsafeMetadata: Record<string, any>;
  emailAddresses: EmailAddress[];
  phoneNumbers: PhoneNumber[];
  web3Wallets: Web3Wallet[];
  externalAccounts: ExternalAccount[];
};

export const getUserAndSubscriptionState = async (): Promise<{
  user: User;
  isProUser: boolean;
}> => {
  const user: User = {
    id: "123456789",
    passwordEnabled: true,
    totpEnabled: false,
    backupCodeEnabled: true,
    twoFactorEnabled: true,
    banned: false,
    createdAt: 1640995200,
    updatedAt: 1643620800,
    profileImageUrl: "https://example.com/profile-image.jpg",
    imageUrl: "https://example.com/image.jpg",
    hasImage: true,
    gender: "Male",
    birthday: "1990-05-15",
    primaryEmailAddressId: "email123",
    primaryPhoneNumberId: "phone456",
    primaryWeb3WalletId: "wallet789",
    lastSignInAt: 1643620800,
    externalId: "external123",
    username: "shobhit_username",
    firstName: "Shobhit",
    lastName: "Lastname",
    publicMetadata: {
      key1: "value1",
      key2: "value2",
    },
    privateMetadata: {
      key3: "value3",
      key4: "value4",
    },
    unsafeMetadata: {
      key5: "value5",
      key6: "value6",
    },
    emailAddresses: [],
    phoneNumbers: [],
    web3Wallets: [],
    externalAccounts: [],
  };

  let isProUser = false;
  return {
    user,
    isProUser,
  };
};

// // import prisma from "@/db/prisma";
// // import { currentUser } from "@clerk/nextjs";
// // import { SubscriptionStatus } from ".prisma/client";

// export const getUserAndSubscriptionState = async () => {
//   const user: User = {

//   };

//   // const user = await currentUser();
//   let isProUser = false;
//   // if (user) {
//   //   const subscriptions = await prisma.subscriptions.findMany({
//   //     where: {
//   //       clerkUserId: user.id,
//   //     },
//   //   });
//   //   if (
//   //     subscriptions.length !== 0 &&
//   //     subscriptions[0].subscriptionStatus === SubscriptionStatus.ACTIVE
//   //   ) {
//   //     isProUser = true;
//   //   }
//   // }
//   return {
//     user,
//     isProUser,
//   };
// };
