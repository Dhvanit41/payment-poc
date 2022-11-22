import app from '../src/index';
import {agent as request} from 'supertest';

import {expect} from 'chai';
describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

it('should GET /trm-details', async function () {
    const res = await request(app).get('/trm-details/?source=GBP&target=EUR')
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.contain.keys('target', 'source', 'value', 'time');
});