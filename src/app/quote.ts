export class Quote {

    public showDetails: boolean;

    constructor(public quote:String, public Author: String, public Creator: String, public Created: Date){
        this.showDetails=false;
    }

}
