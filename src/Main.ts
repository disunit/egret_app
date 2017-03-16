@RES.mapConfig("config.json", () => "resource", path => {
    var ext = path.substr(path.lastIndexOf(".") + 1);
    var typeMap = {
        "jpg": "image",
        "png": "image",
        "webp": "image",
        "json": "json",
        "fnt": "font",
        "pvr": "pvr",
        "mp3": "sound"
    }
    var type = typeMap[ext];
    if (type == "json") {
        if (path.indexOf("sheet") >= 0) {
            type = "sheet";
        } else if (path.indexOf("movieclip") >= 0) {
            type = "movieclip";
        };
    }
    return type;
})
class Main extends AppMain {
    public constructor() {
        super();
    }

    /**
     * 重写父类方法 开始程序
     */
    protected startScene() {
        console.log("程序开始");
        let bg=App.DisplayTool.createBitmap("bg_jpg");
        this.addChild(bg);
    }
}


