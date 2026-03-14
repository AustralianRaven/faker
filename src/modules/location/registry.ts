import { buildingNumber as locationBuildingNumber } from './building-number';
import { cardinalDirection as locationCardinalDirection } from './cardinal-direction';
import { city as locationCity } from './city';
import { continent as locationContinent } from './continent';
import { country as locationCountry } from './country';
import { countryCode as locationCountryCode } from './country-code';
import { county as locationCounty } from './county';
import { direction as locationDirection } from './direction';
import { language as locationLanguage } from './language';
import { latitude as locationLatitude } from './latitude';
import { longitude as locationLongitude } from './longitude';
import { nearbyGPSCoordinate as locationNearbyGPSCoordinate } from './nearby-gpscoordinate';
import { ordinalDirection as locationOrdinalDirection } from './ordinal-direction';
import { postalAddress as locationPostalAddress } from './postal-address';
import { secondaryAddress as locationSecondaryAddress } from './secondary-address';
import { state as locationState } from './state';
import { street as locationStreet } from './street';
import { streetAddress as locationStreetAddress } from './street-address';
import { timeZone as locationTimeZone } from './time-zone';
import { zipCode as locationZipCode } from './zip-code';

export const locationModule = {
  buildingNumber: locationBuildingNumber,
  cardinalDirection: locationCardinalDirection,
  city: locationCity,
  continent: locationContinent,
  country: locationCountry,
  countryCode: locationCountryCode,
  county: locationCounty,
  direction: locationDirection,
  language: locationLanguage,
  latitude: locationLatitude,
  longitude: locationLongitude,
  nearbyGPSCoordinate: locationNearbyGPSCoordinate,
  ordinalDirection: locationOrdinalDirection,
  postalAddress: locationPostalAddress,
  secondaryAddress: locationSecondaryAddress,
  state: locationState,
  street: locationStreet,
  streetAddress: locationStreetAddress,
  timeZone: locationTimeZone,
  zipCode: locationZipCode,
};
