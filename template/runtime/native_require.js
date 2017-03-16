
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"resourcemanager/resourcemanager.js",
	"libs/modules/tween/tween.js",
	"polyfill/promise.js",
	"bin-debug/App/base/BaseClass.js",
	"bin-debug/AppMain.js",
	"bin-debug/App/tool/BtnTool.js",
	"bin-debug/App/config/GlobalData.js",
	"bin-debug/App/event/Dispatch.js",
	"bin-debug/App/http/Http.js",
	"bin-debug/App/sound/BaseSound.js",
	"bin-debug/App/sound/SoundManager.js",
	"bin-debug/UI/LoadingUI.js",
	"bin-debug/App/tool/DisplayTool.js",
	"bin-debug/App/tool/MathTool.js",
	"bin-debug/App/tool/StageTool.js",
	"bin-debug/App/tool/StringTool.js",
	"bin-debug/App/tool/VerificationTool.js",
	"bin-debug/App/config/GameConfig.js",
	"bin-debug/Main.js",
	"bin-debug/App/App.js",
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
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
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
		frameRate: 30,
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
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};