class Child {
    constructor(
        title,
        name,
        age,
        bestColor,
        worstColor,
        schoolClass,
        faveParent,
        picture
    ){
        this.title = title
        this.name = name,
        this.age = age,
        this.color =  {
            best : bestColor,
            worst : worstColor
        },
        this.schoolClass = schoolClass,
        this.faveParent = faveParent,
        this.picture = picture 
    }
    changeName(newName){
        this.name = newName
        return newName;
    }
    changeFaveColor(newBestColor, newWorstColor){
        this.color.best = newBestColor;
        this.color.worst = newWorstColor;
        return
    }
}

export default Child;