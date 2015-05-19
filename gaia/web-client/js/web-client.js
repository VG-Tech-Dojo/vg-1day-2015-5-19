function reloadMessage() {
    var success = function(data) { appendMessages(data) };
    var error   = function() { console.log("error") };
    getMessages(success, error);
}

function sendMessage(body) {
    var success = function() {
        $(".message-body").val("");
        reloadMessage();
    };
    var error   = function() { console.log("error") };
    postMessage(body, success, error);
}

function appendMessages(data) {
    $("#message-table").empty();
    for ( var i = 0; i < data.length; i++ ) {
        var object = data[i]
            console.log(object.body);
        appendMessage(object.body);
    }
}

function appendMessage(message) {
	var escapeMessage = $("<div/>").text(message).html();

    var messageString = '<tr><td>' +
        '<div class="media message">'　+
        '<div class="media-left">' +
        '<img class="media-object" alt="64x64" src="https://avatars0.githubusercontent.com/u/1711925?v=3&s=460" data-holder-rendered="true" style="width: 64px; height: 64px;">' +
        '</div>' +
        '<div class="media-body">' +
        '<p class="media-heading"></p>' +
		escapeMessage +
	    '</div>' +
        '</div>' +
        '</td></tr>';

	$("#message-table").append(messageString);
}

function getMessages(success, error) {
    var getMessageUri = "http://localhost:8080/message.php";
    return $.ajax({
        url: getMessageUri,
        type: "GET",
        headers: { "accept": "application/json;odata=verbose" },})
    .done(function(data) { success(data) })
    .fail(error);
}

function postMessage(body, success, error) {
    var postMessageUri = "http://localhost:8080/post.php";
    var username = "名前はまだない";

    return $.ajax({
        method: "POST",
        url: postMessageUri,
        dataType: "html",
        data: {"username":username,"body":body},})
    .done(function(data) { success() })
    .fail(error);
}
