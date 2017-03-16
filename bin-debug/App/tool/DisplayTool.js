var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * by disunit 2017/03/05
 * 显示对象操作工具
 */
var DisplayTool = (function (_super) {
    __extends(DisplayTool, _super);
    function DisplayTool() {
        return _super.call(this) || this;
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * @param  {string} name 资源的名字
     * @param  {number} anX 设置X的中心点位置
     * @param  {number} anY 设置Y的中心点位置
     * @returns egret资源对象
     */
    DisplayTool.prototype.createBitmap = function (name, anX, anY) {
        if (anX === void 0) { anX = 0; }
        if (anY === void 0) { anY = 0; }
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        result.anchorOffsetX = (anX <= 1 && anX >= 0) ? result.width * anX : anX;
        result.anchorOffsetY = (anY <= 1 && anY >= 0) ? result.height * anY : anY;
        return result;
    };
    /**
     * 改变某个对象的纹理
     * @param  {any} _obj 要改的对象
     * @param  {string} name 要改成的图片键值
     * @param  {number} anX 设置X轴描点
     * @param  {number} anY 设置Y轴描点
     * @returns void
     */
    DisplayTool.prototype.setBitmap = function (_obj, name, anX, anY) {
        if (anX === void 0) { anX = 0; }
        if (anY === void 0) { anY = 0; }
        _obj.texture = RES.getRes(name);
        _obj.anchorOffsetX = (anX <= 1 && anX >= 0) ? _obj.width * anX : anX;
        _obj.anchorOffsetY = (anY <= 1 && anY >= 0) ? _obj.height * anY : anY;
    };
    /**
     * 移除显示对象
     * @param  {any} _obj 要移除的显示对象
     * @returns void
     */
    DisplayTool.prototype.removeMc = function (_obj) {
        if (_obj.parent) {
            _obj.parent.removeChild(_obj);
        }
    };
    DisplayTool.prototype.createDrawRect = function (_type, _cwh, anX, anY) {
        if (anX === void 0) { anX = 0; }
        if (anY === void 0) { anY = 0; }
        var result;
        if (_type == 0) {
            result = new egret.Shape();
        }
        else if (_type == 1) {
            result = new egret.Sprite();
        }
        result.graphics.beginFill(_cwh[0]);
        result.graphics.drawRect(0, 0, _cwh[1], _cwh[2]);
        result.graphics.endFill();
        result.anchorOffsetX = (anX <= 1 && anX >= 0) ? result.width * anX : anX;
        result.anchorOffsetY = (anY <= 1 && anY >= 0) ? result.height * anY : anY;
        return result;
    };
    return DisplayTool;
}(BaseClass));
__reflect(DisplayTool.prototype, "DisplayTool");
//# sourceMappingURL=DisplayTool.js.map