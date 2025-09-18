//restriction for when user is not allow for added the addhar number is not added another number

var AddharDetails = {
    name: 'Ashutosh',
    addharCard: 254681253245,
}


let handler = {
    set(obj ,  props, value) {
        if(props === 'addharCard'){
            console.log(" Not allowed to change the addhar number");
        }else{
            Reflect.set(...arguments);
        }
    }
}

let empProxy = new Proxy(AddharDetails, handler);

empProxy.addharCard = 125122554521;
// console.log(empProxy)