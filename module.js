// module pattern (same like closers but the difference )

function myName(){
	var myname ='Andrew';
	var myfriend = 'Mike';
	function myfriendName(){
		console.log(myname);
	}
	function myotherfriendName(){
		console.log(myfriend);
	}
	return{
		myfriendName:myfriendName,
		myotherfriendName:myotherfriendName
	};
}
var namm = myName();
namm.myfriendName();
namm.myotherfriendName();