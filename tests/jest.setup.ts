import supertest from 'supertest';
import { beforeAll, afterAll } from '@jest/globals';
import { server } from '../src/server/server';
import { Knex } from '../src/server/database/knex';

process.env.NODE_ENV = 'test';

beforeAll(async () => {
  await Knex.migrate.latest();
});

afterAll(async () => {
  await Knex.destroy();
});

export const testServer = supertest(server);