import { Request, Response } from 'express';
import { TRM } from '../models/trm';
import { createTRM } from '../services/trm.services';
import * as request from 'request-promise-native';
import config from '../config/config';
import { Query } from '../helper/queryParms';
const trmDetail = async (req: Request, res: Response) => {
  try {
    const { source, target } = req.query as unknown as Query;
    const value = await getCurrentDateTRM(source, target);
    if (!value) {
      res.status(404).send({
        message: 'source and target not found'
      });
    }
    const trmDetails = await createTRM(value);
    return res.send(trmDetails);
  } catch (e) {
    console.log((e as Error).message);
    res.status(500).send({
      message: 'Something went wrong'
    });
  }
};

function getCurrentDateTRM(source: string, target: string): Promise<TRM> {
  // this api returns current date value since resoluiton is daily
  return request.get(
    `${config.wiseURL}/rates/live?source=${source}&target=${target}&
    resolution=daily&unit=day`,
    {
      json: true
    }
  );
}
export { trmDetail, getCurrentDateTRM };
