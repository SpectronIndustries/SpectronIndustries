var str;
var contentStr;
var orStr = str;
var rowAmount;
var pageAmount;
var pageNumber = 1;
var index = 0;
var debugMode = true;

var titleArr;
var descArr;
var dateArr;
var alignArr;
var imgSrcArr;
var btnArr;
var linkArr;
var flipArr;

function startJS() {
	fetch("https://spectron-industries.aaronwoodland.repl.co/content.txt")//OLD : content.txt
		.then((res) => res.text())
		.then((text) => {
			str = text;
			orStr = text;
			createContent();
		})
	.catch((e) => console.error(e));
	
	fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSnqcgS7JDifk3FrmQUgop_9lgiPfgOZ27ExFu4osYHOEoX2FG-rQXpjqN3Lrkd0SvxznIUBI1ppUpF/pub?gid=0&single=true&output=tsv")
		.then((res) => res.text())
		.then((text) => {
			contentStr = text;
			createContent();
		})
	.catch((e) => console.error(e));

	document.getElementById("nav").innerHTML = `
	 <div class="nav-inner">
		 <a style="cursor: pointer" onclick="toggleMenu()" class="material-symbols-outlined burger">menu</a>
		 <a tabindex="1" class="nav-page" href="/IonicThruster/">Ionic Thruster</a>
		 <a tabindex="2" class="nav-page" href="/ProjectAite/">Project Aite</a>
		 <a tabindex="4" class="nav-page" href="/SpatioraProject/">The Spatiora Project</a>
		 <img style="cursor: pointer" onclick="window.location.href = '../'" class="logo" src="../Assets/Img/Logos/LogoLongWhiteFixed.png">
	 </div>
 `;

	document.getElementById("menu").innerHTML = `
		 <a style="cursor: pointer" onclick="toggleMenu()" class="material-symbols-outlined menu-close">close</a>
		 <div class="menu-top">
			 <img style="cursor: pointer" onclick="window.location.href = '../'" class="menu-logo" src="../Assets/Img/Logos/LogoLongWhiteFixed.png">
		 </div>
		 <div class="menu-buttons">
			 <div class="menu-buttons-inner">
				 <hr class="menu-page" width="100%">
				 <a tabindex="5" class="menu-page" href="/IonicThruster/">Ionic Thruster</a>
				 <hr class="menu-page" width="100%">
				 <a tabindex="6" class="menu-page" href="/ProjectAite/">Project Aite</a>
				 <hr class="menu-page" width="100%">
				 <a tabindex="8" class="menu-page" href="/SpatioraProject/">The Spatiora Project</a>
				 <hr class="menu-page" width="100%">
				 <a tabindex="8" class="menu-page" href="/Tasers/">Tasers</a>
				 <hr class="menu-page" width="100%">
				 <a tabindex="8" class="menu-page" href="/ElectricLighters/">Elecric Lighters</a>
				 <hr class="menu-page" width="100%">
				 <a tabindex="8" class="menu-page" href="/MoreProjects/">More Projects</a>
				 <hr width="100%">
				 <a tabindex="9" href="/AboutUs/">ABOUT US</a>
				 <hr width="100%">
			 </div>
		 </div>
 `

	/* ===== Project Page ===== */
	if (document.getElementById("projectContainer")) {
		for (let i = 0; i < document.getElementById("projectContainer").childElementCount; i++) {
			$(document.getElementById("projectContainer")).children().eq(i).attr("id", "pRow" + i);
		}
	}
};




/* ===== Home Page ===== */
function createContent() {
	/* ===== Set variables ===== */
	str = orStr;
	str = str.slice(str.indexOf("@Amount: "));
	var amount = parseInt(str.slice(str.indexOf("@Amount: ") + 9, str.indexOf("\n")));
	rowAmount = amount;

	str = orStr;
	str = str.slice(str.indexOf("@PageAmount: "));
	pageAmount = parseInt(str.slice(str.indexOf("@PageAmount: ") + 13, str.indexOf("\n")));

	str = orStr;
	str = str.slice(str.indexOf("@NullBack: "));
	var nullBack = str.slice(str.indexOf("@NullBack: ") + 11, str.indexOf("\n"));

	str = orStr;
	str = str.slice(str.indexOf("@ImgGradient: "));
	var imgGradient = str.slice(str.indexOf("@ImgGradient: ") + 14, str.indexOf("\n"));

	/* ===== Log variables ===== */
	if (debugMode == true) {
		console.log("Index: [" + index + "]");
		console.log("Amount: [" + amount + "]");
		console.log("PageAmount: [" + pageAmount + "]");
		console.log("PageNumber: [" + pageNumber + "]");
		console.log("NullBack: [" + nullBack + "]");
		console.log("ImgGradient: [" + imgGradient + "]");
	}

	$('#pageText').html('Page ' + pageNumber + ' of ' + (rowAmount / pageAmount));

	if (!(index - ((pageAmount) * (pageNumber - 1)) < pageAmount)) {
		console.log("========== ERROR ==========");
	}

	for (index = index; index - (pageAmount * pageNumber) < 0; index++) {
		/* ===== Set string to original string ===== */
		str = orStr;

		/* ===== Set string to current row ====== */
		str = str.slice(str.indexOf("#" + index));

		/* ===== Set labels ===== */
		
		title = titleArr = getArray("Title")[index];
		desc = descArr = getArray("Desc")[index];
		date = dateArr = getArray("Date")[index];
		align = alignArr = getArray("Align")[index];
		imgSrc = imgSrcArr = getArray("ImgSrc")[index];
		btn = btnArr = getArray("Btn")[index];
		link = linkArr = getArray("Link")[index];
		flip = flipArr = getArray("Flip")[index];

		var title = str.slice(str.indexOf("Title: ") + 7, str.indexOf("Desc: ") - 1);
		var desc = str.slice(str.indexOf("Desc: ") + 6, str.indexOf("Date: ") - 1);
		var date = str.slice(str.indexOf("Date: ") + 6, str.indexOf("Align: ") - 1);
		var align = str.slice(str.indexOf("Align: ") + 7, str.indexOf("ImgSrc: ") - 1);
		var imgSrc = str.slice(str.indexOf("ImgSrc: ") + 8, str.indexOf("Btn: ") - 1);
		var btn = str.slice(str.indexOf("Btn: ") + 5, str.indexOf("Link: ") - 1);
		var link = str.slice(str.indexOf("Link: ") + 6, str.indexOf("Flip: ") - 1);
		var flip = str.slice(str.indexOf("Flip: ") + 6, str.indexOf("#E") - 1);

		/* ===== Log labels ===== */
		if (debugMode == true) {
			console.log("========== Row " + index + " ==========");
			console.log("Title: [" + title + "]");
			console.log("Desc: [" + desc + "]");
			console.log("Date: [" + date + "]");
			console.log("Align: [" + align + "]");
			console.log("ImgSrc: [" + imgSrc + "]");
			console.log("Btn: [" + btn + "]");
			console.log("Link: [" + link + "]");
			console.log("Flip: [" + flip + "]");
		}


		/* ===== Create row ===== */
		var row = document.createElement('div');
		row.classList.add('row');
		row.id = 'row' + index;

		/* ===== Create background image ===== */
		var imgContainer = document.createElement('div');
		imgContainer.classList.add('img-container');
		var img = document.createElement('img');
		/* ===== Set image to color or null image if no image avalible ===== */
		if (imgSrc == "") {
			if (nullBack == "Color") {
				img.style.backgroundColor = "black";
			} else if (nullBack == "Img") {
				imgSrc = "../Assets/Img/Projects/nullImg.png";
			}
		}
		img.src = imgSrc;

		/* ===== Add image container ===== */
		row.append(imgContainer);

		/* ===== Create gradient ===== */
		var gradient = document.createElement("div");
		/* ===== Set image gradient Left, Center, or Right ===== */
		if (true) {
			gradient.classList.add("img-gradient");
			if (align == "L") {
				gradient.classList.add('gradient-left');
			} else if (align == "C") {
				gradient.classList.add('gradient-center');
			} else if (align == "R") {
				gradient.classList.add('gradient-right');
			}
			imgContainer.append(gradient);
		}

		/* !NOT WORKING! */
		/* ===== Flip image Horizontally, Vertically, or Both ===== */
		if (flip == "H") {
			img.style.transform = "scaleX(-1)";
			gradient.style.zIndex = "1";
		} else if (flip == "V") {
			img.style.transform = "scaleY(-1)";
			gradient.style.zIndex = "1";
		} else if (flip == "B") {
			img.style.transform = "scale(-1, -1)";
			gradient.style.zIndex = "1";
		}
		/* ===== Add img ===== */
		imgContainer.append(img);

		/* ===== Create info container===== */
		var infoContainer = document.createElement('div');
		infoContainer.classList.add('info-container');
		row.append(infoContainer);

		/* ===== Align info Left, Center, or Right ===== */
		if (align == "L") {
			infoContainer.classList.add('info-left');
		} else if (align == "C") {
			infoContainer.classList.add('info-center');
		} else if (align == "R") {
			infoContainer.classList.add('info-right');
		}

		/* ===== Create info inner ===== */
		var infoContainerInner = document.createElement('div');
		infoContainerInner.classList.add('info-container-inner');
		/* ===== Align info inner Left, Center, or Right ===== */
		if (align == "L") {
			infoContainerInner.classList.add('info-inner-left');
		} else if (align == "C") {
			infoContainerInner.classList.add('info-inner-center');
		} else if (align == "R") {
			infoContainerInner.classList.add('info-inner-right');
		}
		/* ===== Add info inner ===== */
		infoContainer.append(infoContainerInner);

		/* ===== Create info n next (info inner inner) ===== */
		var infoNNext = document.createElement('div');
		infoNNext.classList.add('info-n-next');
		infoContainerInner.append(infoNNext);

		/* ===== Create next ===== */
		var next = document.createElement('div');
		next.classList.add('next');
		var nextIcon = document.createElement('p');
		nextIcon.classList = "material-symbols-outlined";
		if (btn == "U" || btn == "B") {
			nextIcon.innerHTML = "expand_less";
			next.setAttribute("onclick", "window.location.href = '/#row' + (parseInt($(this).parent().parent().parent().parent().attr('id').substr(3)) + 1);");
		} else {
			nextIcon.innerHTML = "";
			next.setAttribute("onclick", "");
		}

		/* ===== Add next ===== */
		next.append(nextIcon);
		infoNNext.append(next);

		/* ===== Create info ===== */
		var info = document.createElement('div');
		info.classList.add('info');
		/* ===== Create info title ===== */
		var infoTitle = document.createElement('h2');
		infoTitle.innerHTML = title;
		infoTitle.classList = "title";
		infoTitle.setAttribute("onclick", "window.location.href = '" + link + "'"); info.appendChild(infoTitle);
		infoTitle.setAttribute("tabindex", index + 9)
		/* ===== Create info description ===== */
		var infoDesc = document.createElement('p');
		infoDesc.innerHTML = desc;
		infoDesc.classList = "desc";
		info.appendChild(infoDesc);
		/* ===== Create info Date ===== */
		var infoDate = document.createElement('i');
		infoDate.innerHTML = date;
		infoDate.classList = "date";
		info.appendChild(infoDate);

		/* ===== Add info ===== */
		infoNNext.append(info);

		/* ===== Create Next ===== */
		var next = document.createElement('div');
		next.classList.add('next');
		var nextIcon = document.createElement('p');
		nextIcon.classList = "material-symbols-outlined";
		if (btn == "D" || btn == "B") {
			nextIcon.innerHTML = "expand_more";
			next.setAttribute("onclick", "window.location.href = '/#row' + (parseInt($(this).parent().parent().parent().parent().attr('id').substr(3)) - 1);");
		} else {
			nextIcon.innerHTML = "";
			next.setAttribute("onclick", "");
		}
		/* ===== Add next ===== */
		next.append(nextIcon);
		infoNNext.append(next);

		/* ===== Add row (ADD ALL) ===== */
		$("#content").append(row);
	}
}

function deleteContent() {
	$("#content").html("");
}

function toggleMenu() {
	var menu = document.getElementById("menu")
	if (menu.classList.contains("menu-hidden")) {
		menu.classList.remove('menu-hidden');
		menu.classList.add('menu-shown');
		var i = pageAmount;
		$('.menu-buttons-inner a').each(function() {
			this.tabIndex = i;
			i++;
		});
	} else if (menu.classList.contains("menu-shown")) {
		menu.classList.remove('menu-shown');
		menu.classList.add('menu-hidden');
		$('.menu-buttons-inner a').each(function() {
			this.tabIndex = 0;
		});
	}
}

addEventListener("keydown", (event) => { });

var row = "";
onkeydown = (event) => {
	if ((event.key == "ArrowUp" && event.target == document.body) || (event.key == "ArrowDown" && event.target == document.body)) {
		event.preventDefault();
	} else if (event.key == "Escape" && document.getElementById("menu").classList.contains("menu-shown")) {
		toggleMenu();
	}

	if (event.key == "ArrowUp" && row > 0) {
		if (window.location.href.indexOf("/#row") != -1) {
			row = parseInt(window.location.href.slice(window.location.href.indexOf("/#row") + pageAmount)) + 1;
		} else {
			row = 0;
		}

		window.location.href = "/#row" + row;
	} else if (event.key == "ArrowDown" && row < rowAmount - 1) {
		if (window.location.href.indexOf("/#row") != -1) {
			row = parseInt(window.location.href.slice(window.location.href.indexOf("/#row") + pageAmount)) - 1;
		} else {
			row = 1;
		}

		window.location.href = "/#row" + row;
	}
};

function prevPage() {
	if (pageNumber > 1) {
		deleteContent();
		index = index - (pageAmount * pageNumber);
		pageNumber = pageNumber - 1;
		createContent();
	}
	window.location.href = "/#row" + (index - rowAmount);
	$("#pageText").html("Page " + pageNumber + " of " + (rowAmount / pageAmount));
}

function nextPage() {
	if (pageNumber < (rowAmount / index)) {
		deleteContent();
		index -= 1;
		pageNumber += 1;
		createContent();
	}
	window.location.href = "/#row" + (index - rowAmount);
	$("#pageText").html("Page " + pageNumber + " of " + (rowAmount / pageAmount));
}



/* ===== Project Page ===== */
addEventListener("scroll", (event) => { });
var projectRow = "";
onscroll = (event) => {

	if (document.getElementById("projectContainer")) {
		for (let i = 0; i < document.getElementById("projectContainer").childElementCount; i++) {
			toggleProjectRow("pRow" + i, i);
		}
	}
	// console.log("Document: " + window.pageYOffset);
};

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}

function toggleProjectRow(id, num) {
	// console.log(id + ": " + (getOffset(document.getElementById(id)).top));
	var rand = Math.floor(Math.random() * 2);
	var leftRight = 0;

	if (rand == 0) {
		leftRight = "left";
	} else {
		leftRight = "right";
	}

	if (document.getElementById(id)) {
		if (window.pageYOffset >= (getOffset(document.getElementById(id)).top - (window.innerHeight / 1.5))) {
			if (window.pageYOffset < (getOffset(document.getElementById(id)).top + (window.innerHeight / 1.5))) {
				document.getElementById(id).classList = "project-row p-row-in";
				$("#projBack").css("background-image", "url('" + $(document.getElementById("pRow" + (num - 1))).children().eq(0).attr("src") + "')");
				console.log("pRow" + (num - 1));
			} else {
				document.getElementById(id).classList = "project-row p-row-" + "left";
				$("#projBack").css("background-image", "url('" + $(document.getElementById("pRow" + (num + 1))).children().eq(0).attr("src") + "')");
			}
		} else {
			document.getElementById(id).classList = "project-row p-row-" + "left";
		}
	}
}

function getArray(arrayStr) {
	var temp = contentStr.substring(contentStr.indexOf(arrayStr));
	temp = temp.substring(temp.indexOf(arrayStr) + arrayStr.length + 1, temp.indexOf("\n") - 1);
	return(temp.split("	"));
}