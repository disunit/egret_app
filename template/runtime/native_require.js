
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/egret3d/egret3d.js",
	"libs/modules/tween/tween.js",
	"resourcemanager/resourcemanager.js",
	"polyfill/promise.js",
	"bin-debug/App/base/BaseClass.js",
	"bin-debug/App/AppMain.js",
	"bin-debug/App/sound/SoundManager.js",
	"bin-debug/App/config/GameConfig.js",
	"bin-debug/App/config/GlobalData.js",
	"bin-debug/App/event/Dispatch.js",
	"bin-debug/App/http/Http.js",
	"bin-debug/App/res3d/Res3d.js",
	"bin-debug/App/res3d/ResUtils.js",
	"bin-debug/App/sound/BaseSound.js",
	"bin-debug/App/App.js",
	"bin-debug/App/tool/BtnTool.js",
	"bin-debug/App/tool/DisplayTool.js",
	"bin-debug/App/tool/MathTool.js",
	"bin-debug/App/tool/StageTool.js",
	"bin-debug/App/tool/StringTool.js",
	"bin-debug/App/tool/VerificationTool.js",
	"bin-debug/Main.js",
	"bin-debug/scene/Scene.js",
	"bin-debug/ui/UI.js",
	"bin-debug/ui/UILoading.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1030,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};