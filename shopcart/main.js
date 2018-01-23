var app = new Vue({
    el: "#app",
    data: {
        list: [{
                id: 1,
                name: 'iphone',
                price: '5888',
                count: 1
            },
            {
                id: 2,
                name: 'ipad',
                price: '3888',
                count: 1
            },
            {
                id: 3,
                name: 'mac',
                price: '18888',
                count: 1
            }
        ],
        selectList: [],
        checked: false

    },
    computed: {
        totalPrice() {
            let total = 0;
            for (let i = 0; i < this.selectList.length; i++) {
                var index = this.selectList[i];
                var item = this.list[index];
                if(item){
                    total += item.price * item.count;
                }                
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }

    },
    methods: {
        handleReduce(index) {
            if (this.list[index].count === 1) {
                return;
            }
            this.list[index].count--;
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1)
        },
        swapCheck() {
            var selectList = document.getElementsByName('selectList');
            var len = selectList.length;
            if (this.checked) {
                for (var i = 0; i < len; i++) {
                    var item = selectList[i];
                    item.checked = false;
                }
                this.checked = false;
                this.selectList = [];
            } else {
                for (i = 0; i < len; i++) {
                    item = selectList[i];
                    if (item.checked === false) {
                        item.checked = true;
                        this.selectList.push(selectList[i].value);
                    }
                }
                this.checked = true;

            }
        }

    }
})