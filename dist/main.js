"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({
        limit: '100mb'
    }));
    app.enableCors({
        origin: 'http://localhost:4200',
        credentials: true
    });
    app.use(session({
        secret: 'my-secret',
        resave: true,
        saveUninitialized: true,
        cookie: {
            sameSite: 'none',
            secure: false
        }
    }));
    app.use(cookieParser('my-secret'));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map