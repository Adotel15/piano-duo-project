import dotenv from 'dotenv';
dotenv.config();

const GCP_SERVICE_ACCOUNT = JSON.parse(process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_JSON);
const BUCKET_NAME = process.env.GOOGLE_CLOUD_BUCKET_NAME;

if(!GCP_SERVICE_ACCOUNT || !BUCKET_NAME) {
    throw new Error('Please provide a valid GOOGLE_CLOUD_SERVICE_ACCOUNT_JSON and GOOGLE_CLOUD_BUCKET_NAME');
}

export default () => ({
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: BUCKET_NAME,
            publicFiles: true,
            uniform: true,
            serviceAccount: GCP_SERVICE_ACCOUNT, 
            baseUrl: `https://storage.googleapis.com/${BUCKET_NAME}`,
            basePath: '',
        },
      },
    },
});
