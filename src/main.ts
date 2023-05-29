import { NestFactory } from '@nestjs/core';
import  * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json({
      limit: '100mb'
  }));
  app.enableCors({
    origin: 'http://localhost:4200',
    // allowedHeaders: ['origin', 'x-requested-with', 'content-type', 'accept', 'authorization' ,'x-access-token' , 'access-token'],
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });
  
  app.use(
    session({
      secret: 'my-secret',
      resave: true,
      saveUninitialized: true,
      cookie: { 
        sameSite: 'none',
        secure: true
      }
    })
  );
    
  app.use(cookieParser('my-secret'));
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3000);
}
bootstrap();
