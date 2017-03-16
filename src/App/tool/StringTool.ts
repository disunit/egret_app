class StringTool extends BaseClass{
	public constructor() {
		super();
	}
	/**
	 * 插入字符
	 * @param  {string} str 要操作的字符串
	 * @param  {Array} num 间隔字符要插入的地方
	 * @param  {string} add 要插入的字符
	 * @returns any
	 */
	public addStr(str:string,num:Array<any>,add:string):any{
		let strArr = str.split("");
		let len = strArr.length;
		let txt = '';
        let strLen:number=0;
		for (let i = 0; i < num.length; i++) {
			txt += str.substr(strLen, num[i]) + (i == num.length-1 ? "" : add);
            strLen+=num[i];
		}
		return txt;
	}
}