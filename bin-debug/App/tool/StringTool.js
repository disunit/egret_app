var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StringTool = (function (_super) {
    __extends(StringTool, _super);
    function StringTool() {
        return _super.call(this) || this;
    }
    /**
     * 插入字符
     * @param  {string} str 要操作的字符串
     * @param  {Array} num 间隔字符要插入的地方
     * @param  {string} add 要插入的字符
     * @returns any
     */
    StringTool.prototype.addStr = function (str, num, add) {
        var strArr = str.split("");
        var len = strArr.length;
        var txt = '';
        var strLen = 0;
        for (var i = 0; i < num.length; i++) {
            txt += str.substr(strLen, num[i]) + (i == num.length - 1 ? "" : add);
            strLen += num[i];
        }
        return txt;
    };
    return StringTool;
}(BaseClass));
__reflect(StringTool.prototype, "StringTool");
//# sourceMappingURL=StringTool.js.map