import { aircraftType as airlineAircraftType } from './aircraft-type';
import { airline as airlineAirline } from './airline';
import { airplane as airlineAirplane } from './airplane';
import { airport as airlineAirport } from './airport';
import { flightNumber as airlineFlightNumber } from './flight-number';
import { recordLocator as airlineRecordLocator } from './record-locator';
import { seat as airlineSeat } from './seat';

export const airlineModule = {
  aircraftType: airlineAircraftType,
  airline: airlineAirline,
  airplane: airlineAirplane,
  airport: airlineAirport,
  flightNumber: airlineFlightNumber,
  recordLocator: airlineRecordLocator,
  seat: airlineSeat,
};
