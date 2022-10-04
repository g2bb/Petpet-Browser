var ActiveTab, PrevPage;
var TabCount = 0;

function openTab(evt, tabName) {
    //Some black magic that W3 Schools had
    var i, tabcontent, tablinks;
    var closeBtn = document.getElementById("closeBtn");
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("activeCont");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        if(closeBtn){
            closeBtn.remove();
        }
    }
    document.getElementById(tabName).style.display = "block";
    tabcontent[i].classList.add("activeCont");
    //document.getElementById(tabName).className += " activeCont";
    evt.currentTarget.className += " active";
    evt.currentTarget.innerHTML += " <a id='closeBtn' onclick='closeTab()'>❌</a>";
}

function goToSite(){
    //Fetches input URL
    var PreCleanURL = document.getElementById('URL').value;
    //Checks to see if URL has header, if not adds it
    if(PreCleanURL.startsWith("http")){
        URL = PreCleanURL;
    } else {
        URL = "https://" + PreCleanURL;
    }

    //Paste iFrame with URL
    top.document.getElementById('AppFrame').setAttribute("src",URL);
    document.getElementById('active').setAttribute("data-url",URL);
    //trackPage();
}

function switchTabs(TabNum){
    //Fetches input URL
    var fetchURL = document.getElementById('TabNum').getAttribute("data-url");

    //Paste iFrame with URL
    top.document.getElementById('AppFrame').setAttribute("src",fetchURL);
    trackPage('TabNum');
}

function newTab(){
    TabCount++;
    var TabNum = "Tab" + TabCount;
    document.getElementById('ntb').insertAdjacentHTML('beforebegin', '<button id="' + TabNum + '" class="tablinks" onclick="switchTabs(' + TabNum + ')">New Tab</button>');
}

function closeTab(){
    //Remove the Tab
    document.getElementsById('active').remove;

    //Switch to default Tab
    switchTabs("Tab0");

}

function trackPage(){
    var iframeTitle = document.getElementsByTagName('iframe')[0].contentDocument.title;
    console.Log(iframeTitle);
    document.getElementsById("active").innerHTML = iframeTitle + " <a id='closeBtn' onclick='closeTab()'>❌</a>";
}

function NavBtns(){

}
