import { collation as databaseCollation } from './collation';
import { column as databaseColumn } from './column';
import { engine as databaseEngine } from './engine';
import { mongodbObjectId as databaseMongodbObjectId } from './mongodb-object-id';
import { type as databaseType } from './type';

export const databaseModule = {
  collation: databaseCollation,
  column: databaseColumn,
  engine: databaseEngine,
  mongodbObjectId: databaseMongodbObjectId,
  type: databaseType,
};
