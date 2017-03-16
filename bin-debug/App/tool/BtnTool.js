var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BtnTool = (function (_super) {
    __extends(BtnTool, _super);
    function BtnTool() {
        return _super.call(this) || this;
    }
    /**
     * 按下缩小
     * @param  {any} _obj 按下的对象
     * @param  {any} _num 弹起还原的比例
     * @returns void
     */
    BtnTool.prototype.btnSMin = function (_obj, _num) {
        if (_num === void 0) { _num = 1; }
        _obj.touchEnabled = true;
        _obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function btnBegin() {
            egret.Tween.pauseTweens(_obj);
            _obj.scaleX = _obj.scaleY = _num - _num / 10;
        }, this);
        _obj.addEventListener(egret.TouchEvent.TOUCH_END, function btnEnd() {
            egret.Tween.resumeTweens(_obj);
            _obj.scaleX = _obj.scaleY = _num;
        }, this);
        _obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function btnOutside() {
            egret.Tween.resumeTweens(_obj);
            _obj.scaleX = _obj.scaleY = _num;
        }, this);
    };
    return BtnTool;
}(BaseClass));
__reflect(BtnTool.prototype, "BtnTool");
//# sourceMappingURL=BtnTool.js.map