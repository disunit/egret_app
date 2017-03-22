class Scene {
	// View3D操作对象
	protected view: egret3d.View3D;

	/**
    * look at 摄像机控制器 。</p>
    * 指定摄像机看向的目标对象。</p>
    * 1.按下鼠标左键并移动鼠标可以使摄像机绕着目标进行旋转。</p>
    * 2.按下键盘的(w s a d) 可以摄像机(上 下 左 右)移动。</p>
    * 3.滑动鼠标滚轮可以控制摄像机的视距。</p>
    */
	private cameraCtl: egret3d.LookAtController;
	public constructor(context3d: egret3d.Egret3DCanvas) {
		let view = new egret3d.View3D(0, 0, context3d.width, context3d.height);
		view.camera3D.lookAt(new egret3d.Vector3D(0, 1000, -1000), new egret3d.Vector3D(0, 0, 0));
		view.backColor = 0x14141418;

		context3d.addView3D(view);
		this.view = view;

		this.cameraCtl = new egret3d.LookAtController(view.camera3D, new egret3d.Object3D());
		this.cameraCtl.lookAtObject.y = 100;

		this.cameraCtl.distance = 500;
		this.cameraCtl.rotationX = 30;
		this.cameraCtl.rotationY = 180;
		context3d.addEventListener(egret3d.Event3D.ENTER_FRAME, this.update, this);
	}

	private cube: egret3d.Mesh;

	protected lights: egret3d.LightGroup;
	protected dirLight: egret3d.DirectLight;
	private mesh: egret3d.Mesh;
	public create(): void {
		let texture = RES.getRes("3D/block/block1.png");
        this.view.backImage = texture;
		
        let geo: egret3d.CubeGeometry = new egret3d.CubeGeometry(64, 64, 64);
        var tex: egret3d.ITexture = RES.getRes("3D/block/block2.png");
        var mesh = new egret3d.Mesh(geo);
        this.mesh = mesh;
        mesh.material.diffuseTexture = tex;
        mesh.material.ambientColor = 0xb4b4b4;
        mesh.material.gloss = 10;
        mesh.material.specularLevel = 0.5;
        this.view.addChild3D(mesh)
	}

	protected update(e: egret3d.Event3D) {
		this.cameraCtl.update();
	}
}