var chartOrderList = document.getElementsByClassName("fbChatOrderedList")
var a = chartOrderList[0].firstElementChild.children[3].firstElementChild.children
for (var i = 0; i < a.length; i++) {
    if (a[i].getAttribute('data-id') === '100006737619154') {
        a[i].style.display = "none"
    }
}