import Mailjet from "node-mailjet";

const config = useRuntimeConfig();

const mailjet = Mailjet.apiConnect(config.mail_api_key, config.mail_secret_key);

export default mailjet;
