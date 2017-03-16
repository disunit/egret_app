/**
 * by disunit 2017/03/06
 * 事件的派发
 */
class Dispatch extends BaseClass{
	public constructor() {
		super();
	}

	public get Event():DispatchWith{
		return DispatchWith.getInstance()
	}
}

class DispatchWith extends egret.EventDispatcher{
	private static shared: DispatchWith;
	public static getInstance() {
		if (this.shared == null) {
			this.shared = new DispatchWith();
		}
		return this.shared;
	}
	public constructor(){
		super();
		// App.Dispatch.Shared().addEventListener('goPage2', (e:egret.Event)=>{}, this);
		// App.Dispatch.Shared().dispatchEventWith('goMusic', false,[]);
	}
}