import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Gabe Rodriguez"
    message = "I hope you have a wonderful day."
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }
}