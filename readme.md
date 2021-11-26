# Salesforce Development

## Content
1. [Lightning Web Components](https://github.com/rodriggj/saleforce_dev#lightning-web-components)

---- 
## Salesforce Org Setup

### Setting up the Development Environment 

#### 1. Sign Up for Salesforce Developer Org [here](https://developer.salesforce.com/signup)
> username: rodriggj@provar.com
>
> password: T@********!
>
> url: https://provar-b6-dev-ed.my.salesforce.com

---

#### 2. Setup Salesforce DX Environment

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

---

#### 3. Set up My Domain and Dev Hub

1. Navigate to your developer org login screen which you can access from `login.salesforce.com`, enter login credentials.

2. When the page redirects to the _Setup_ screen. In the left-nav bar at the top is a _Search_ function. Enter `domains`. Select `My Domain ` from the returned list of values.

3. You must enter a globally unique domain value. Enter a value unique to you and _Check Availability_. Keep Trying till you find one.

> I entered `line-blend-skis` as my unique string, which was available and with some additional input from Salesforce my new domain became `line-blend-skis-dev-ed.my.salesforce.com`

4. You will need to wait for Salesforce to `Provision you new Domain`. You will know that it is provisioned with the receipt of an email message from Salesforce. When you do receive this notice you can complete the last step which is to `Deploy your new Domain to Users`. This will be a button that will display and you can click this button. 

5. You will be redirected to the login screen `login.salesforce.com`. Enter your credentials and you should be logged in to the Org with the URL as the new domain. 

---

#### 4. Set up a `Project` and `DevHub` <sup><sub>[Developer Documentation](https://developer.salesforce.com/docs/atlas.en-us.234.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm)</sup></sub>

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
> 
> A successful result will render an image similar to the following, with a Scratch Org ID, and UserName defined.

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143151330-29f134a3-c1f0-43dc-b71e-cc8a213067be.png" width="450"></p>

<sup><sub>[Back To Top](https://github.com/rodriggj/saleforce_dev#content)</sup><sub>

6. Now that the `Scratch Org` has been created you can open the `Scratch Org` from the terminal with the following command. This command will redirect you back to the salesforce UI where you can verify you have a new `Org` by the domain in the URL will be new -- this is the domain of the `Scratch Org`.

```s
sfdx force:org:open
```

> NOTE: If you want to see what all the available commands in are from the CLI you can see the help documenation by typing `sfdx commands` in the terminal. 
----

### Lightning Web Components Fundamentals

1. Navigate to the `lwc` directory within the folder structure of the `Project` you created.

```s
cd learning_org/force-app/main/default/lwc
```

2. Create the `lwc` component with the CLI

```s
sfdx force:lightning:component:create --type lwc -n helloWorld
```
---

### LWC Folder Structure

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143170486-47f42423-5da2-4f36-be5c-f682b02b654d.png" width="450"/></p>

### App Creation and Component Deployment

1. Go to your scratch org that you created via the URL that was generated during the CLI command. If you closed out of that org, you can reopen by executing the following command: 

```s
sfdx force:org:open
```

2. In the `Setup` screen, use the `Search` filter and query for `App Manager`. Click `New Lightning App` and advance through the wizard. You **Do Not** need to add any _Navigation Items_. Also, when presented with the option to add _User Profiles_ you **Only Need** `System Administrator` role for now. 

3. Now that you've created the _Application_, you will now need to add _Pages_ to the application. By default your application will not have any. To do this go back to _Setup_ and in the Search bar type `Lightning App Builder`

4. Navigate through the wizard. 

### Markup our LWC 

1. Go back to project structure in VS code. Open the `lwc > helloWorld > helloWorld.html` file. In this file between the `<template> </template>` tags copy/paste the following code, and save and close this file. 

```html
<template>
    <div style="border: 1px solid red;">
        <p>Hello World</p>
        <p>This is the hellow world component that we built in our Project Structure.</p>
        <button>Push Me!</button>
    </div>
</template>
```

2. What we just did is provide some markup to the LWC so on the UI you can see a visual representation of our component. Now we need to tell Salesforce to that this component is available for use. To do this we need to modify our `helloWorld.js-meta-xml` file. Open this file and copy / paste the following code:

```xml
<!-- Was -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>51.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>

<!-- Change to -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>51.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
    </targets>
</LightningComponentBundle>
```

3. Now that we have the component, specified a target where the component can be used, we need to `push` this to Salesforce so it becomes available for salesforce to use. In the terminal, enter the following command: 

```s
sfdx force:source:push
```

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143603268-d4564c41-d1b2-434f-b637-65926508625e.png" width="450"/></p>

> Note: Once you've pushed the changes to the Salesforce Scratch Org, you should see the `Custom Component` become available to you for use in the UI. If the UI was already opened prior to the `sfdx force:source:push` command you may have to click the _Refresh_ button for the component to appear.

