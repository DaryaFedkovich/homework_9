function alertGo(){
	this.error = function(){
		var div = document.createElement('div');
		div.className = 'alert alert-success';
		div.innerHTML = 'Сообщение об ошибке';
		div.style.cssText = "position: fixed; background-color: #ff8973; color: #a60c00; font-weight: bold; font-size: 18px; left: 80%; top: 5%; width: 300px; padding: 20px; text-align: center; border-radius: 15px;";
		document.body.appendChild(div);

		setTimeout(function(){
			document.body.removeChild(div);
		}, 5000);

		//this.alert();
	};
	this.alert = function(){
		var div2 = document.createElement('div');
		div2.className = 'alert alert-success';
		div2.innerHTML = 'Привет Мир!';

		div2.style.cssText = "position: fixed; background-color: #d1d1d1; color: #2219b2; font-weight: bold; font-size: 18px; left: 80%; top: 12%; width: 300px; padding: 20px; text-align: center; border-radius: 15px;";

		document.body.appendChild(div2);

		setTimeout(function(){
			document.body.removeChild(div2);
		}, 5000);
		//this.msg();
	};
	this.msg = function(){
		var div3 = document.createElement('div');
		div3.className = 'alert alert-success';
		div3.innerHTML = 'Ваше сообщение отправлено!';

		div3.style.cssText = "position: fixed; background-color: #62da97; color: #007633; font-weight: bold; font-size: 18px; left: 80%; top: 19%; width: 300px; padding: 20px; text-align: center; border-radius: 15px;";

		document.body.appendChild(div3);

		setTimeout(function(){
			document.body.removeChild(div3);
		}, 5000);
	};
};
var alertGoQ = new alertGo();
alertGoQ.error();
setTimeout(function(){
	alertGoQ.alert();
}, 5000);
//alertGoQ.alert();
setTimeout(function(){
	alertGoQ.msg();
}, 10000);
//alertGoQ.msg();

