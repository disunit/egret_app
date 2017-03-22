class UILoading extends egret.Sprite {
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.create, this);
	}
	private textField: egret.TextField;
	private create(): void {
		let loadBlock = App.DisplayTool.createBitmap("loadBlock_png", 0.5, 0.5);
		loadBlock.x = 320;
		loadBlock.y = 472;
		this.addChild(loadBlock);

		let loadMan = App.DisplayTool.createBitmap("loadMan_png", 0.5, 1);
		loadMan.x = 222;
		loadMan.y = 496;
		this.addChild(loadMan);
		egret.Tween.get(loadMan, { loop: true }).wait(1000).to({ x: 372, y: 521 }, 800, egret.Ease.quadInOut).wait(1000).to({ x: 390, y: 407 }, 800, egret.Ease.quadInOut).wait(1000).to({ x: 222, y: 496 }, 800, egret.Ease.quadInOut)

		this.textField = new egret.TextField();
		this.addChild(this.textField);
		this.textField.textColor = 0x29ebd7;
		this.textField.y = 638;
		this.textField.width = App.StageTool.getWidth();
		this.textField.height = 100;
		this.textField.textAlign = "center";
		this.textField.size = 24;

	}

	public setProgress(str:string="LOADING...",current: number, total: number): void {
		let ct: number = Math.floor((current / total) * 100);
		this.textField.text = str + ct.toString() + "%";
	}
}