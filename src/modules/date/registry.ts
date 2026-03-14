import { anytime as dateAnytime } from './anytime';
import { between as dateBetween } from './between';
import { betweens as dateBetweens } from './betweens';
import { birthdate as dateBirthdate } from './birthdate';
import { future as dateFuture } from './future';
import { month as dateMonth } from './month';
import { past as datePast } from './past';
import { recent as dateRecent } from './recent';
import { soon as dateSoon } from './soon';
import { timeZone as dateTimeZone } from './time-zone';
import { weekday as dateWeekday } from './weekday';

export const dateModule = {
  anytime: dateAnytime,
  between: dateBetween,
  betweens: dateBetweens,
  birthdate: dateBirthdate,
  future: dateFuture,
  month: dateMonth,
  past: datePast,
  recent: dateRecent,
  soon: dateSoon,
  timeZone: dateTimeZone,
  weekday: dateWeekday,
};
