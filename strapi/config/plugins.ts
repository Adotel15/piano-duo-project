import dotenv from 'dotenv';
dotenv.config();

const serviceAccountRaw = process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_JSON;
const BUCKET_NAME = process.env.GOOGLE_CLOUD_BUCKET_NAME;

let gcpServiceAccount = undefined;
if (serviceAccountRaw) {
  try {
    gcpServiceAccount = JSON.parse(serviceAccountRaw);
  } catch (e) {
    console.warn('El JSON de la Service Account no es válido, intentando usar ADC...');
  }
}

if (!BUCKET_NAME) {
    throw new Error('Por favor define GOOGLE_CLOUD_BUCKET_NAME');
}

export default () => ({
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: BUCKET_NAME,
            publicFiles: true,
            uniform: true,
            serviceAccount: gcpServiceAccount, 
            baseUrl: `https://storage.googleapis.com/${BUCKET_NAME}`,
            basePath: '',
            sizeLimit: 500 * 1024 * 1024,
        },
      },
    },
});