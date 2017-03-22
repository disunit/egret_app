/**
 * by disunit 2017/03/05
 * 显示对象操作工具
 */
class DisplayTool extends BaseClass {
	public constructor() {
		super();
	}


	/**
	 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
	 * @param  {string} _name 资源的名字
	 * @param  {number} anX 设置X的中心点位置
	 * @param  {number} anY 设置Y的中心点位置
	 * @returns egret资源对象
	 */
	public createBitmap(_name: string, anX: number = 0, anY: number = 0): egret.Bitmap {
		let result: egret.Bitmap = new egret.Bitmap();
		let texture: egret.Texture = RES.getRes(_name);
		result.texture = texture;
		result.anchorOffsetX = (anX <= 1 && anX >= 0) ? result.width * anX : anX;
		result.anchorOffsetY = (anY <= 1 && anY >= 0) ? result.height * anY : anY;
		return result;
	}

	/**
	 * 改变某个对象的纹理
	 * @param  {any} _obj 要改的对象
	 * @param  {string} name 要改成的图片键值
	 * @param  {number} anX 设置X轴描点
	 * @param  {number} anY 设置Y轴描点
	 * @returns void
	 */
	public setBitmap(_obj: any, name: string, anX: number = 0, anY: number = 0): void {
		_obj.texture = RES.getRes(name);
		_obj.anchorOffsetX = (anX <= 1 && anX >= 0) ? _obj.width * anX : anX;
		_obj.anchorOffsetY = (anY <= 1 && anY >= 0) ? _obj.height * anY : anY;
	}

	/**
	 * 移除显示对象
	 * @param  {any} _obj 要移除的显示对象
	 * @returns void
	 */
	public removeMc(_obj: any): void {
		if (_obj.parent) {
			_obj.parent.removeChild(_obj);
		}
	}

	public createDrawRect(_type: number, _cwh: Array<number>, anX: number = 0, anY: number = 0): egret.Shape {
		let result: any;
		if (_type == 0) {
			result = new egret.Shape();
		} else if (_type == 1) {
			result = new egret.Sprite();
		}
		result.graphics.beginFill(_cwh[0]);
		result.graphics.drawRect(0, 0, _cwh[1], _cwh[2]);
		result.graphics.endFill();
		result.anchorOffsetX = (anX <= 1 && anX >= 0) ? result.width * anX : anX;
		result.anchorOffsetY = (anY <= 1 && anY >= 0) ? result.height * anY : anY;
		return result;
	}
}