var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Http = (function (_super) {
    __extends(Http, _super);
    function Http() {
        return _super.call(this) || this;
    }
    /**
     * psot短链接请求
     * @param  {string} url 请求连接
     * @param  {any} data 请求发送的参数
     * @param  {Function} callFun 请求成功的回调
     * @param  {Function} callFunn 请求失败回调
     */
    Http.prototype.sendPostMessage = function (url, data, callFun, callFunn) {
        if (callFun === void 0) { callFun = this.sendPostSuccess; }
        if (callFunn === void 0) { callFunn = this.sendPostError; }
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(data);
        request.addEventListener(egret.Event.COMPLETE, callFun, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, callFunn, this);
        // console.warn("消息已发送 ");
    };
    /**
     * get短链接请求
     * @param  {string} url 请求连接
     * @param  {any} data 请求发送的参数
     * @param  {Function} callFun 请求成功的回调
     * @param  {Function} callFunn 请求失败回调
     */
    Http.prototype.sendGetMessage = function (url, data, callFun, callFunn) {
        if (callFun === void 0) { callFun = this.sendPostSuccess; }
        if (callFunn === void 0) { callFunn = this.sendPostError; }
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(data);
        request.addEventListener(egret.Event.COMPLETE, callFun, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, callFunn, this);
        // console.warn("消息已发送 ");
    };
    Http.prototype.sendPostSuccess = function (event) {
        // console.warn('消息已发送成功')
    };
    Http.prototype.sendPostError = function (event) {
        console.error('消息已发送失败');
    };
    return Http;
}(BaseClass));
__reflect(Http.prototype, "Http");
//# sourceMappingURL=Http.js.map