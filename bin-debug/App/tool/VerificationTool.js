var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VerificationTool = (function (_super) {
    __extends(VerificationTool, _super);
    function VerificationTool() {
        return _super.call(this) || this;
    }
    VerificationTool.prototype.telCodeValid = function (code) {
        var tip = "";
        var pass = true;
        var regEx = new RegExp('^((13[0-9])|(15[^4,\\D])|(18[0-9])|(17[0-9]))\\d{8}$');
        if (regEx.test(code) == true) {
            pass = true;
        }
        else {
            pass = false;
            tip = "请输入正确的号码";
        }
        if (!pass) {
            alert(tip);
        }
        ;
        return pass;
    };
    return VerificationTool;
}(BaseClass));
__reflect(VerificationTool.prototype, "VerificationTool");
//# sourceMappingURL=VerificationTool.js.map