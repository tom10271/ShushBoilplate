/**
 * @fileoverview BrowserDetect Copied from http://www.quirksmode.org/js/detect.html. Not API.
 */
/**
 * @class BrowserDetect
 * A library for detecting the user's browser and OS
 * Found at http://www.quirksmode.org/js/detect.html
 * Modified by shutupiamthinking.com for detecting IE 10 and 11.
 */

var BrowserDetect =
{
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },

    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) != -1) {
                return data[i].identity;
            }
        }
    },

    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },

    dataBrowser: [
        { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
        { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
        { string: navigator.userAgent, subString: "Trident/7.0", identity: "Explorer11" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "Safari", identity: "Safari" },
        { string: navigator.userAgent, subString: "Opera", identity: "Opera" }
    ]

};
BrowserDetect.init();

function Client() {
}
Client.prototype.mobileClients = ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "sda", "sgh-", "vodafone", "xda", "iphone", "ipad", "ipod", "android"];
Client.prototype.isMobileClient = function (userAgent) {
    userAgent = userAgent.toLowerCase();
    for (var i in this.mobileClients) {
        if (userAgent.indexOf(this.mobileClients[i]) != -1) {
            return true;
        }
    }
    return false;
}
var client = new Client();
client.isMobileClient(navigator.userAgent);
var url = window.location.toString();
if (client.isMobileClient(navigator.userAgent)) {
    $("html").addClass("mobileDevice");
}


if (BrowserDetect.browser == 'Explorer') {
    $("html").addClass('ie');
    if (BrowserDetect.version >= 7) {
        $("html").addClass('ie' + BrowserDetect.version);
        if (BrowserDetect.version == 10)
            document.write('<link rel="stylesheet" type="text/css" href="/web/css/touriable.ie10.css"/>');
    } else
        $("html").addClass('ancientIE');
} else if (BrowserDetect.browser == 'Explorer11') {
    $("html").addClass('ie');
    $("html").addClass('ie11');
    document.write('<link rel="stylesheet" type="text/css" href="/web/css/touriable.ie11.css"/>');
} else if (BrowserDetect.browser == 'Chrome' || BrowserDetect.browser == 'Firefox' || BrowserDetect.browser == 'Safari' || BrowserDetect.browser == 'Opera') {
    //Non IE Browser
    $("html").addClass('modern');
}