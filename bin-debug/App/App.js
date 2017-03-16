var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
 * by disunit on 2017/03/03.
 * 框架入口
 */
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "StageTool", {
        /**
         * Stage操作相关工具类
         */
        get: function () {
            return StageTool.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayTool", {
        /**
         * Bitmap操作相关工具类
         */
        get: function () {
            return DisplayTool.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SoundManager", {
        /**
         * sound声音管理类
         */
        get: function () {
            return SoundManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathTool", {
        /**
         * MathTool数学计算工具类
         */
        get: function () {
            return MathTool.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Dispatch", {
        /**
         * 事件的派发类
         */
        get: function () {
            return Dispatch.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "BtnTool", {
        /**
         * 按钮执行样式
         */
        get: function () {
            return BtnTool.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "VerificationTool", {
        /***
         * 验证工具
         */
        get: function () {
            return VerificationTool.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Http", {
        /**
         * 短链接请求
         */
        get: function () {
            return Http.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化框架
     */
    App.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(GlobalData.myCompany + ":" + GlobalData.myName + " - " + GlobalData.createTime);
                App.StageTool.setFrameRate(60);
                return [2 /*return*/];
            });
        });
    };
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map