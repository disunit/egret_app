class Http extends BaseClass{
	public constructor() {
		super();
	}
	/**
	 * psot短链接请求
	 * @param  {string} url 请求连接
	 * @param  {any} data 请求发送的参数
	 * @param  {Function} callFun 请求成功的回调
	 * @param  {Function} callFunn 请求失败回调
	 */
	public sendPostMessage(url: string, data: any, callFun: Function = this.sendPostSuccess, callFunn: Function = this.sendPostError) {
        let request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(data);
        request.addEventListener(egret.Event.COMPLETE, callFun, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, callFunn, this);
        // console.warn("消息已发送 ");
    }

	/**
	 * get短链接请求
	 * @param  {string} url 请求连接
	 * @param  {any} data 请求发送的参数
	 * @param  {Function} callFun 请求成功的回调
	 * @param  {Function} callFunn 请求失败回调
	 */
	public sendGetMessage(url: string, data: any, callFun: Function = this.sendPostSuccess, callFunn: Function = this.sendPostError) {
        let request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(data);
        request.addEventListener(egret.Event.COMPLETE, callFun, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, callFunn, this);
        // console.warn("消息已发送 ");
    }

    private sendPostSuccess(event: egret.Event): void {
        // console.warn('消息已发送成功')
    }
    private sendPostError(event: egret.Event): void {
        console.error('消息已发送失败')
    }

	/**
     *demo调用
     */

    // var data: string="name=胡文松&tel=18146712";
    // App.Http.sendPostMessage(get_postUrl(),data,this.isTrue.bind(this),this.error.bind(this));
    // private isTrue(event: egret.Event): void {
    //请求返回的数据
    // var data = <egret.HttpRequest>event.currentTarget;
    // log("get data : "+JSON.parse(data.response).name);
    // alert("提交成功");
    // }
    // private error(): void { 
    //     alert("请重新输入提交");
    // }
}