var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Scene = (function () {
    function Scene(context3d) {
        var view = new egret3d.View3D(0, 0, context3d.width, context3d.height);
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
    Scene.prototype.create = function () {
        var texture = RES.getRes("3D/block/block1.png");
        this.view.backImage = texture;
        var geo = new egret3d.CubeGeometry(64, 64, 64);
        var tex = RES.getRes("3D/block/block2.png");
        var mesh = new egret3d.Mesh(geo);
        this.mesh = mesh;
        mesh.material.diffuseTexture = tex;
        mesh.material.ambientColor = 0xb4b4b4;
        mesh.material.gloss = 10;
        mesh.material.specularLevel = 0.5;
        this.view.addChild3D(mesh);
    };
    Scene.prototype.update = function (e) {
        this.cameraCtl.update();
    };
    return Scene;
}());
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map