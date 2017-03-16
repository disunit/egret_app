class VerificationTool extends BaseClass {
	public constructor() {
		super();
	}

	public telCodeValid(code): boolean {
		var tip = "";
		var pass = true;
		var regEx: RegExp = new RegExp('^((13[0-9])|(15[^4,\\D])|(18[0-9])|(17[0-9]))\\d{8}$');
		if (regEx.test(code) == true) {
			pass = true;
		} else {
			pass = false;
			tip = "请输入正确的号码";
		}
		if (!pass) {
			alert(tip);
		};
		return pass;
	}
}