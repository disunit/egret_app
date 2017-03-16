var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
/**
  * 程序入口
  * by disunit  on 17/03/03.
  * 存放全局的配置数据
  */
var AppMain = (function (_super) {
    __extends(AppMain, _super);
    function AppMain() {
        var _this = _super.call(this) || this;
        App.init();
        _this.RESLOAD();
        return _this;
    }
    AppMain.prototype.RESLOAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, scene;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, RES.loadConfig()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 2:
                        _a.sent();
                        this.init();
                        self.loadingView = new LoadingUI();
                        self.addChild(this.loadingView);
                        scene = {
                            onProgress: function (current, total) {
                                self.loadingView.setProgress(current, total);
                            }
                        };
                        return [4 /*yield*/, RES.loadGroup("scene", 1, scene)];
                    case 3:
                        _a.sent();
                        self.RESLOADMUSIC();
                        self.startScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppMain.prototype.RESLOADMUSIC = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadGroup("music", 2)];
                    case 1:
                        _a.sent();
                        this.playMusic();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppMain.prototype.playMusic = function () {
        // wxSoundInit();
        // document.addEventListener("WeixinJSBridgeReady", function() {
        //     alert(123456);
        // }, false);
        // var sound = new egret.Sound();
        // if (Math.random() < 0.5) {
        //     sound = RES.getRes("sound.GameSceneBGM_mp3");
        // } else {
        //     sound = RES.getRes("sound.WorldSceneBGM_mp3");
        // }
        // var channel: egret.SoundChannel = sound.play(0, -1);
    };
    /**
     * 子类重写 开始程序
     * @returns void
     */
    AppMain.prototype.startScene = function () {
        console.log("子类没有重写改方法");
    };
    /**
     * 子类重写 preload加载完成后初始化
     * @returns void
     */
    AppMain.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("子类没有重写改方法");
                return [2 /*return*/];
            });
        });
    };
    return AppMain;
}(egret.DisplayObjectContainer));
__reflect(AppMain.prototype, "AppMain");
//# sourceMappingURL=AppMain.js.map