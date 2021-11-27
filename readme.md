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

4. Finally, we can drag and drop our component to our layout manager, click Save, and Navigate back to our `Foobar Application` and there it is ... your first LWC deployed. 

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143603910-f7c1822e-35d7-427e-9963-71ef48c147c9.png" width="450"/></p>

----

### Data Binding & Local Properties

1. Right now in our LWC component it greets the user with a hardcoded message. But what if we want to make this a dynamic message. For example what if the message display's the user name. To do this we need to use 2 sets of files to accomplish a practice called `data binding`. 

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143604992-b50d07e6-3da1-4a7d-9ff6-4863c5c9ce85.png" width="450"/></p>

2. To implement some data binding, start by opening the `helloWorld.js` file. In here we will set some local properties to our `helloWorld` class. 

```javascript
// Was
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {}

// Change to
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Gabe Rodriguez"
    message = "I hope you have a wonderful day."
}
```

3. Now nav to the `helloWord.html` file and implment the data binding

```html
<template>
    <div style="border: 1px solid red;">
        <p>Hello {fullName}</p>
        <p>This is the hellow world component that we built in our Project Structure.</p>
        <p>{message}</p>
        <button>Push Me!</button>
    </div>
</template>
```

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143606660-6072e007-0ccb-426a-a1e7-7a9a15af09fd.png" width="450"/></p>

### Two Way Data Binding

1. So the above example still has the static input problem. Yes it dynamically passes data from the `javascript` file to the `html` file, but the input is still hardcoded. So how do we allow the user to input data in real-time and the html input update on the screen? To do this you need Two-Way Data Binding. 

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143683364-cc4a4378-0ee5-47de-8a26-2f112c2f87ef.png" width="450"/></p>

2. Here we will modify the _javascript_ to include a `method`. A method is simply code that provides some behavior to your application. In this case we want to _change the screen input_ so we need a _changeHandler_ method. In the method we will ask for some initiating activity called an _event_. The event in this case is the typing of new input into the screen. When we receive this _event_ we will tell the _html_ to update the screen value on the UI. 

We will display a new message this time, where we are asking the user to input a course title. So in the _javascript_ we need to add a _title_ property to the class, and use it to store the value the user inputs. Modify your `helloWorld.js` file with the following code: 

```javascript
// Was
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Gabe Rodriguez"
    message = "I hope you have a wonderful day."
}

// Change to...
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Gabe Rodriguez"
    message = "I hope you have a wonderful day."
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }
}
```

3. Now go to the `helloWorld.html` file. Here we need to modify the _presentation_ of the UI with 2 new items. The first is an _input_ field allowing the user to type in some new _title_ of a course. The second is the sentence (_string_) that will display the input dynamically. In the file enter the following code...

```html
<template>
    <div style="border: 1px solid red;">
        <label>Course Title</label><input type=text onkeyup={changeHandler}/>
        <hr>
        <div>Hello, {fullName} attending the {title} course.</div>
    </div>
</template>
```

> Note: The `fullName` and the new property `title` are in the interpolation syntax `{ }`, and will be read from the javascript `changeHandler` method or the properties in the Javascript class and passed to the `html`. 

4. Now push these changes back to the Scratch Org. 

```s
sfdx force:source:push
```

5. Go back to the Salesforce Scratch org and refresh and you should see the updates.

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143684272-d77cad72-7961-47e6-bf25-ade6da0ffdc5.png" width="450"/></p>

---

### Lighting Web Component Library <sup><sub>[LWC Component Library](https://developer.salesforce.com/docs/component-library/overview/components)</sub></sup>

1. So the styling of our component looks rough. This is why Salesforce provides a LWC library. In this library they have already built standard components that you can reuse by copy/pasting the code. To show you this ... instead of using our ugly Two-Way Data Binding form, lets us a Salesforce `Card` component. 

Open a browser and search for `Salesforce Lightning Component Library`

2. Once the Library opens, in the _Quick Find_ Search bar, type `Card`. You will see a response in the left-nav-bar that says _Components_ > _lightning_ > _card_, select this element. 

3. The main portion of the page will render details of the `Card` component. In this component at the bottom you will see code, in the _Lighting Mini Playground_. Copy the code between the `<template></template>` tags, which should look like the code below. 

```html
        <lightning-card  title="Hello">
            <lightning-button label="New" slot="actions"></lightning-button>
            <p class="slds-p-horizontal_small">Card Body (custom component)</p>
            <p slot="footer">Card Footer</p>
        </lightning-card>
```

4. Go to your `helloWorld.html` file, and lets use this code with some modifications. We don't want the text that we saw in the Lighting Web Component library because it won't match our properties and we'll have to reconfigure our Two-Way-Data Binding. So let's do the following:
    - [ ] The body of the `<lightning-card> </lightning-card>` tags should be what we previously had with our input field and title, so copy your previous code and paste it between these 2 tags.
    - [ ] In the `<lightning-card title="Hello">` change this to `<lightning-card title="LWC Reuse Example">` 
    - [ ] Delete any previous code so your file looks like this. 

```html
<template>
    <lightning-card  title="LWC Reuse Example">
        <label>Course Title:  </label><input type=text onkeyup={changeHandler}/>
        <hr>
        <div>Hello, {fullName} attending the {title} course.</div>
    </lightning-card>
</template>
```

5. Redeploy the new component.

```s
sfdx force:source:push
```

6. Your new output looks a little more consistent with what you would ordinarily see on Salesforce layouts, and you reused what other developers have already done for you. 

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/143685061-0e17e48b-5f59-44ea-9207-c797363319a4.png" width="450"/></p>

----