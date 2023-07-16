import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: "a3n51tfn",
    dataset: "production",
    useCdn: true,
});

export default client;