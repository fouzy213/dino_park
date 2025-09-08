export interface DinoType{
    id:number | null;
regime :string;
name_:string;
dino_description:string;
}


export class Dino{
   protected id:number | null;
protected regime :string;
protected name_:string;
protected dino_description:string;


constructor(
 id:number | null,
regime :string,
name_:string,
dino_description:string
){

this.id = id;
this.regime =regime;
this.name_=name_;
this.dino_description=dino_description

}
static fromRow(row:DinoType):Dino{
    return new Dino(
        row.id,
        row.regime,
        row.name_,
        row.dino_description
    );
}
getId(){
    return this.id
}
getRegime(){
    return this.regime
}
getName(){
    return this.name_
}
getDescription(){
    return this.dino_description
}
toJson(){
    return {
        id:this.id,
        regime:this.regime,
        name:this.name_,
       dino_description: this.dino_description
};
}
}