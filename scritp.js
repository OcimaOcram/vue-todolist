const todoArray = [
    {
        text: "lavare i piatti",
        done: true,
    },
    {
        text: "spazzare a terra",
        done: false,
    },
    {
        text: "andare dal dentista",
        done: true,
    }
]
const app = new Vue({
    el: "#app",
    data: {
        todoArray,
        task: ""
    },
    methods: {
        verificaDoneElemento(element) {
            if (element.done == false) {
                return "text-decoration-line-through";
            }
        },
        verificaIconaElemento(element) {
            if (element.done == false) {
                return "fas fa-times p-3";
            } else {
                return "fa-solid fa-check p-3";
            }
        },
        remove(index) {
            this.todoArray.splice(index, 1);
        },
        addNewTask() {
            const newTask = {
                text: this.task.trim(),
                done: true
            }
            if (newTask.text.length > 0) {
                //uso unshift per metterlo in cima e non alla fine
                this.todoArray.unshift(newTask);
                this.task = "";
            }
        },
        changeDone(element) {
            if (element.done) {
                element.done = false;
            } else {
                element.done = true;
            }

        }
    },

});