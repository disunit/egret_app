 class  Res3d extends BaseClass {
	public constructor() {
		super();
	}
	/**
	 * @param  {string} group 资源组名<里面是3D资源，并且必须放在3D文件夹里面>
	 * @param  {number} num 优先级<未实现>
	 * @param  {Function} callFun 完成一个资源的加载回调一次 <里面有两个参数，(current:number)是当前资源加载好的数量，(total:number)是资源总数>
	 * @param  {number} total
	 */
	public async loadGroup(group: string,num:number, callFun: Function = (current: number, total: number) => { }) {
		await this.load(group, callFun);
	}

	private async load(group: string, callFun: Function = (current: number, total: number) => { }) {
		console.log("组名：",group);
		let _total: number;
		let _current: number = 0;
		let Resutile: Function = () => {
			_current++;
			callFun(_current, _total);
		}
		ResUtils.map(Resutile);
		async function load(resources: string[]) {
			for (let r of resources) {
				await RES.getResAsync(r);
			}
		}
		try {
			await RES.loadConfig();
			let aa = RES.getGroupByName(group);
			_total = aa.length;
			let cc: Array<any>;
			cc = [];
			for (let i = 0; i < _total; i++) {
				cc.push(aa[i]["url"]);
			}

			await load(cc);
		}
		catch (e) {
			console.log(e.message);
		}
	}
}