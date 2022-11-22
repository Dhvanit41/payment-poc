import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions
} from 'mongoose';
import TRM, { TRMDocument } from '../models/trm';

export async function createTRM(input: DocumentDefinition<TRMDocument>) {
  return await TRM.create(input);
}
