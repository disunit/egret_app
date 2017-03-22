@RES.mapConfig("config.json", () => "resource", path => {
    var ext = path.substr(path.lastIndexOf(".") + 1);
    var type = "";
    if (path.indexOf("3D") >= 0) {//添加了自定义数据解析
        type = "disunit";
    } else {
        let typeMap = {
            "jpg": "image",
            "png": "image",
            "webp": "image",
            "json": "json",
            "fnt": "font",
            "pvr": "pvr",
            "mp3": "sound"
        }
        type = typeMap[ext];
        if (type == "json") {
            if (path.indexOf("sheet") >= 0) {
                type = "sheet";
            } else if (path.indexOf("movieclip") >= 0) {
                type = "movieclip";
            };
        }
    }
    return type;
})
/**
 * 资源加载使用了新版的加载框架
 * 如有不会请移步到A闪的教程http://www.ashan.org/archives/945
 */
class Main extends AppMain {
	constructor() {
		super();
	}

	protected async RESLOAD() {//继承自AppMain
		await RES.loadGroup("preload", 0);//开始加载资源组
		
		let loading = new UILoading();//添加loading页面
		this.addChild(loading);

		let UI2D_scene: RES.PromiseTaskReporter = {//2DUI资源组加载回调
			onProgress(current: number, total: number) {
				loading.setProgress("LOADING...",current, total);
			}
		};
		await RES.loadGroup("2DUI", 1, UI2D_scene);//开始加载2DUI资源组

        let scene:Function=(current: number, total: number)=>{
            loading.setProgress("场景加载中...",current, total);
        }
        let aa:Function=(current: number, total: number)=>{
            loading.setProgress("场景加载中...",current, total);
        }
        await App.Res3d.loadGroup("scene",0,scene);//3D资源加载 用法和官方的RES.loadGroup一样；
        await App.Res3d.loadGroup("test",0,aa);


		let game = new Scene(this.context3d);//创建3D场景  this.context3d继承自AppMain

		let ui = new UI(); //创建3D场景中的UI
		this.addChild(ui);
		ui.alpha=0;
		egret.Tween.get(loading).to({ alpha: 0 }, 800, egret.Ease.quadOut).call(() => {
			App.DisplayTool.removeMc(loading);
			game.create();//显示3D场景
		});
		egret.Tween.get(ui).wait(700).to({ alpha: 1 }, 800, egret.Ease.quadOut);
	}
}