export class Quote {

    public showDetails: boolean;

    constructor(public quote:String, public author: String, public creator: String, public Created: Date){
        this.showDetails=false;
    }

}
