# Salesforce Development

## Content
1. Lightning Web Components

---- 
### Lightning Web Components

#### What is _Lighting Web Component_ (LWC) vs. _Aura_. 

#### Setting up the Development Environment 

1. Sign Up for Salesforce Developer Org [here](https://developer.salesforce.com/signup)

2. Setup Salesforce DX Environment

    1. Install `Visual Studio Code`
        - [ ] Installation instructions for your platform can be found [here](https://code.visualstudio.com/download)

    2. Install `Salesforce CLI`
        - [ ] Installation instruction for your platform can be found [here](https://developer.salesforce.com/tools/sfdxcli)
        - [ ] In a terminal session validate installation by running 
        ```sfdx
        sfdx
        ```
        - [ ] validate plugin installation also by running 
        ```sfdx
        sfdx plugins --core
        ```

    3. Install Extensions in Visual Studio Code
        - [ ] On the left-hand navbar will be a button labeled _Extensions_
        - [ ] Use the the Search feature to query for _Salesforce Extension Pack_ and install top hit

> NOTE: In Visual Studio Code to initiate an integrated terminal session on a Mac type `Ctrl + ~`. When the terminal session comes up validate that you can execute commands like `sfdx`. If you **CANNOT** you may need to configure your `ENV PATH` to point to the `sfdx` download binaries. 

3. Set up My Domain and Dev Hub

4. Set up a Project and Dev Org
----