require('dotenv').config()

module.exports = {
    appId: parseInt(process.env.GITHUB_APP_ID, 10),
    installationId: parseInt(process.env.GITHUB_APP_INSTALLATION_ID, 10),
    type: 'installation',
}