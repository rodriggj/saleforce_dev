# Salesforce Development

## Content
1. [Lightning Web Components](https://github.com/rodriggj/saleforce_dev#lightning-web-components)

---- 
### Lightning Web Components

#### What is _Lighting Web Component_ (LWC) vs. _Aura_. 
<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143132486-776d36e0-2b80-4d67-b152-f38aa5fa037c.png" width="450"></p>

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

        ```s
        sfdx
        ```

        - [ ] validate plugin installation also by running 

        ```s
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

    1. Go to Visual Studio Code, and in the terminal we want to create a new project. 

    ```s
    sfdx force:project:create -n "learning_org"
    ```

    > Note: `-n` is the _name_ flag

    2. Now we need to associate our project structure with a `Dev Hub`. To do this we can execute the following command

    ```s
    sfdx force:auth:web:login -a rodrizzledevhub -d
    ```

    > Note: `-a` flag is an _alias_ flag, where you will assign a name to the DevHub. The `-d` flag will set this DevHub as _default_. When you execute this command you will be redirected to the front-end SFDC UI. Here you will be asked for your login credentials, possibly a verification code, and verification that the user is allowed to access the Salesforce application via the CLI tooling, SFDX. 

    3. Now within the project directory structure we need to modify the configuration of our project so we can create a scratch org with some data populated in the Org we create. To do this
    - [ ] Open the file found at `config/project-scratch-def.json` in your code editor
    - [ ] Below the `features` node in the json file, add another node (aka key:value pair) like this...
    
    ```json
    "hasSampleData": true,
    ```

    4. Before you receive a `You do not have access ...` error, make sure that before you execute any commands using the CLI to create a scratch org, that you enable the ability to do so in the Salesforce UI. 
    - [ ] In your Salesforce Org, nav to `Setup`
    - [ ] Query the Search function for `Dev Hub`
    - [ ] By default the `Enable Dev Hub` option is **Disabled**, you need to enable this functionality

    <p align="center"><img src="https://user-images.githubusercontent.com/8760590/143151064-0e5e460c-7427-48c2-a709-ad15e64f8bc9.png" width="450"></p>

    5. Now we are ready to create a Scratch Org. Within the DevHub we may have multiple `Scratch Orgs`. To create a `Scratch Org` we will execute the following command. 

    ```s 
    sfdx force:org:create -a lwcScratchOrg -d 30 -f config/project-scratch-def.json -s
    ```

    > Note: Explanation of the above command...
    >
    > In this command the `-a` flag still stands for _alias_ so we assign this scratch org a name of _lwsScratchOrg. 
    >
    > The `-d` flag **DOES NOT** mean `default` in this case, but rather `days` or `duration` (in days). The SFDC platform allows a scratch org to exist from 1 - 30 days, after the 30 day limit the scratch org will be deleted. So in this case we are setting a maximum duration of 30 days. 
    >
    > We use the `-f` flag to specify the file that is the configuration specification for our Scratch Org. This was the _project-scratch-def.json_ file. To refer to this file we need to specify the path to this file which, if we are in the root directory will simply be _config/project-scratch-def.json_. 
    >
    >Finally, we need to tell Salesforce that we want to use the same user `rodriggj@provar.com` that set up the org, so we use the `-s` flag to specify _same default username_.

    <p align="center"><img src="https://user-images.githubusercontent.com/8760590/143151330-29f134a3-c1f0-43dc-b71e-cc8a213067be.png" width="450"></p>

<sup><sub>[Back To Top](https://github.com/rodriggj/saleforce_dev#content)</sup><sub>

----