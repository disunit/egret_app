module ResUtils {
	function promisify(loader: egret3d.UnitLoader, url: string) {
		return new Promise((reslove, reject) => {
			loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, () => {
				reslove(loader.data);
			}, this);

			loader.load("resource/" + url);
		});
	}


	export function map(callFun) {
		RES.processor.map("disunit", {
			onLoadStart: async (host, resource) => {
				// console.log(resource);
				callFun();
				var loader = new egret3d.UnitLoader();
				return promisify(loader, resource.url)
			},
			onRemoveStart: async (host, resource) => Promise.resolve()
		});
	}
}