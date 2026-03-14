import { bio as personBio } from './bio';
import { firstName as personFirstName } from './first-name';
import { fullName as personFullName } from './full-name';
import { gender as personGender } from './gender';
import { jobArea as personJobArea } from './job-area';
import { jobDescriptor as personJobDescriptor } from './job-descriptor';
import { jobTitle as personJobTitle } from './job-title';
import { jobType as personJobType } from './job-type';
import { lastName as personLastName } from './last-name';
import { middleName as personMiddleName } from './middle-name';
import { prefix as personPrefix } from './prefix';
import { sex as personSex } from './sex';
import { sexType as personSexType } from './sex-type';
import { suffix as personSuffix } from './suffix';
import { zodiacSign as personZodiacSign } from './zodiac-sign';

export const personModule = {
  bio: personBio,
  firstName: personFirstName,
  fullName: personFullName,
  gender: personGender,
  jobArea: personJobArea,
  jobDescriptor: personJobDescriptor,
  jobTitle: personJobTitle,
  jobType: personJobType,
  lastName: personLastName,
  middleName: personMiddleName,
  prefix: personPrefix,
  sex: personSex,
  sexType: personSexType,
  suffix: personSuffix,
  zodiacSign: personZodiacSign,
};
