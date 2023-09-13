window.addEventListener('DOMContentLoaded', function () {
    displayContent('dashboard-content'); // Hiển thị trang Dashboard mặc định
	firstSideMenu = document.querySelector('#sidebar .side-menu.top li a')
	firstSideMenu.parentElement.classList.add('active')
});


const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})




// Change page
document.getElementById('dashboard-tab').addEventListener('click', function () {
    displayContent('dashboard-content');
});

document.getElementById('map-tab').addEventListener('click', function () {
    displayContent('map-content');
});

document.getElementById('analytics-tab').addEventListener('click', function () {
    displayContent('analytics-content');
});

document.getElementById('settings-tab').addEventListener('click', function () {
    displayContent('settings-content');
});

document.getElementById('team-tab').addEventListener('click', function () {
    displayContent('team-content');
});

function displayContent(contentId) {
    console.log("Click")
    // Ẩn tất cả các nội dung
    var contentElements = document.querySelectorAll('#content .content-section');
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = 'none';
    }

    // Hiển thị nội dung được chọn
    document.getElementById(contentId).style.display = 'block';
}
