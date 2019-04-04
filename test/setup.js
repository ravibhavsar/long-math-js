import chai from 'chai';
import sinonChai from 'sinon-chai';
import dotenv from 'dotenv';
import path from 'path';

chai.should();
chai.use(sinonChai);
global.expect = chai.expect;

global.SRC = `${__dirname}/../functions`;
dotenv.config({ path: path.join(__dirname, './.env.test') });
