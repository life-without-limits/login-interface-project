< script type = "text/javascript" >
	window.onload = function() {
		document.getElementById("button").onclick = function() {
			var a = document.getElementById("tel").value;
			var b = document.getElementById("pwd").value;
			var c = document.getElementById("pwd-again").value;
			// Map是一组键值对的结构，具有极快的查找速度
			var map = new Map([
				[a == "", "请输入账号"],
				[b.length < 6, "密码长度不能小于6位"],
				[b != c, "请确认两次密码相同！"]
			]);
			map.forEach(function(value, key) {
				if (key) {
					alert(value);
				}
			});
		};
	} 
</script>
