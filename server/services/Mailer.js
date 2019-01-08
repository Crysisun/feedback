const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ subject, recipient }, content) {
        super();

        this.from_email = new helper.Email('no-reply@feedback.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipient);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }
    formatAddresses(ricipients) {
        return ricipients.map(({ email }) => {
            return new helper.Email(email);
        })
    }
    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }
}



module.exports = Mailer;