import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { User } from "../user/entities/user.entity";
import { UserModule } from "../user/user.module";
import { Passport } from "passport";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { AuthController } from "./controllers/auth.controller";
import { JwtStrategy } from "./strategy/jwt.strategy";


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '2h' },
        }),
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt],
})
export class AuthModule { }