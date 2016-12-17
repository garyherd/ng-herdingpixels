$(function() {
    var contactForm = $("form#contactForm");
    var auditForm = $("form#auditForm");

    emailjs.init("user_zMITbW7sxLURrKiTSyL2y");

    contactForm.submit(function(event){
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "contact_form";

        $("input#contact_submit").attr("value", "Sending...");
        emailjs.sendForm(service_id,template_id,"contactForm")
            .then(function(){
                $("#contact_sent_ok_").removeClass("hide");
                $("input#contact_submit").attr("value", "Send Message");
            }, function(err) {
                    $("#contact_sent_error_").removeClass("hide");
                    $("#contact_sent_error_").append(convertErrorToString(err));
                    $("input#contact_submit").attr("value", "Send Message");
            });
        return false;
    });

    auditForm.submit(function(event) {
        event.preventDefault();
        var service_id = "default_service";
        var template_id = "audit_form";

        $("input#audit_submit").attr("value", "Sending...");
        emailjs.sendForm(service_id, template_id, "auditForm")
            .then(function() {
                $("#audit_sent_ok_").removeClass("hide");
                $("input#audit_submit").attr("value", "Send Message");
            }, function(err) {
                $("#audit_sent_error_").removeClass("hide");
                $("#audit_sent_error_").append(convertErrorToString(err));
                $("#input#audit_submit").attr("value", "Send Message");
            });
        return false;
    });

    convertErrorToString = function(errorObj) {
        var msgObj = JSON.parse(errorObj.text);
        return msgObj.error;
    }
});