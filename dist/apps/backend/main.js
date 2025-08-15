/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// external "@nestjs/common"
const common_namespaceObject = require("@nestjs/common");
;// external "@nestjs/core"
const core_namespaceObject = require("@nestjs/core");
;// external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// ./src/app/app.service.ts


let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
AppService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], AppService);


;// ./src/app/app.controller.ts
var _a;



let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_a = typeof AppService !== "undefined" && AppService) === "function" ? _a : Object])
], AppController);


;// external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// ./src/prisma/prisma.service.ts



let PrismaService = class PrismaService extends client_namespaceObject.PrismaClient {
    async onModuleInit() {
        await this['$connect']();
    }
    async onModuleDestroy() {
        await this['$disconnect']();
    }
};
PrismaService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], PrismaService);


;// ./src/annonces/annonces.service.ts
var annonces_service_a;



let AnnoncesService = class AnnoncesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAnnonceDto, UserId) {
        return this.prisma.annonce.create({
            data: {
                job: createAnnonceDto.job,
                contract_type: createAnnonceDto.contract_type,
                work_mode: createAnnonceDto.work_mode,
                status: createAnnonceDto.status,
                about: createAnnonceDto.about,
                description: createAnnonceDto.description,
                skills: createAnnonceDto.skills,
                benefits: createAnnonceDto.benefits,
                salary: createAnnonceDto.salary,
                annonce_link: createAnnonceDto.annonce_link,
                company_name: createAnnonceDto.company_name,
                company_city: createAnnonceDto.company_city,
                company_phone: createAnnonceDto.company_phone,
                company_email: createAnnonceDto.company_email,
                user: {
                    connect: {
                        id: UserId,
                    },
                },
            },
        });
    }
    async findAll() {
        return this.prisma.annonce.findMany({
            include: {
                user: true,
            },
            orderBy: {
                created_at: 'desc',
            },
        });
    }
    async findOne(id) {
        return this.prisma.annonce.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });
    }
    async update(id, updateAnnonceDto) {
        return this.prisma.annonce.update({
            where: { id },
            data: updateAnnonceDto,
        });
    }
    async remove(id) {
        return this.prisma.annonce.delete({
            where: { id },
        });
    }
};
AnnoncesService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (annonces_service_a = typeof PrismaService !== "undefined" && PrismaService) === "function" ? annonces_service_a : Object])
], AnnoncesService);


;// external "class-validator"
const external_class_validator_namespaceObject = require("class-validator");
;// ../../libs/dto/create-annonces.dto.ts


class CreateAnnonceDto {
    job;
    contract_type;
    status;
    about;
    description;
    skills;
    benefits;
    salary;
    annonce_link;
    work_mode;
    user_id;
    company_name;
    company_city;
    company_phone;
    company_email;
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "job", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "contract_type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "status", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "about", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "description", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "skills", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "benefits", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "salary", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsUrl)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "annonce_link", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "work_mode", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsUUID)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "user_id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "company_name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "company_city", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "company_phone", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsEmail)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateAnnonceDto.prototype, "company_email", void 0);

;// external "@nestjs/mapped-types"
const mapped_types_namespaceObject = require("@nestjs/mapped-types");
;// ../../libs/dto/update-annonces.dto.ts


class UpdateAnnoncesDto extends (0,mapped_types_namespaceObject.PartialType)(CreateAnnonceDto) {
}

;// ./src/annonces/annonces.controller.ts
var annonces_controller_a, _b, _c;





let AnnoncesController = class AnnoncesController {
    annonceService;
    constructor(annonceService) {
        this.annonceService = annonceService;
    }
    create(createAnnonceDto) {
        const UserId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        return this.annonceService.create(createAnnonceDto, UserId);
    }
    findAll() {
        return this.annonceService.findAll();
    }
    findOne(id) {
        return this.annonceService.findOne(id);
    }
    update(id, updateAnnonceDto) {
        return this.annonceService.update(id, updateAnnonceDto);
    }
    remove(id) {
        return this.annonceService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_b = typeof CreateAnnonceDto !== "undefined" && CreateAnnonceDto) === "function" ? _b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AnnoncesController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AnnoncesController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AnnoncesController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (_c = typeof UpdateAnnoncesDto !== "undefined" && UpdateAnnoncesDto) === "function" ? _c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AnnoncesController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AnnoncesController.prototype, "remove", null);
AnnoncesController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('annonces'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (annonces_controller_a = typeof AnnoncesService !== "undefined" && AnnoncesService) === "function" ? annonces_controller_a : Object])
], AnnoncesController);


;// ./src/prisma/prisma.module.ts



let PrismaModule = class PrismaModule {
};
PrismaModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        providers: [PrismaService],
        exports: [PrismaService],
    })
], PrismaModule);


;// ./src/annonces/annonces.module.ts





let AnnoncesModule = class AnnoncesModule {
};
AnnoncesModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [PrismaModule],
        controllers: [AnnoncesController],
        providers: [AnnoncesService],
    })
], AnnoncesModule);


;// external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
;// ./src/users/users.service.ts
var users_service_a;




let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(User) {
        const saltOrRounds = 10;
        const password = User.password;
        const hash = await external_bcrypt_namespaceObject.hash(password, saltOrRounds);
        return this.prisma['user'].create({
            data: {
                name: User.name,
                email: User.email,
                password: hash,
                created_at: User.createdAt
            }
        });
    }
    findOne(email) {
        return this.prisma['user'].findFirst({
            where: { email }
        });
    }
    update(id, updateUserDto) {
        return this.prisma['user'].update({
            where: { id }, data: updateUserDto
        });
    }
    remove(id) {
        return this.prisma['user'].delete({
            where: { id }
        });
    }
};
UsersService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (users_service_a = typeof PrismaService !== "undefined" && PrismaService) === "function" ? users_service_a : Object])
], UsersService);


;// ./src/users/users.module.ts




let UsersModule = class UsersModule {
};
UsersModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [PrismaModule],
        providers: [UsersService],
        exports: [UsersService],
    })
], UsersModule);


;// external "@nestjs/jwt"
const jwt_namespaceObject = require("@nestjs/jwt");
;// ./src/auth/auth.service.ts
var auth_service_a, auth_service_b;





let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(userSession) {
        const user = await this.usersService.findOne(userSession.email);
        if (!user)
            throw new common_namespaceObject.UnauthorizedException('Utilisateur introuvable');
        const isPasswordValid = await external_bcrypt_namespaceObject.compare(userSession.password, user.password);
        if (!isPasswordValid)
            throw new common_namespaceObject.UnauthorizedException('Mot de passe invalide');
        const payload = { sub: user.id, email: user.email };
        const access = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
        const refresh = await this.jwtService.signAsync(payload, { expiresIn: '7d' });
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            tokens: {
                access,
                refresh,
                expires_in: 15 * 60,
                token_type: 'Bearer',
            },
        };
    }
};
AuthService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_service_a = typeof UsersService !== "undefined" && UsersService) === "function" ? auth_service_a : Object, typeof (auth_service_b = typeof jwt_namespaceObject.JwtService !== "undefined" && jwt_namespaceObject.JwtService) === "function" ? auth_service_b : Object])
], AuthService);


;// ../../libs/dto/create-users.dto.ts


class CreateUsersDto {
    id;
    name;
    email;
    password;
    createdAt;
    updatedAt;
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsUUID)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUsersDto.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUsersDto.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsEmail)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUsersDto.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsDateString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUsersDto.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsDateString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUsersDto.prototype, "updatedAt", void 0);

;// ../../libs/dto/update-users.dto.ts


class UpdateUsersDto extends (0,mapped_types_namespaceObject.PartialType)(CreateUsersDto) {
}

;// ../../libs/dto/UserSigning.dto.ts


class UserSigningDto {
    email;
    password;
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsEmail)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], UserSigningDto.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], UserSigningDto.prototype, "password", void 0);

;// ./src/auth/auth.controller.ts
var auth_controller_a, auth_controller_b, auth_controller_c, _d, _e;







let AuthController = class AuthController {
    usersService;
    authService;
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    signIn(userSession) {
        return this.authService.signIn(userSession);
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    async signup(User) {
        return this.usersService.create(User);
    }
    update(id, User) {
        return this.usersService.update(id, User);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.HttpCode)(common_namespaceObject.HttpStatus.OK),
    (0,common_namespaceObject.Post)('signIn'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_c = typeof UserSigningDto !== "undefined" && UserSigningDto) === "function" ? auth_controller_c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)('signup'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_d = typeof CreateUsersDto !== "undefined" && CreateUsersDto) === "function" ? _d : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", Promise)
], AuthController.prototype, "signup", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (_e = typeof UpdateUsersDto !== "undefined" && UpdateUsersDto) === "function" ? _e : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "remove", null);
AuthController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('auth'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_a = typeof UsersService !== "undefined" && UsersService) === "function" ? auth_controller_a : Object, typeof (auth_controller_b = typeof AuthService !== "undefined" && AuthService) === "function" ? auth_controller_b : Object])
], AuthController);


;// external "@nestjs/passport"
const passport_namespaceObject = require("@nestjs/passport");
;// external "node:process"
const external_node_process_namespaceObject = require("node:process");
;// ./src/auth/auth.module.ts









let AuthModule = class AuthModule {
};
AuthModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [PrismaModule, UsersModule, passport_namespaceObject.PassportModule, jwt_namespaceObject.JwtModule.register({
                secret: external_node_process_namespaceObject.env['JWT_SECRET'],
                signOptions: {
                    expiresIn: '60m',
                }
            })],
        providers: [AuthService],
        controllers: [AuthController],
    })
], AuthModule);


;// ./src/app/app.module.ts








let AppModule = class AppModule {
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [PrismaModule, AnnoncesModule, UsersModule, AuthModule,],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);


;// ./src/main.ts



async function bootstrap() {
    const app = await core_namespaceObject.NestFactory.create(AppModule);
    // CORS d'abord
    app.enableCors({
        origin: 'https://jobtrakerv2.netlify.app/', // pas '*', car credentials potentiels
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true, // mets à false si tu n'utilises pas de cookies
    });
    // pipes, etc.
    app.useGlobalPipes(new common_namespaceObject.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = process.env['PORT'] || 3000;
    await app.listen(port);
}
bootstrap();

/******/ })()
;