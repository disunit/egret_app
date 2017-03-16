class BtnTool extends BaseClass {
	public constructor() {
		super();
	}
	
	/** 
	 * 按下缩小
	 * @param  {any} _obj 按下的对象
	 * @param  {any} _num 弹起还原的比例
	 * @returns void
	 */
	public btnSMin(_obj: any, _num = 1): void {
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
	}

}