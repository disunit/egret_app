var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * by disunit 2017/03/06
 * 数学计算工具类
 */
var MathTool = (function (_super) {
    __extends(MathTool, _super);
    function MathTool() {
        return _super.call(this) || this;
    }
    /**
     * 随机的的生成 有区间 包含了最大值和最小值
     * @param  {number} Min 最小值
     * @param  {number} Max 最大值
     * @returns number
     */
    MathTool.prototype.getRandom = function (Min, Max) {
        return Min + Math.random() * (Max - Min);
    };
    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathTool.prototype.getDistance = function (p1X, p1Y, p2X, p2Y) {
        var disX = p2X - p1X;
        var disY = p2Y - p1Y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    return MathTool;
}(BaseClass));
__reflect(MathTool.prototype, "MathTool");
//# sourceMappingURL=MathTool.js.map