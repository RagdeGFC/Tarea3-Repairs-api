"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model");
const encryption_1 = require("../../../presentation/passwordManager/utils/encryption");
let Password = class Password extends typeorm_1.BaseEntity {
    set password(value) {
        this.encryptedPassword = (0, encryption_1.encryptPassword)(value);
    }
    get password() {
        return (0, encryption_1.decryptPassword)(this.encryptedPassword);
    }
};
exports.Password = Password;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Password.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User, (user) => user.passwords),
    __metadata("design:type", user_model_1.User)
], Password.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Password.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Password.prototype, "encryptedPassword", void 0);
exports.Password = Password = __decorate([
    (0, typeorm_1.Entity)()
], Password);
