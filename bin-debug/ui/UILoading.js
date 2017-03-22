var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UILoading = (function (_super) {
    __extends(UILoading, _super);
    function UILoading() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.create, _this);
        return _this;
    }
    UILoading.prototype.create = function () {
        var loadBlock = App.DisplayTool.createBitmap("loadBlock_png", 0.5, 0.5);
        loadBlock.x = 320;
        loadBlock.y = 472;
        this.addChild(loadBlock);
        var loadMan = App.DisplayTool.createBitmap("loadMan_png", 0.5, 1);
        loadMan.x = 222;
        loadMan.y = 496;
        this.addChild(loadMan);
        egret.Tween.get(loadMan, { loop: true }).wait(1000).to({ x: 372, y: 521 }, 800, egret.Ease.quadInOut).wait(1000).to({ x: 390, y: 407 }, 800, egret.Ease.quadInOut).wait(1000).to({ x: 222, y: 496 }, 800, egret.Ease.quadInOut);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.textColor = 0x29ebd7;
        this.textField.y = 638;
        this.textField.width = App.StageTool.getWidth();
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.size = 24;
    };
    UILoading.prototype.setProgress = function (str, current, total) {
        if (str === void 0) { str = "LOADING..."; }
        var ct = Math.floor((current / total) * 100);
        this.textField.text = str + ct.toString() + "%";
    };
    return UILoading;
}(egret.Sprite));
__reflect(UILoading.prototype, "UILoading");
//# sourceMappingURL=UILoading.js.map