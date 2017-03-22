class AppMain extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		App.init();
		this.once(egret.Event.ADDED_TO_STAGE, this.INIT, this);
	}
	protected context3d:any;
	private async INIT(){//开启2D 3D混合模式 注意3D场景始终是在2D场景的下面
		let context3d = new egret3d.Egret3DCanvas(this.stage);
		egret.setRendererContext(context3d);
		this.context3d=context3d;
		await RES.loadConfig();//加载配置文件
		this.RESLOAD();
	}

	protected async RESLOAD(){
		console.log("子类没有重写改方法");
	}
}