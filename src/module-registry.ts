import { airlineModule } from './modules/airline/registry';
import { animalModule } from './modules/animal/registry';
import { bookModule } from './modules/book/registry';
import { colorModule } from './modules/color/registry';
import { commerceModule } from './modules/commerce/registry';
import { companyModule } from './modules/company/registry';
import { databaseModule } from './modules/database/registry';
import { datatypeModule } from './modules/datatype/registry';
import { dateModule } from './modules/date/registry';
import { financeModule } from './modules/finance/registry';
import { foodModule } from './modules/food/registry';
import { gitModule } from './modules/git/registry';
import { hackerModule } from './modules/hacker/registry';
import { helpersModule } from './modules/helpers/registry';
import { imageModule } from './modules/image/registry';
import { internetModule } from './modules/internet/registry';
import { locationModule } from './modules/location/registry';
import { loremModule } from './modules/lorem/registry';
import { musicModule } from './modules/music/registry';
import { numberModule } from './modules/number/registry';
import { personModule } from './modules/person/registry';
import { phoneModule } from './modules/phone/registry';
import { scienceModule } from './modules/science/registry';
import { stringModule } from './modules/string/registry';
import { systemModule } from './modules/system/registry';
import { vehicleModule } from './modules/vehicle/registry';
import { wordModule } from './modules/word/registry';

export const moduleRegistry = {
  airline: airlineModule,
  animal: animalModule,
  book: bookModule,
  color: colorModule,
  commerce: commerceModule,
  company: companyModule,
  database: databaseModule,
  datatype: datatypeModule,
  date: dateModule,
  finance: financeModule,
  food: foodModule,
  git: gitModule,
  hacker: hackerModule,
  helpers: helpersModule,
  image: imageModule,
  internet: internetModule,
  location: locationModule,
  lorem: loremModule,
  music: musicModule,
  number: numberModule,
  person: personModule,
  phone: phoneModule,
  science: scienceModule,
  string: stringModule,
  system: systemModule,
  vehicle: vehicleModule,
  word: wordModule,
};
