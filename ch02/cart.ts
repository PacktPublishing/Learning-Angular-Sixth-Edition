function ShoppingCart(msg: string): ClassDecorator {
    return function (target: Function) {
	    target.prototype.checkout = () => {
		    console.log(msg);
	    };
    }
}

function Items(target: Function, key: string | undefined, i: number) {
    const location = key ?? `${target.name} constructor`;
    console.log(`Run in ${location} parameter ${i}`);
}

@ShoppingCart('Checking out!')
class MyCart {
    constructor(@Items items: number) {}
}

interface MyCart {
    checkout(): void;
}

const cart = new MyCart(10);
cart.checkout();
