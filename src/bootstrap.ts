const isDev = process.env.IS_TS_NODE === 'true';

if (!isDev) {
  require('module-alias/register');
}

import { bootstrap } from './main';

bootstrap();
