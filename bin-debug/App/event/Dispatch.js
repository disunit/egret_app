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
 * 事件的派发
 */
var Dispatch = (function (_super) {
    __extends(Dispatch, _super);
    function Dispatch() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Dispatch.prototype, "Event", {
        get: function () {
            return DispatchWith.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return Dispatch;
}(BaseClass));
__reflect(Dispatch.prototype, "Dispatch");
var DispatchWith = (function (_super) {
    __extends(DispatchWith, _super);
    function DispatchWith() {
        return _super.call(this) || this;
        // App.Dispatch.Shared().addEventListener('goPage2', (e:egret.Event)=>{}, this);
        // App.Dispatch.Shared().dispatchEventWith('goMusic', false,[]);
    }
    DispatchWith.getInstance = function () {
        if (this.shared == null) {
            this.shared = new DispatchWith();
        }
        return this.shared;
    };
    return DispatchWith;
}(egret.EventDispatcher));
__reflect(DispatchWith.prototype, "DispatchWith");
//# sourceMappingURL=Dispatch.js.map