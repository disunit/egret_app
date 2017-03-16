/**
 * by disunit on 2017/03/03.
 * Stage相关工具类
 */
class StageTool  extends BaseClass {
	public constructor() {
		super();
	}

	/**
     * 获取游戏Stage对象
     * @ returns {egret.MainContext}
     */
    public getStage():egret.Stage {
        return egret.MainContext.instance.stage;
    }

	/**
     * 获取游戏的高度
     * @ returns {number}
     */
    public getHeight():number {
		let a=this.getStage().$stageHeight
        return a;
    }

    /**
     * 获取游戏宽度
     * @ returns {number}
     */
    public getWidth():number {
        return this.getStage().$stageWidth;
    }
    
    
    /**
     * @param {number} value 帧频
     * @returns void
     */
    public setFrameRate(value:number):void {
        this.getStage().frameRate = value;
    }

    /**
     * 设置同时可触发几个点击事件，
     * @param  {number} value 默认为2
     * @returns void
     */
    public setMaxTouches(value:number):void {
        this.getStage().maxTouches = value;
    }
}