class todo{
    constructor(arr){
        this.arr = arr;
    }

    addTodo(todo){
        this.arr.push(todo);
    }

    remove(indexOfTodo){
        for(var i=indexOfTodo;i<this.arr.length;i++){
            this.arr[i] = arr[i+1];
        }
        this.arr.length = this.arr.length-1;
    }

    update(index,updatedTodo){
        this.arr[index] = updatedTodo;
    }

    gateAll(){
        var todos = [];
        for(var i=0;i<this.arr.length;i++){
            todos.push(this.arr[i]);
        }
        return todos;
    }

    clear(){
        this.arr.length = 0;
    }
}

var todo = new todo([]);
todo1 = {1: "wake up in the morning"};
todo2 = {2: "go to classes"};

todo.addTodo(todo1);
todo.addTodo(todo2);

var ans = todo.getAll();
console.log(ans);
todo.clear();
var ans1 = todo.getAll();
console.log(ans1);
