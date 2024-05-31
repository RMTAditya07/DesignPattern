import * as readlineSync from 'readline-sync';
// sends a message to a user in a specific Slack channel.
class SlackClient {
    postMessageToUserInChannel(channel, user, message) {
        console.log(`Posting message to ${user} in ${channel} through Slack: ${message}`);
    }
}
// sends a message to a specific Microsoft Teams channel.
class MSTeamsClient {
    postToChannel(channel, message) {
        console.log(`Posting message to ${channel} through MS Teams: ${message}`);
    }
}
// Create adapters for different messaging services
class SlackAdapter {
    constructor(slackClient) {
        this.slackClient = slackClient;
    }
    sendMessage(channel, user, message) {
        this.slackClient.postMessageToUserInChannel(channel, user, message);
    }
}
class MSTeamsAdapter {
    constructor(msTeamsClient) {
        this.msTeamsClient = msTeamsClient;
    }
    sendMessage(channel, user, message) {
        this.msTeamsClient.postToChannel(channel, `${message} (sent to ${user})`);
    }
}
// Function to choose messaging service and send messages dynamically
function sendMessageWithAdapter(adapter) {
    while (true) {
        const serviceChoice = readlineSync.question('Choose messaging service (Slack or MSTeams), or type "exit" to quit: ');
        if (serviceChoice.toLowerCase() === 'exit') {
            break;
        }
        let adapterInstance;
        if (serviceChoice.toLowerCase() === 'slack') {
            adapterInstance = new SlackAdapter(new SlackClient());
        }
        else if (serviceChoice.toLowerCase() === 'msteams') {
            adapterInstance = new MSTeamsAdapter(new MSTeamsClient());
        }
        else {
            console.log('Invalid choice. Please choose Slack or MSTeams.');
            continue;
        }
        const channel = readlineSync.question(`Enter ${serviceChoice} channel: `);
        const user = readlineSync.question('Enter user: ');
        const message = readlineSync.question('Enter message: ');
        adapterInstance.sendMessage(channel, user, message);
    }
}
// Use the sendMessageWithAdapter function to send messages based on user input
sendMessageWithAdapter(null); // Start sending messages based on user input
//# sourceMappingURL=client.js.map