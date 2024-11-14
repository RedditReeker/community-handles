import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a sample user relevant to Bluesky's requirements
  await prisma.user.create({
    data: {
      name: 'Bluesky User',             // Example user name
      email: 'blueskyuser@example.com',  // Example email
      handle: 'blueskyuser.bsky.social', // Example handle, based on Bluesky format
    },
  });

  // Optional: If you have a Handle table or other tables, add seeding here
  await prisma.handle.create({
    data: {
      handle: 'blueskyuser.bsky.social',
      userId: 1, // Link to the user created above; adjust if needed
      platform: 'Bluesky',
      verified: true,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });