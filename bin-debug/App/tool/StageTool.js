var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * by disunit on 2017/03/03.
 * Stage相关工具类
 */
var StageTool = (function (_super) {
    __extends(StageTool, _super);
    function StageTool() {
        return _super.call(this) || this;
    }
    /**
     * 获取游戏Stage对象
     * @ returns {egret.MainContext}
     */
    StageTool.prototype.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    /**
     * 获取游戏的高度
     * @ returns {number}
     */
    StageTool.prototype.getHeight = function () {
        var a = this.getStage().$stageHeight;
        return a;
    };
    /**
     * 获取游戏宽度
     * @ returns {number}
     */
    StageTool.prototype.getWidth = function () {
        return this.getStage().$stageWidth;
    };
    /**
     * @param {number} value 帧频
     * @returns void
     */
    StageTool.prototype.setFrameRate = function (value) {
        this.getStage().frameRate = value;
    };
    /**
     * 设置同时可触发几个点击事件，
     * @param  {number} value 默认为2
     * @returns void
     */
    StageTool.prototype.setMaxTouches = function (value) {
        this.getStage().maxTouches = value;
    };
    return StageTool;
}(BaseClass));
__reflect(StageTool.prototype, "StageTool");
//# sourceMappingURL=StageTool.js.map