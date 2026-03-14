import { commonFileExt as systemCommonFileExt } from './common-file-ext';
import { commonFileName as systemCommonFileName } from './common-file-name';
import { commonFileType as systemCommonFileType } from './common-file-type';
import { cron as systemCron } from './cron';
import { directoryPath as systemDirectoryPath } from './directory-path';
import { fileExt as systemFileExt } from './file-ext';
import { fileName as systemFileName } from './file-name';
import { filePath as systemFilePath } from './file-path';
import { fileType as systemFileType } from './file-type';
import { mimeType as systemMimeType } from './mime-type';
import { networkInterface as systemNetworkInterface } from './network-interface';
import { semver as systemSemver } from './semver';

export const systemModule = {
  commonFileExt: systemCommonFileExt,
  commonFileName: systemCommonFileName,
  commonFileType: systemCommonFileType,
  cron: systemCron,
  directoryPath: systemDirectoryPath,
  fileExt: systemFileExt,
  fileName: systemFileName,
  filePath: systemFilePath,
  fileType: systemFileType,
  mimeType: systemMimeType,
  networkInterface: systemNetworkInterface,
  semver: systemSemver,
};
