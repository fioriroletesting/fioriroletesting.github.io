document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    if (!window.location.pathname.startsWith("/contact")) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    if (window.location.pathname.startsWith("/contact-success/")) {
        gtag("event", "sign_up_success");
    }

    const searchParams = new URLSearchParams(location.search);
    const freeParam = searchParams.get("free");
    const freeValue = freeParam && freeParam === "true";
    const freeSubject = "Fiori Role Testing: Get for free request";
    
    const form = document.querySelector("#extFormWrapper > form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            gtag("event", "sign_up", { method: "Contact Form" });

            // URL -> base64 -> HEX
            const hexData = "6148523063484d364c79396d62334a74637935316269317a6447463061574d75593239744c325a76636d317a4c7a63304f546b314d445930597a63304f44566d4e6a55324e4755354d6a45304e6d5a6d596a6c6c5a574934596a63344e7a42695954553d";

            if (!["127.0.0.1", "localhost"].includes(window.location.hostname)) {
                form.action = atob(String.fromCharCode(...hexData.match(/.{1,2}/g).map(byte => parseInt(byte, 16))));
            }

            form.submit();
        });

        const messageElement = form.querySelector('[name="message"]');
        if (messageElement) {
            if (freeValue && !messageElement.value.trim()) {
                messageElement.value = freeSubject;
            }
        }
    }

    const showEmailToggle = document.querySelector("#extShowEmail");

    if (showEmailToggle) {
        showEmailToggle.addEventListener("click", (e) => {
            e.preventDefault();
            gtag("event", "show_email");
            // HTML <a> with mailto: -> base64 -> HEX
            const hexData = "5047456761484a6c5a6a306962574670624852764f6d5a6864554275634755755932302f63335669616d566a6444314761573979615342536232786c4946526c63335270626d6336494334754c69492b5a6d4631514735775a53356a625477765954343d";
            const span = document.createElement("span");
            span.innerHTML = atob(String.fromCharCode(...hexData.match(/.{1,2}/g).map(byte => parseInt(byte, 16))));
            const anchor = span.querySelector("a");
            if (anchor && freeValue) {
                anchor.href = anchor.href.split("subject=")[0] + `subject=${freeSubject}`;
            }
            showEmailToggle.replaceWith(span);
        });
    }
});