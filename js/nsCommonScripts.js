function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
 
function addCounter(max, inputElement) {
    document.getElementById(inputElement.id).value = parseInt(document.getElementById(inputElement.id).value) + 1;
    if (document.getElementById(inputElement.id).value >= parseInt(max)) {
        document.getElementById(inputElement.id).value = max;
    }
    document.getElementById(inputElement.id).onchange();
}
function removeCounter(min, inputElement) {
    $('select').niceSelect();
    document.getElementById(inputElement.id).value = parseInt(document.getElementById(inputElement.id).value) - 1;
    if (document.getElementById(inputElement.id).value <= parseInt(min)) {
        document.getElementById(inputElement.id).value = min;
    }
    document.getElementById(inputElement.id).onchange();
}

function removeElement(inputElement) {
    var element = document.getElementById(inputElement.id);
    element.remove();
}

//function showhide(collapseElemId, iconId,minusIconUrl,plusIconUrl) {
//    if (document.getElementById(collapseElemId).style.display == 'none') {
//        document.getElementById(iconId).src = minusIconUrl;
//    } else {
//        document.getElementById(iconId).src = plusIconUrl;
//    }
//    $("#" + collapseElemId).toggle('hide');
//}