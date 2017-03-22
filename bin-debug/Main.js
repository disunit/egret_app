var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.call(this) || this;
    }
    Main.prototype.RESLOAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, UI2D_scene, scene, aa, game, ui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 1:
                        _a.sent(); //开始加载资源组
                        loading = new UILoading();
                        this.addChild(loading);
                        UI2D_scene = {
                            onProgress: function (current, total) {
                                loading.setProgress("LOADING...", current, total);
                            }
                        };
                        return [4 /*yield*/, RES.loadGroup("2DUI", 1, UI2D_scene)];
                    case 2:
                        _a.sent(); //开始加载2DUI资源组
                        scene = function (current, total) {
                            loading.setProgress("场景加载中...", current, total);
                        };
                        aa = function (current, total) {
                            loading.setProgress("场景加载中...", current, total);
                        };
                        return [4 /*yield*/, App.Res3d.loadGroup("scene", 0, scene)];
                    case 3:
                        _a.sent(); //3D资源加载 用法和官方的RES.loadGroup一样；
                        return [4 /*yield*/, App.Res3d.loadGroup("test", 0, aa)];
                    case 4:
                        _a.sent();
                        game = new Scene(this.context3d);
                        ui = new UI();
                        this.addChild(ui);
                        ui.alpha = 0;
                        egret.Tween.get(loading).to({ alpha: 0 }, 800, egret.Ease.quadOut).call(function () {
                            App.DisplayTool.removeMc(loading);
                            game.create(); //显示3D场景
                        });
                        egret.Tween.get(ui).wait(700).to({ alpha: 1 }, 800, egret.Ease.quadOut);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(AppMain));
Main = __decorate([
    RES.mapConfig("config.json", function () { return "resource"; }, function (path) {
        var ext = path.substr(path.lastIndexOf(".") + 1);
        var type = "";
        if (path.indexOf("3D") >= 0) {
            type = "disunit";
        }
        else {
            var typeMap = {
                "jpg": "image",
                "png": "image",
                "webp": "image",
                "json": "json",
                "fnt": "font",
                "pvr": "pvr",
                "mp3": "sound"
            };
            type = typeMap[ext];
            if (type == "json") {
                if (path.indexOf("sheet") >= 0) {
                    type = "sheet";
                }
                else if (path.indexOf("movieclip") >= 0) {
                    type = "movieclip";
                }
                ;
            }
        }
        return type;
    })
], Main);
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map