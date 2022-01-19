import { CONFIG } from './config';
import { initDb } from './dal/init.db';
import { seedDb } from './dal/seed.db';
import { handleErrors } from './middlwares/errors.mid';
import { authRouter } from './routes/auth.route';
import { catchRouter } from './routes/catch.route';
import { generateRouter } from './routes/generate.route';
import server from './server';

// TODO add logs
const init = async () => {
  await initDb();
  await seedDb();
  const app = await server();
  
  // TODO add swagger defenition
  app.use('/auth', authRouter);
  app.use('/generate', generateRouter);
  app.use('/catch', catchRouter);
  
  app.use(handleErrors);
  
  const port = CONFIG.PORT;
  app.listen(port, () => {
    console.log(`Server is awailable http://localhost:${port}`);
  });
}

init();