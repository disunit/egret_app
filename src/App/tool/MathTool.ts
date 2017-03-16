/**
 * by disunit 2017/03/06
 * 数学计算工具类 
 */
class MathTool extends BaseClass {
	public constructor() {
		super();
	}
	
	/**
	 * 随机的的生成 有区间 包含了最大值和最小值
	 * @param  {number} Min 最小值
	 * @param  {number} Max 最大值
	 * @returns number
	 */
	public getRandom(Min: number, Max: number): number {
		return Min + Math.random() * (Max - Min);
	}

	/**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    public getDistance(p1X:number, p1Y:number, p2X:number, p2Y:number):number {
        var disX:number = p2X - p1X;
        var disY:number = p2Y - p1Y;
        var disQ:number = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    }
}