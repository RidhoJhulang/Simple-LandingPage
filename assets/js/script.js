window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#171717",
                "text": "#ffffff"
            },
            "button": {
                "background": "#ffffff",
                "text": "#17181a"
            }
        },
        "position": "bottom",
        "content": {
            "message": "By continuing to use this website, you consent to the use of cookies in accordance with our",
            "link": 'Cookie Policy.',
            "dismiss": "",
            "href": "https://www.danielscrivner.com/legal/cookie-policy"
        }
    })
});

var cookieName = 'newslettermodalClosed';

    if (typeof Cookies.get(cookieName) !== 'undefined') {
        $('.modal-main-4').remove();
    }

    $('.email-close-1, .form-btn-3').click(() => {
        Cookies.set(cookieName, 'ok', { expires: 30 });
    })

// immediately/self invoked function. This function executes right away
(function () {
    // create a new Library instance and store it in a variable called "fsSlider"
    var fsSlider = new FsLibrary('.fs-dynamic-feed')  // Class of your hidden CMS collection list

    // run slider on our instance
    fsSlider.slider({
        sliderComponent: '.fs-slider'  // Webflow slider component
    })
})();

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

// listener for links to be copied
$('.copy-link, .modal-copy-link').on('click', () => {
    let text = document.URL + "?utm-source=lnk-share"
    var result = copyToClipboard(text);
})

// <!-- Focus on modal search field & x to reset-->
$(document).ready(function () {

    document.getElementById("search-link").addEventListener("click", function () {
        setTimeout(function () {
            if ($("#search-modal").css("opacity") > "0") {
                setTimeout(function () {
                    document.getElementById("search-field").focus();
                }, 1);
            } else if ($("#search-modal").css("opacity") < "0") {
                setTimeout(function () {
                    $("#search-field").blur(function () {
                    });
                }, 1);
            }
        }, 100);
    });

    let _clear = document.getElementById("searchclear");
    _clear.style.display = "none";

    let inputpot = document.getElementById("search-field");
    inputpot.addEventListener("focusin", function () {
        document.getElementById("searchclear").style.display = "block";
    });

    inputpot.addEventListener("focusout", function () {
        document.getElementById("searchclear").style.display = "none";
        inputpot.value = "";
    });
});

// <!-- Close Modal Escape Key -->
$(document).keydown(function (event) {
    if (event.keyCode == 27) {
        $('#search-modal, #subscribe-modal, #email-modal, #share-modal').hide();
    }
});

(function () {
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript"; b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})();

_linkedin_partner_id = "2623372";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);

!function (e, t, n, s, u, a) {
    e.twq || (s = e.twq = function () {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
    }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
        a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
}(window, document, 'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init', 'o4njf');
twq('track', 'PageView');