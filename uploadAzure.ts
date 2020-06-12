import * as multer from 'multer';
import { MulterAzureStorage } from 'multer-azure-blob-storage';


const azureStorage: MulterAzureStorage = new MulterAzureStorage({
    connectionString: 'connectionString',
    accessKey: 'accessKey',
    accountName: 'accountName',
    containerName: 'containerName',
    containerAccessLevel: 'blob',
    urlExpirationTime: 60
});

const uploadAzure = multer({ storage: azureStorage });

export default uploadAzure;