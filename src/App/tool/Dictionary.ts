/**
 * 字典类，用来储存键值关系
 */
class Dictionary extends BaseClass {
	public constructor() {
		super();
	}
	private data: Array<any> = new Array();

	/**
	 * 获取键对应的值
	 */
	public get(key: any): any {
		return this.data[key];
	}

	/**
	 * 设置键值
	 */
	public set(key: any, value: any): void {
		this.data[key] = value;
	}

	/**
	 * 移除对应的键的值
	 */
	public remove(key: any): void {
		this.data[key] = null;
	}

	/**
	 * 清空字典
	 */
	public removeAll():void{
		this.data=null;
	}

	/**
	 * 判读是否为空
	 */
	public isEmpty(): boolean {
		return this.data.length == 0;
	}

	/**
	 * 获取当前字典有多长
	 */
	public size(): number {
		return this.data.length;
	}
}
