/**
 * by disunit on 2017/03/03.
 * 框架入口
 */
class App {

	/**
     * Stage操作相关工具类
     */
	public static get StageTool(): StageTool {
		return StageTool.getInstance();
	}

	/**
	 * Bitmap操作相关工具类
	 */
	public static get DisplayTool(): DisplayTool {
		return DisplayTool.getInstance();
	}

	/**
	 * sound声音管理类
	 */
	public static get SoundManager(): SoundManager {
		return SoundManager.getInstance();
	}

	/**
	 * MathTool数学计算工具类
	 */
	public static get MathTool(): MathTool {
		return MathTool.getInstance();
	}

	/**
	 * 事件的派发类
	 */
	public static get Dispatch(): Dispatch {
		return Dispatch.getInstance()
	}

	/**
	 * 按钮执行样式
	 */
	public static get BtnTool():BtnTool{
		return BtnTool.getInstance();
	}

	/***
	 * 验证工具
	 */
	public static get VerificationTool():VerificationTool{
		return VerificationTool.getInstance();
	}

	/**
	 * 短链接请求
	 */
	public static get Http():Http{
		return Http.getInstance();
	}
	
	/**
	 * 3D项目的分组资源加载
	 */
	public static get Res3d():Res3d{
		return Res3d.getInstance();
	}
	

	/**
	 * 初始化框架
	 */
	public static async init() {
		console.log("github:",GlobalData.myCompany,'\n------:',GlobalData.myQQ,'\n------:',GlobalData.myMail);
		App.StageTool.setFrameRate(60);
		App.StageTool.setMaxTouches(1);
	}
}