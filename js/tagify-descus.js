// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     mode: 'no-cors'
// };

// fetch("https://techwich.net/twapp/tag/list_all?format=json", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
let list = document.querySelectorAll('.hide-items span')
// tagify
var inputElm = document.querySelector('input[name=tags]'),
    whitelist = ["html", "css", "java", "c++", "c#"];


// initialize Tagify on the above input node reference
var tagify = new Tagify(inputElm, {
    enforceWhitelist: true,

    // make an array from the initial input value
    whitelist: inputElm.value.trim().split(/\s*,\s*/)
})

// Chainable event listeners
tagify.on('add', onAddTag)
    .on('remove', onRemoveTag)
    .on('input', onInput)
    .on('edit', onTagEdit)
    .on('invalid', onInvalidTag)
    .on('click', onTagClick)
    .on('focus', onTagifyFocusBlur)
    .on('blur', onTagifyFocusBlur)
    .on('dropdown:hide dropdown:show', e => console.log(e.type))
    .on('dropdown:select', onDropdownSelect)

var mockAjax = (function mockAjax() {
    var timeout;
    return function (duration) {
        clearTimeout(timeout); // abort last request
        return new Promise(function (resolve, reject) {
            timeout = setTimeout(resolve, duration || 700, whitelist)
        })
    }
})()

// tag added callback
function onAddTag(e) {
    console.log("onAddTag: ", e.detail);
    console.log("original input value: ", inputElm.value)
    tagify.off('add', onAddTag) // exmaple of removing a custom Tagify event
}

// tag remvoed callback
function onRemoveTag(e) {
    console.log("onRemoveTag:", e.detail, "tagify instance value:", tagify.value)
}

// on character(s) added/removed (user is typing/deleting)
function onInput(e) {
    console.log("onInput: ", e.detail);
    tagify.settings.whitelist.length = 0; // reset current whitelist
    tagify.loading(true).dropdown.hide.call(tagify) // show the loader animation

    // get new whitelist from a delayed mocked request (Promise)
    mockAjax()
        .then(function (result) {
            // replace tagify "whitelist" array values with new values
            // and add back the ones already choses as Tags
            tagify.settings.whitelist.push(...result, ...tagify.value)

            // render the suggestions dropdown.
            tagify.loading(false).dropdown.show.call(tagify, e.detail.value);
        })
}

function onTagEdit(e) {
    console.log("onTagEdit: ", e.detail);
}

// invalid tag added callback
function onInvalidTag(e) {
    console.log("onInvalidTag: ", e.detail);
}

// invalid tag added callback
function onTagClick(e) {
    console.log(e.detail);
    console.log("onTagClick: ", e.detail);
}

function onTagifyFocusBlur(e) {
    console.log(e.type, "event fired")
}

function onDropdownSelect(e) {
    console.log("onDropdownSelect: ", e.detail)
}