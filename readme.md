# Salesforce Development

## Content
1. Lightning Web Components

---- 
### Lightning Web Components

#### What is _Lighting Web Component_ (LWC) vs. _Aura_. 


#### Setting up the Development Environment 

1. Sign Up for Salesforce Developer Org [here](https://developer.salesforce.com/signup)
    > username: rodriggj@provar.com
    >
    > password: T@********!
    >
    > url: https://provar-b6-dev-ed.my.salesforce.com

2. Setup Salesforce DX Environment

    1. Install `Visual Studio Code`
        - [ ] Installation instructions for your platform can be found [here](https://code.visualstudio.com/download)

    2. Install `Salesforce CLI`
        - [ ] Installation instruction for your platform can be found [here](https://developer.salesforce.com/tools/sfdxcli)

        - [ ] In a terminal session validate installation by running 

        ```javascript
        sfdx
        ```

        - [ ] validate plugin installation also by running 

        ```javascript
        sfdx plugins --core
        ```

    3. Install Extensions in Visual Studio Code
        - [ ] On the left-hand navbar will be a button labeled _Extensions_
        - [ ] Use the the Search feature to query for _Salesforce Extension Pack_ and install top hit

> NOTE: In Visual Studio Code to initiate an integrated terminal session on a Mac type `Ctrl + ~`. When the terminal session comes up validate that you can execute commands like `sfdx`. If you **CANNOT** you may need to configure your `ENV PATH` to point to the `sfdx` download binaries. 

3. Set up My Domain and Dev Hub

    1. Navigate to your developer org login screen which you can access from `login.salesforce.com`, enter login credentials.

    2. When the page redirects to the _Setup_ screen. In the left-nav bar at the top is a _Search_ function. Enter `domains`. Select `My Domain ` from the returned list of values.

    3. You must enter a globally unique domain value. Enter a value unique to you and _Check Availability_. Keep Trying till you find one.

    > I entered `line-blend-skis` as my unique string, which was available and with some additional input from Salesforce my new domain became `line-blend-skis-dev-ed.my.salesforce.com`

    4. You will need to wait for Salesforce to `Provision you new Domain`. You will know that it is provisioned with the receipt of an email message from Salesforce. When you do receive this notice you can complete the last step which is to `Deploy your new Domain to Users`. This will be a button that will display and you can click this button. 

    5. You will be redirected to the login screen `login.salesforce.com`. Enter your credentials and you should be logged in to the Org with the URL as the new domain. 

4. Set up a `Project` and `DevHub` <sup><sub>[Developer Documentation](https://developer.salesforce.com/docs/atlas.en-us.234.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm)</sup></sub>

    1. Go to Visual Studio Code, and in the terminal we want to create a new project for our `Scratch Org`. 

    ```javascript
    sfdx force:project:create -n "learning_org"
    ```

> Note: `-n` is the _name_ flag

    2. Now we need to associate our project structure with a `Dev Hub`. To do this we can execute the following command

    ```javascript 
    sfdx force:auth:web:login -a rodrizzledevhub -d
    ```

> Note: `-a` flag is an _alias_ flag, where you will assign a name to the DevHub. The `-d` flag will set this DevHub as _default_. When you execute this command you will be redirected to the front-end SFDC UI. Here you will be asked for your login credentials, possibly a verification code, and verification that the user is allowed to access the Salesforce application via the CLI tooling, SFDX. 

----