class Document {
    constructor(title) {
        this.title = title
        this.signature = null
        this.parent = null
    }
    sign(signature) {
        this.signature = signature
    }

    out() {
        console.log("Im a Document title=" + this.title)
        console.log("Parent =" + this.parent.title)
        console.log(this.title)
    }

    remove() {
        this.parent.removeMe(this.title)
    }

    remove(remtitle) {
        console.log("im beeing removed title=" + remtitle)
        this.parent.removeMe(remtitle)
    }

}

class DocumentComposite {
    constructor(title) {
        this.items = []
        if (title) {
            this.items.push(new Document(title))
        }
    }
    add(item) {
        this.items.push(item)
        item.parent = this
    }
    sign(signature) {
        this.items.forEach((doc) => {
            doc.sign(signature)
        })
    }
    out() {
        console.log(this)
        this.items.forEach(d => d.out())
    }

    removeMe(remtitle) {
        this.items = this.items.filter(doc => doc.title !=  remtitle)
    }

    remove(remtitle) {
        this.items.forEach(doc => doc.remove(remtitle))
    }

}

const root = new DocumentComposite()
const develop = new DocumentComposite()
const support = new DocumentComposite()
root.add(develop)
root.add(support)

const dev1 = new Document("Im Dev1")
const dev2 = new Document("Im Dev2")
develop.add(dev1)
develop.add(dev2)

const sup1 = new Document("Im Sup1")
const sup2 = new Document("Im Sup2")
support.add(sup1)
support.add(sup2)

//console.log(root)
root.out()














