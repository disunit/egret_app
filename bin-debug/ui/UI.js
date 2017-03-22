var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UI = (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super.call(this) || this;
        _this.create();
        return _this;
    }
    ;
    UI.prototype.create = function () {
        var UI_rule = App.DisplayTool.createBitmap("UI_rule_png", 0.5, 0.5);
        UI_rule.x = 66;
        UI_rule.y = 75;
        this.addChild(UI_rule);
        UI_rule.touchEnabled = true;
        UI_rule.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(1234);
        }, this);
        var UI_rank = App.DisplayTool.createBitmap("UI_rank_png", 0.5, 0.5);
        UI_rank.x = UI_rule.x;
        UI_rank.y = 75 * 2;
        this.addChild(UI_rank);
        var UI_music = App.DisplayTool.createBitmap("UI_music_png", 0.5, 0.5);
        UI_music.x = UI_rule.x;
        UI_music.y = 75 * 3;
        this.addChild(UI_music);
        var UI_friend = App.DisplayTool.createBitmap("UI_friend_png", 0.5, 0.5);
        UI_friend.x = UI_rule.x;
        UI_friend.y = 75 * 4;
        this.addChild(UI_friend);
        var UI_botten = App.DisplayTool.createBitmap("UI_botten_png", 0.5, 1);
        UI_botten.x = 320;
        UI_botten.y = App.StageTool.getHeight();
        this.addChild(UI_botten);
    };
    return UI;
}(egret.Sprite));
__reflect(UI.prototype, "UI");
//# sourceMappingURL=UI.js.map