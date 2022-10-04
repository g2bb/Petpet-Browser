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
    trackPage();
}

function switchTabs(tabNum){
    console.log(tabNum);

    //Fetches input URL
    var fetchURL = tabNum.getAttribute("data-url");

    //Sets Tab as ActiveTab
    tabNum.setAttribute('id','active');

    //Paste iFrame with URL
    top.document.getElementById('AppFrame').setAttribute("src",fetchURL);
    setTimeout(function(){trackPage();},500);
}

function newTab(){
    TabCount++;
    document.getElementById('tabList').innerHTML += ('<button data-tabnum="' + TabCount + '" class="tablinks" onclick="switchTabs()" data-url="https://example.com">New Tab</button>');
}

function closeTab(){
    //Remove the Tab
    document.getElementById('active').remove();

    //Switch to default Tab
    var tabs = document.querySelectorAll("#tabList > .tablinks");
    if (tabs.length < 1) {
        newTab();
        tabs = document.querySelectorAll("#tabList > .tablinks");
    }
    switchTabs(tabs[0]);
}

function trackPage(){
    var iframeTitle = document.getElementById('AppFrame').contentWinddow.document.title;
    console.log(iframeTitle);
    document.getElementById("active").innerHTML = iframeTitle + " <a id='closeBtn' onclick='closeTab()'>❌</a>";
}

function NavBtns(){

}
