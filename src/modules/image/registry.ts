import { avatar as imageAvatar } from './avatar';
import { avatarGitHub as imageAvatarGitHub } from './avatar-git-hub';
import { dataUri as imageDataUri } from './data-uri';
import { personPortrait as imagePersonPortrait } from './person-portrait';
import { url as imageUrl } from './url';
import { urlLoremFlickr as imageUrlLoremFlickr } from './url-lorem-flickr';
import { urlPicsumPhotos as imageUrlPicsumPhotos } from './url-picsum-photos';

export const imageModule = {
  avatar: imageAvatar,
  avatarGitHub: imageAvatarGitHub,
  dataUri: imageDataUri,
  personPortrait: imagePersonPortrait,
  url: imageUrl,
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- Internal setup
  urlLoremFlickr: imageUrlLoremFlickr,
  urlPicsumPhotos: imageUrlPicsumPhotos,
};
