const counter = {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            this.count--;
        }
    },

    template: `
        <div>
            <p> {{count}} </p>
            <button @click="increase">Увеличить</button>
            <button @click="decrease">Уменьшить</button>
        </div>
    `
};