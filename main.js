const fs = require('fs');
const { Octokit } = require('@octokit/core');
const { createAppAuth } = require('@octokit/auth-app');
const appCredentials = require('./lib/app_credentials.js');

const privateKey = fs.readFileSync(__dirname + "/mock-github-app.2022-10-29.private-key.pem");


async function main() {
    //instantiate new Octokit client
    const octokit = new Octokit({
        authStrategy: createAppAuth,
        auth: {
            appId: appCredentials.appId,
            privateKey: privateKey,
            installationId: appCredentials.installationId,
            type: appCredentials.type
        }
    });

    const jobs = await octokit.request('GET /repos/{owner}/{repo}/actions/jobs/{job_id}', {
        owner: 'HGuzman-Soto',
        repo: 'github_actions_demo_py',
        job_id: '8660059687'
    })
    console.log(jobs)
    //TODO - Debug

    console.log(octokit);
}

main();
