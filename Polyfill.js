/* Function.prototype.myBind = function(context) {

    const fn = this;

    return function() {
        return fn.call(context);
    };
};

function greet(){
    console.log(this.name)
}

const user = {
    name: "Anas"
}

const fn = greet.myBind(user)

fn() */



//Example


/* function greet(city){
    console.log(`${this.name} ${city}`)
}

const user = {
    name: "Anas"
}

const fn = greet.myBind(
    user,"Delhi"
)
fn() */



//Example
/* Function.prototype.myBind = function(context, ...args) {

    const fn = this;

    return function(...newArgs) {

        return fn.call(
            context,
            ...args,
            ...newArgs
        );
    };
};

function greet(city, country) {
    console.log(
        this.name,
        city,
        country
    );
}

const user = {
    name: "Anas"
};

const fn = greet.myBind(
    user,
    "Delhi"
);

fn("India"); */




//Example
Function.prototype.myBind = function(context, ...args) {

    const fn = this;

    return function(...newArgs) {

        return fn.apply(
            context,
           [ ...args,
            ...newArgs]
        );
    };
};

function greet(a,b,c){
    console.log(a,b,c)
}

const fn = greet.bind(null,10)

fn(20,30)