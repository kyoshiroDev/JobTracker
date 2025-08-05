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


;// ./src/app/app.module.ts




let AppModule = class AppModule {
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);


;// ./src/main.ts
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */



async function bootstrap() {
    const app = await core_namespaceObject.NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env['PORT'] || 3000;
    await app.listen(port);
    common_namespaceObject.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map