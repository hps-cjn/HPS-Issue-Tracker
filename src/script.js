
(function(){

})();

function ConcatLongText(chars,text){
    var txt;
    var cutoff = chars - 4;

    var descrSubstr = text.substring(0,chars);

    var spaceIndex = descrSubstr.lastIndexOf(' ');
    if  (spaceIndex <= cutoff && spaceIndex > 0){
        return descrSubstr.substring(0,spaceIndex) + '...';
    }
    var periodIndex = descrSubstr.lastIndexOf('.');
    if  (periodIndex <= cutoff && periodIndex > 0){
        return descrSubstr.substring(0,periodIndex) + '...';
    }
    var commaIndex = descrSubstr.lastIndexOf(',');
    if  (commaIndex <= cutoff && commaIndex > 0){
        return descrSubstr.substring(0,commaIndex) + '...';
    }

    return descrSubstr;
}

function GetParameter(param){
    var params = window.location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++){
        var p = params[i].split('=');
        if(p[0] == param){
            return decodeURIComponent(p[1]);
        }
    }
}
