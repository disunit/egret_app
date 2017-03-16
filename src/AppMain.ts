/**
  * 程序入口
  * by disunit  on 17/03/03.
  * 存放全局的配置数据
  */
class AppMain extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		App.init();
		this.RESLOAD();
	}
    private loadingView: LoadingUI;
	private async RESLOAD(){
		let self = this;
        
        await RES.loadConfig();
        await RES.loadGroup("preload", 0);
        this.init();
        self.loadingView = new LoadingUI();
        self.addChild(this.loadingView);

		let scene: RES.PromiseTaskReporter = {
            onProgress(current: number, total: number) {
                self.loadingView.setProgress(current, total);
            }
        };

        await RES.loadGroup("scene", 1, scene);
        self.RESLOADMUSIC();
        self.startScene();
	}
	private async RESLOADMUSIC() {
        await RES.loadGroup("music", 2);
		this.playMusic();
        //背景声音开始播放
	}
	private playMusic(): void {
        // wxSoundInit();
        // document.addEventListener("WeixinJSBridgeReady", function() {
        //     alert(123456);
        // }, false);
        // var sound = new egret.Sound();
        // if (Math.random() < 0.5) {
        //     sound = RES.getRes("sound.GameSceneBGM_mp3");
        // } else {
        //     sound = RES.getRes("sound.WorldSceneBGM_mp3");
        // }
        // var channel: egret.SoundChannel = sound.play(0, -1);
    }

	/**
     * 子类重写 开始程序
	 * @returns void
	 */
	protected startScene():void{
		console.log("子类没有重写改方法");
	}

	/**
     * 子类重写 preload加载完成后初始化
	 * @returns void
	 */
    protected async init(){
        console.log("子类没有重写改方法");
    }
}