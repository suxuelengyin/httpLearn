function ajax() {
    console.log(1)
    $.get("http://localhost:3000/test.js", {
        name: "weibo"
    }, function (data) {
        console.log(data);
        $('#ajax').text(data)
    })
}

function post() {
    // $.post("http://localhost:3000/post.js", {
    //     name: "weibo"
    // }, function (data) {
    //     console.log(data);
    //     $('#post').text(data)
    // })
    $.ajax({
        url: "http://localhost:3000/post.js",
        data: {
            name: 'post'
        },
        contentType: 'application/json',
        method: 'POST',
        success: function (data) {
            console.log(data);
        }
    })
}

function fetchs() {
    fetch("http://localhost:3000/fetch.js", {
            method: 'POST',
            body: JSON.stringify({
                name: 'fetch'
            }),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'content-type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer',
        }).then(res => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            $("#ent").text(JSON.stringify(data))
        })
}
function testextends() {
    fetch("http://localhost:3000/extends.js", {
            method: 'POST',
            body: JSON.stringify({
                name: 'extends'
            }),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'content-type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer',
        }).then(res => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            $("#ent").text(JSON.stringify(data))
        })
}