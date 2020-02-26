# webmethods.io-Capsule-CROM-Community-Connector
This is a Webmethods.io community connector for [Capsule CRM](https://capsulecrm.com/), a Customer Relationship Management (CRM) SaaS web application and mobile app. The connector uses the [Capsule REST API](https://developer.capsulecrm.com/) to make HTTP requests to access or modify a resource. The actions supported by this community connector are:

#### 1. [List Cases](https://developer.capsulecrm.com/v2/operations/Case)
#### 2. [List Cases by Party](https://developer.capsulecrm.com/v2/operations/Case)
#### 3. [List Employees](https://developer.capsulecrm.com/v2/operations/Party)
#### 4. [List Parties](https://developer.capsulecrm.com/v2/operations/Party)
#### 5. [List Task Categories](https://developer.capsulecrm.com/v2/operations/Task)
#### 6. [List Users](https://developer.capsulecrm.com/v2/operations/User)
#### 7. [Show Case](https://developer.capsulecrm.com/v2/operations/Case)
#### 8. [Show Current User](https://developer.capsulecrm.com/v2/operations/User)
#### 9. [Show Party](https://developer.capsulecrm.com/v2/operations/Party)
#### 10. [Show Task Category](https://developer.capsulecrm.com/v2/operations/Task)
#### 11. [Show User](https://developer.capsulecrm.com/v2/operations/User)
#### 12. [List Tasks](https://developer.capsulecrm.com/v2/operations/Task)

Learn about other supported actions [here](https://developer.capsulecrm.com/v2/overview/getting-started).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed. 

### [Getting the API key](https://developer.capsulecrm.com/v2/overview/authentication)
API requests are made via HTTPS using the api.capsulecrm.com subdomain. Each request must be authenticated with a user's Bearer token. As If this connector is a one-off integration for internal use, we can generate a token directly from our Capsule account. You can create these from the My Preferences > API Authentication Tokens page in your Capsule account:


### Installing
1. Clone the repo `https://github.com/yuvanmytri/webmethods.io-BambooHR-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![BambooHR Connector](https://user-images.githubusercontent.com/16189220/74911246-3b403780-53e2-11ea-8789-be34e42a1d4f.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details
