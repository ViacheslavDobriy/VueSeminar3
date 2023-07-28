const todo = {
    data() {
        return {
            toDoText: [],
            newText: ''
        }
    },
    methods: {
        addNewToDo() {
            this.toDoText.push(this.newText);
            this.newText = '';
        },
        deleteTask(text) {
            let isFound = false;
            const newArray = [];
            for (let i = 0; i < this.toDoText.length; i++) {
                if (text === this.toDoText[i] && !isFound) {
                    isFound = !isFound;
                } else {
                    newArray.push(this.toDoText[i]);
                }
            };
            this.toDoText = newArray;
        },
    },
    template:`
        <div>
            <input type="text" v-model.lazy="newText" placeholder="Добавить элемент"><button @click="addNewToDo()">Добавить</button>
            <ul>
                <li v-for="toDo in toDoText" :key="toDo.id">{{ toDo }} <button @click="deleteTask(toDo)">Удалить</button> </li>
            </ul>
        </div>
    `
}