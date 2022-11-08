var lastColor,
	newColorSet = false,
	onPreview = false,
	editOpen = false,
	subreddit = "earthporn",
	errorLog = 0,
	offline = false,
	calenderIds = [],
	calVal = 1,
	calQue = 1,
	calToday = false,
	calOpts = ["Next", "Custom count", "Only if today", "None"],
	a;
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
	toggleSettings();
	document.title = "localost";
}
$(document).ready(function () {
	body = document.querySelector('body');

	window.addEventListener('offline', function () {
		console.log('You are offline, oops.');
		body.classList.toggle('offline');
		offline = true;
	});

	window.addEventListener('online', function () {
		console.log('Hey there, you are back');
		body.classList.toggle('offline');
		offline = false;
	});
	var cookies = $.cookie();
	/* for (var cookie in cookies) {
		if (!["cookiebaseColor"
			, "cookietextColor"
			, "cookiebgColor"
			, "cookiePickbaseColor"
			, "cookiePicktextColor"
			, "cookiePickbgColor"
			, "sortBy"
			, "sub"
			, "_ga"
			, "_gat_gtag_UA_96116337_2"
			, "_gid"
			, "G_ENABLED_IDPS"
			, "G_AUTHUSER_H"
			, "calValue"
			, "redditImage"
			, "visits"].includes(cookie)) {
			if (cookie.substr(cookie.length - 5) != "_time") {
				todolist.todo.push({ id: todolist.todo.length + 6, label: $.cookie(cookie), done: false, time: $.cookie(cookie + "_time"), cal: false });
			}
				
		}
	} */
	//Enable toggle
	$('.cb-value').click(function () {
		var mainParent = $(this).parent('.toggle-btn');
		if ($(mainParent).find('input.cb-value').is(':checked')) {
			$(mainParent).addClass('active');
			$("#redditC").removeClass("hidden");
			$("#subredditInput").prop('disabled', false);
			$.cookie('redditImage', 'active', { expires: 365 * 10 });
		} else {
			$(mainParent).removeClass('active');
			$("#redditC").addClass("hidden");
			$("#subredditInput").prop('disabled', true);
			$.cookie('redditImage', 'deactive', { expires: 365 * 10 });
		}
	});
	//Disable reddit icon
	if ($.cookie('redditImage') != undefined) {
		if ($.cookie('redditImage') == "deactive") {
			$("#redToggle").removeClass('active');
			$("#subredditInput").prop('disabled', true).trigger("click");
			$("#redditC").addClass("hidden");
		}
	}
	if ($.cookie('sub') != undefined) {
		subreddit = $.cookie('sub');
		$("#subredditInput").val(subreddit);
	}
	
	getImgRed(subreddit);
	//Check colors
	if ($.cookie('cookiebaseColor') != undefined)
		colorUpdate("baseColor", "background-color", $.cookie('cookiebaseColor'), true);
	if ($.cookie('cookietextColor') != undefined)
		colorUpdate("textColor", "color", $.cookie('cookiePicktextColor'), true);
	if ($.cookie('cookiebgColor') != undefined)
		colorUpdate("bgColor", "background-color", $.cookie('cookiebgColor'), true);
	//Check palette
	if ($.cookie('cookiePickbaseColor') != undefined)
		updatePalette("baseColor", $.cookie('cookiePickbaseColor'));
	if ($.cookie('cookiePicktextColor') != undefined)
		updatePalette("textColor", $.cookie('cookiePicktextColor'));
	if ($.cookie('cookiePickbgColor') != undefined)
		updatePalette("bgColor", $.cookie('cookiePickbgColor'));

	
	//Set li color all the time
	var check, 
		liLength;
	//Clear interval
	check = "0";
	function start() {
		check = setInterval(function () {
			clock();
		}, 1000);
	}

	//oFFLINE
	body = document.querySelector('body');
	window.addEventListener('offline', function () {
		console.log('You are offline, oops.');
		body.classList.toggle('offline');
		offline = true;
	});
	window.addEventListener('online', function () {
		console.log('Hey there, you are back');
		body.classList.toggle('offline');
		offline = false;
	});
	start();
});
function clock() {
	//Takes clock and sets hour and minute. Then sec0nds as an attribute to the clock element. 
	$("#clock").text(moment().format("k:mm")).attr("data-end", ":" + oThat(moment().second()));
	$("#date").text(moment().format("dddd, MMMM Do"));
}

//Select
var Navegador_ = (window.navigator.userAgent || window.navigator.vendor || window.opera),
		Firfx = /Firefox/i.test(Navegador_),
		Mobile_ = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(Navegador_),
	FirfoxMobile = (Firfx && Mobile_);
var li = new Array();
function crear_select() {
	var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
	var select_ = '';
	for (var e = 0; e < div_cont_select.length; e++) {
		div_cont_select[e].setAttribute('data-indx-select', e);
		div_cont_select[e].setAttribute('data-selec-open', 'false');
		var ul_cont = document.querySelectorAll("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
		select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];
		if (Mobile_ || FirfoxMobile) {
			select_.addEventListener('change', function () {
				_select_option(select_.selectedIndex, e);
			});
		}
		var select_optiones = select_.options;
		document.querySelectorAll("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute('data-n-select', e);
		document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);
		for (var i = 0; i < select_optiones.length; i++) {
			li[i] = document.createElement('li');
			if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
				li[i].className = 'active';
				document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
			};
			li[i].setAttribute('data-index', i);
			li[i].setAttribute('data-selec-index', e);
			// funcion click al selecionar 
			li[i].addEventListener('click', function () { _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index')); });

			li[i].innerHTML = select_optiones[i].innerHTML;
			ul_cont[0].appendChild(li[i]);

		}; // Fin For select_optiones
	}; // fin for divs_cont_select
} // Fin Function 
var cont_slc = 0;
function open_select(idx) {
	var idx1 = idx.getAttribute('data-n-select');
	var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
	var hg = 0;
	var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
	var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];
	if (Mobile_ || FirfoxMobile) {
		if (window.document.createEvent) { // All
			var evt = window.document.createEvent("MouseEvents");
			evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			slect_element_open.dispatchEvent(evt);
		} else if (slect_element_open.fireEvent) { // IE
			slect_element_open.fireEvent("onmousedown");
		}
	} else {


		for (var i = 0; i < ul_cont_li.length; i++) {
			hg += ul_cont_li[i].offsetHeight;
		};
		if (slect_open == 'false') {
			document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
			document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = hg + "px";
			document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
		} else {
			document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
			document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
			document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
		}
	}

} // fin function open_select
function salir_select(indx) {
	var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
	document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
	document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
	document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
}
function _select_option(indx, selc) {
	if (Mobile_ || FirfoxMobile) {
		selc = selc - 1;
	}
	var select_ = document.querySelectorAll("[data-indx-select='" + selc + "'] > select")[0];

	var li_s = document.querySelectorAll("[data-indx-select='" + selc + "'] .cont_select_int > li");
	var p_act = document.querySelectorAll("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
	var select_optiones = document.querySelectorAll("[data-indx-select='" + selc + "'] > select > option");
	for (var i = 0; i < li_s.length; i++) {
		if (li_s[i].className == 'active') {
			li_s[i].className = '';
		};
		li_s[indx].className = 'active';

	};
	select_optiones[indx].selected = true;
	select_.selectedIndex = indx;
	select_.onchange();
	salir_select(selc);
}

/*Open settings*/
function toggleSettings() {
	$('#settingsW').toggleClass('settings-out');
	$("#settingsB").toggleClass('settingsX');
	$("#settingsB").css('color', 'white');
	$("#textColorPick").trigger('onchange');
	if ($('#settingsB').text() == 'SETTINGS') $('#settingsB').html('&#x2716;')
	else $('#settingsB').text('SETTINGS');
}

/*Update timestap*/
function updateSince(id, ret) {
	if (ret) {
		return moment(id, "YYYYMMDDHHmm").fromNow();
	}
	else {
		var time = $(id).find(".timeStampDate").text();
		$(id).find(".timeStamp").text(moment(time, "YYYYMMDDHHmm").fromNow());
	}
}

//ToDolist Components
Vue.component('togglebutton', {
	props: ['label', 'name'],
	template: `<div class="togglebutton-wrapper textColor" v-bind:class="isactive ? 'togglebutton-checked' : ''">
      <label v-bind:for="name">
        <span class="togglebutton-label">{{ label }}</span>
        <span class="tooglebutton-box"></span>
      </label>
      <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isactive" v-on:change="onToogle">
  </div>`,
	model: {
		prop: 'checked',
		event: 'change'
	},
	data: function () {
		if ($.cookie("sortBy") == "true" || $.cookie("sortBy") == true) {
			return { isactive: true }
		}
		else if ($.cookie("sortBy") == "false" || $.cookie("sortBy") == false) {
			return { isactive: false }
		}
		else
			return { isactive: false }
	},
	methods: {
		onToogle: function () {
			this.$emit('clicked', this.isactive);
		}
	}
});
var todolist = new Vue({
	el: '#todolist',
	data: {
		newitem: '',
		sortByStatus: false,
		todo: [
		]
	},
	methods: {
		addItem: function () {
			if (this.newitem != "") {
				var timeStampVar = oThat(moment().year()) + oThat(moment().month() + 1) + oThat(moment().date()) + oThat(moment().hours()) + oThat(moment().minutes());
				this.todo.push({ id: Math.floor(Math.random() * 9999) + 10, label: this.newitem, done: false, time: timeStampVar, cal: false});
				$.cookie(this.newitem.replace(/\s+/g, '-').toLowerCase() + "_time", timeStampVar, { expires: 365 * 10 });
				$.cookie(this.newitem.replace(/\s+/g, '-').toLowerCase(), this.newitem, { expires: 365 * 10 });
				this.newitem = '';
			}
		},
		markAsDoneOrUndone: function (item) {
			item.done = !item.done;
			var str = item.label;
			str = str.replace(/\s+/g, '-').toLowerCase();
			if (item.done == true) {
				$.removeCookie(str);
				$.removeCookie(str + "_time");
			}
			else {
				$.cookie(str, item.label, { expires: 365 * 10 });
				$.cookie(str + "_time", item.time, { expires: 365 * 10 });
			}

		},
		deleteItemFromList: function (item) {
			let index = this.todo.indexOf(item)
			this.todo.splice(index, 1);
			var str = item.label;
			str = str.replace(/\s+/g, '-').toLowerCase();
			$.removeCookie(str);
			$.removeCookie(str + "_time");
		},
		clickontoogle: function (active) {
			this.sortByStatus = active;
			$.cookie("sortBy", active, { expires: 365 * 10 });
		}
	},
	computed: {
		todoByStatus: function () {

			if (!this.sortByStatus) {
				return this.todo;
			}

			var sortedArray = []
			var doneArray = this.todo.filter(function (item) { return item.done; });
			var notDoneArray = this.todo.filter(function (item) { return !item.done; });

			sortedArray = [...notDoneArray, ...doneArray];
			return sortedArray;
		}
	}
});
function oThat(time) {
	if (time.toString().length == 1)
		return 0 + time.toString();
	else
		return time.toString();
}

//OnFineChange trigger update in input
function colorUpdateInit(id) {
	$("#" + id.valueElement.id).trigger('onchange');
}
//on update change color to the value of input
function colorUpdate(id, type, color, set) {
	if (!onPreview) {
		$("#html").find("." + id).css(type, "#" + color);
		if (set) {
			newColorSet = true;
			$("#" + id + "Pick").val(color);
			$("#" + id + "Pick").css("border-color","#" + color);
		}
		if (id == "baseColor") {
			document.getElementById("linkIco").href = "https://dummyimage.com/16/" + color + "/" + color;
			$("#html").find(".taskPlace").css("color", "#" + color);
			$("#html").find(".taskSubmit").css("background", "#" + color);
			$("#html").find(".taskInput").css("border-color", "#" + color);
			$("#html").find(".calLi").css("border-color", "#" + color);
		}
		else if (id == "textColor") {
			$("#html").find(".label").css("color", "#" + color);
			$("#html").find("h1").css("color", "#" + color);
		}
		$.cookie('cookie' + id, color, { expires: 365 * 10 });
	}
}

//Open edit palette
function editPal(id) {
	if(id != "baseColorPal")
		$("#baseColorPal").removeClass("paletteExtend");
	if(id != "textColorPal")
		$("#textColorPal").removeClass("paletteExtend");
	if(id != "bgColorPal")
		$("#bgColorPal").removeClass("paletteExtend");

	$("#" + id).toggleClass("paletteExtend");
	if (!editOpen || !$("#" + id).hasClass("paletteExtend")) {
		$(".paletteC").toggleClass("paletteCExtend");
		editOpen = !editOpen;
	}

}

//Set color Palette
function updatePalette(id, color) {
	if (color != undefined)
		var col = "#" + color;
	else
		var col = "#" + $("#" + id + "Pick").val();
	$("#" + id + "Pal").attr('title', col);
	$("#" + id + "Q").css("background", col);
	$("#" + id + "Hex").text(col);
	$("#" + id + "Rgb").text('rgb(' + hexToRgb(col).r + ',' + hexToRgb(col).g + ',' + hexToRgb(col).b + ')');
	$.cookie('cookiePick' + id, col.slice(1), { expires: 365 * 10 });
}

//Reddit
function getImgRed(sub) {
	subreddit = sub;
	$.cookie('sub', sub, { expires: 365 * 10 });
	//$("#subredditInput").val(subreddit);
	$("#redditLoading").addClass("loadingProgress");
	var aRandomNum = Math.floor((Math.random() * 25) + 1); // A random number - range 25
	$.getJSON('http://www.reddit.com/r/' + sub + '.json?jsonp=?&show=all&limit=25', function (data) {
		$.each(data.data.children, function (i, item) {
			if (i == aRandomNum && errorLog < 6) {
				$('#redditSelf').html("");
				$("#redditLoading").text("Loading").
									css("background", "#424242");
				$("#redditImg").attr("src", item.data.url).
								css("visibility", "visible").
								css("height", "unset").
								attr("onclick", "openInNewTab('https://www.reddit.com" + item.data.permalink + "')").
								on('error', function () { errorFunc(item.data); }).
								on('load', function () { $("#redditLoading").removeClass("loadingProgress") });
				$("#redditCaption").text(shorten(item.data.title));
				$("#redditC").on('mouseenter', function () { $("#redditCaption").text(item.data.title).css("height", "auto"); }).
							  on('mouseleave', function () { $("#redditCaption").text(shorten(item.data.title)).css("height", "1.9rem"); });
				$("#redditDate").text("by " + item.data.author).
                               attr("onclick", "openInNewTab('https://www.reddit.com/u/" + item.data.author + "')");
			}
			else if(errorLog >= 6)
				$("#redditLoading").text("Error - Try another subreddit").
									css("background", "#F44336");
		});
	});
}
//
function errorFunc(id) {
	if (id.post_hint == "image") {
		errorLog++;
		getImgRed($("#subredditInput").val().toString());
	}
	else {
		$("#redditImg").css("visibility", "hidden").
						css("height", 0);
		$("#redditLoading").removeClass("loadingProgress")
		$("#redditCaption").text(id.title).
							css("height", "auto");
		$('#redditC').unbind('mouseenter');
		$('#redditC').unbind('mouseleave');
		if(id.selftext)
			$('#redditSelf').html(id.selftext);
		else
			$('#redditSelf').html("");

	}
}
//id.substr(id.length - 4)
function ifGifv(id) {
	return id;
}

// Returners
//Open image in new tab on click
function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
//Shorten input
function shorten(str) {
	str = str.toString();
	if (str.length > 40) return str.substring(0, 40) + "...";
	else return str;
}
//Convertion tools
function rgb2hex(rgb) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}
//Handle ripples in material button
$(function () {
	var taint, d, x, y;
	$(".material-button").click(function (e) {
		if ($(this).find(".taint").length == 0) {
			$(this).prepend("<span class='taint'></span>")
		}
		taint = $(this).find(".taint");
		taint.removeClass("drop");
		if (!taint.height() && !taint.width()) {
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			taint.css({ height: d, width: d });
		}
		x = e.pageX - $(this).offset().left - taint.width() / 2;
		y = e.pageY - $(this).offset().top - taint.height() / 2;
		taint.css({ top: y + 'px', left: x + 'px' }).addClass("drop");
	});
});

/*
 * Google auth
 * Calender, google plus
 */
//Google get info 
//Selector state
function calenderState(state) {
	calVal = state;
	$("#CalCustomInput").remove();
	$.cookie('calValue', state, { expires: 365 * 10 });
	deleteCalItem();
	calenderIds = [];
	if (state == 1) {
		calQue = 1;
		calToday = false;
	}
	else if (state == 2) {
		calQue = 2;
		calToday = false;
		$(".select_mate").after("<input type='number' onchange='customCal(this.value)' id='CalCustomInput' min='1' max='9' value='2'/>");
	}
	else if (state == 3) {
		calQue = 1;
		calToday = true;
	}
	else if (state == 4) {
		calQue = "stop";
		calToday = false;
	}
	$(".selecionado_opcion").text(calOpts[state - 1]);
	$("#calToggle").removeClass("noCalEvent");
	a = "";
	listUpcomingEvents(calQue, calToday);
}
//Custom number function
function customCal(num) {
	num = parseInt(num);
	deleteCalItem();
	calenderIds = [];
	a = '';
	listUpcomingEvents(num, false);
}
//Detele listed calender
function deleteCalItem() {
	for (var i = 0; i < todolist.todo.length; i++) {
		if (todolist.todo[i].id.length > 12)
			todolist.todo.shift();
	}
	for (var i = 0; i < todolist.todo.length; i++) {
		if (todolist.todo[i].id.length > 12)
			todolist.todo.shift();
	}
}
function onSignIn(googleUser) {
	window.location.replace("http://oliver-brodersen.com/Application/todo/logged_in/");
	// Useful data for your client-side scripts:
	var profile = googleUser.getBasicProfile();
	//Create paper
	$("#authorize-button").after("<div id='id-card'><img src='" + profile.getImageUrl() + "'/><p id='name'>" + profile.getName() + "</p><p id='mail'>" + profile.getEmail() + "</p><a href='#' onclick='signOut();'>Sign out</a></div>");
	$("#colorPalh4").addClass("moveDown");
	// The ID token you need to pass to your backend:
	var id_token = googleUser.getAuthResponse().id_token;

	$(".paletteC").after("<h4>Google calender</h4><h5>What to show</h5><div class='select_mate' data-mate-select='active' id='calToggle'><select name='' id='calToggleSel' onchange='calenderState(this.value)' onclick='return false;' disabled='true'><option value='1'>Next</option><option value='2'>Custom count</option><option value='3'>Only if today</option><option value='4'>None</option></select><p class='selecionado_opcion' onclick='open_select(this)'></p><span onclick='open_select(this)' class='icon_select_mate'><svg fill='#000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' /><path d='M0-.75h24v24H0z' fill='none' /></svg></span><div class='cont_list_select_mate'><ul class='cont_select_int'>  </ul></div></div>")
	console.log(1);
	crear_select();
	$(".selecionado_opcion").text(calOpts[calVal - 1]);
	calenderState(calVal);
};
//Sign out
function signOut() {
	$("#colorPalh4").removeClass("moveDown");
	$("#id-card").remove();
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User signed out.');
	});
}
// Client ID and API key from the Developer Console
var CLIENT_ID = '715262885657-pcmmcegrish97vbubg2ch8oj3m6ncgo1.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBSjbRQtRUN2CJp-HMN3_h0AsZODBCZLRY';

var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');
function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}
function initClient() {
	gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		discoveryDocs: DISCOVERY_DOCS,
		scope: SCOPES
	}).then(function () {
		// Listen for sign-in state changes.
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

		// Handle the initial sign-in state.
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		authorizeButton.onclick = handleAuthClick;
		signoutButton.onclick = handleSignoutClick;
	});
}
function listUpcomingEvents(cond, today) {
	if (cond != "stop") {
		setTimeout(function () { if (a != 1) listUpcomingEvents(cond, today);}, 1000);
		gapi.client.calendar.events.list({
			'calendarId': 'primary',
			'timeMin': (new Date()).toISOString(),
			'showDeleted': false,
			'singleEvents': true,
			'maxResults': cond,
			'orderBy': 'startTime'
		}).then(function (response) {
			var events = response.result.items;

			if (events.length > 0) {
				for (i = 0; i < events.length; i++) {
					var event = events[i];
					var when = event.start.dateTime;
					if (!when) {
						when = event.start.date;
					}
					for (var i = 0; i < calenderIds.length; i++) {
						if(event.id == calenderIds[i].id)
							return false
					}
					if (today && moment().isSame(moment(when), 'day')) {
						todolist.todo.unshift({ id: event.id, label: event.summary, done: false, time: when, cal: true });
					}
					else if (today && !moment().isSame(moment(when), 'day')) {
						$("#calToggle").addClass("noCalEvent");
					}
					else if (!today) {
						todolist.todo.unshift({ id: event.id, label: event.summary, done: false, time: when, cal: true });
					}
					calenderIds.push({ id: event.id });
					setTimeout(function () { $("#baseColorPick").trigger('onchange'); }, 200);
				}
			} else {
				console.log('No upcoming events found.');
			};
			a = 1;
		});
	}
}