module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_S3,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
        region: process.env.AWS_REGION_S3,
        params: {
          Bucket: process.env.AWS_BUCKET_NAME,
          StorageClass: env('AWS_S3_STORAGE_CLASSES')
        },
      },
    },
  });
  