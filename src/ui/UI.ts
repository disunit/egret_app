class UI extends egret.Sprite {
	public constructor() {
		super();
		this.create();
	};
	private create(): void {
		let UI_rule = App.DisplayTool.createBitmap("UI_rule_png", 0.5, 0.5);
		UI_rule.x = 66;
		UI_rule.y = 75
		this.addChild(UI_rule);
		UI_rule.touchEnabled=true;
		UI_rule.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			console.log(1234);
			
		},this)

		let UI_rank = App.DisplayTool.createBitmap("UI_rank_png", 0.5, 0.5);
		UI_rank.x = UI_rule.x;
		UI_rank.y = 75 * 2;
		this.addChild(UI_rank);

		let UI_music = App.DisplayTool.createBitmap("UI_music_png", 0.5, 0.5);
		UI_music.x = UI_rule.x;
		UI_music.y = 75 * 3;
		this.addChild(UI_music);

		let UI_friend = App.DisplayTool.createBitmap("UI_friend_png", 0.5, 0.5);
		UI_friend.x = UI_rule.x;
		UI_friend.y = 75 * 4;
		this.addChild(UI_friend);

		let UI_botten = App.DisplayTool.createBitmap("UI_botten_png", 0.5, 1);
		UI_botten.x = 320;
		UI_botten.y = App.StageTool.getHeight();
		this.addChild(UI_botten);
	}
}