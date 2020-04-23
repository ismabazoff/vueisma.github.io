<template>
    <div class="all">
        <h5>Добавить опрос</h5>
        <div 
            :class="{
                condition:true,
                first:item.condition == 'Условие 1',
                second:item.condition == 'Условие 2',
                third:item.condition == 'Условие 3'
            }"
            v-for='item in items' 
            :key="item.condition"
        >
            
            <div v-if="item.condition=='Условие 1'" ref='ConditionOne'>
                <div class="conditions">
                    <p>Условие 1</p>
                    <select name="" id="">
                        <option value="">Возраст респондента</option>
                    </select>
                </div>
                <div class="range">
                    <p>Диапазон 1</p>
                    от<input type="text">
                    до<input type="text">
                </div>
                <div class="range">
                    <p>Диапазон 2</p>
                    от<input type="text">
                    до<input type="text">
                </div>
                <div class="range" v-for='(range,index) in ranges'>
                    <p>Диапазон {{index + 3}}</p>
                    от<input type="text">
                    до<input type="text">
                </div>
                <div class="buttons">
                    <button class="button1" v-on:click='addInput()'>+ Добавить диапазон</button>
                    <button class="button2" v-on:click='removeFirst()'>Удалить условие</button>
                </div>
            </div>
            
            <div v-if="item.condition=='Условие 2'" ref='ConditionTwo'>
                <div class="conditions">
                    <p>Условие 2</p>
                    <select name="" id="">
                        <option value="">Тип карты лояльности</option>
                    </select>
                </div>
                <div class="conditions">
                    <p>Тип</p>
                    <select name="" id="">
                        <option value="">Gold</option>
                    </select>
                </div>
                <div class="conditions" v-for='type in types'>
                    <p>Тип</p>
                    <select name="" id="">
                        <option value="">Gold</option>
                    </select>
                </div>
                <div class="buttons">
                    <button class="button1" v-on:click='addType()'>+ Добавить тип</button>
                    <button class="button2" v-on:click='removeSecond()'>Удалить условие</button>
                </div>
            </div>

            <div v-if="item.condition=='Условие 3'" ref='ConditionThird'>
                <div class="conditions">
                    <p>Условие 3</p>
                    <select name="" id="">
                        <option value="">Статус карты лояльности</option>
                    </select>
                </div>
                <div class="conditions">
                    <p>Статус 1</p>
                    <select name="" id="">
                        <option value="">Активна</option>
                    </select>
                </div>
                <div class="conditions" v-for='state in status'>
                    <p>Статус 1</p>
                    <select name="" id="">
                        <option value="">Активна</option>
                    </select>
                </div>
                <div class="buttons">
                    <button class="button1" v-on:click='addStatus()'>+ Добавить статус</button>
                    <button class="button2" v-on:click='removeThird()'>Удалить условие</button>
                </div>
            </div>
        </div>
        <div class="conditionNew" v-for='(con,index) in news' ref="Condition">
            <div class="conditions">
                <p>Условие {{index + 4}}</p>
                <select name="" id="">
                    <option value="">Выберите условие</option>
                </select>
            </div>
            <div class="buttons">
                <button class="button2" v-on:click='deleteConditions()'>Удалить условие</button>
            </div>
        </div>

        <button class="addCondition" v-on:click='addConditions()'>
            +<br/>
            Нажмите чтобы добавить новое условие.<br/>
            Все условия связываются между собой логическим "И".
        </button>

        <div class="footer">
            <button>Протестировать опрос</button>
            <button>Далее-></button>
        </div>
    </div>
</template>

<script>

export default{
    // computed:{
    //     polls(){
    //         return this.$store.state.poll
    //     }
    // }
    props:{
            
    },
    data(){
        return{
            items:[
                {
                    condition:'Условие 1'
                },
                {
                    condition:'Условие 2'
                },
                {
                    condition:'Условие 3'
                }
            ],
            news:[

            ],
            ranges:[

            ],
            types:[
                
            ],
            status:[

            ]
        }
    },
    methods:{
        removeFirst(){
            this.$refs.ConditionOne[0].remove();            
        },
        removeSecond(){
            this.$refs.ConditionTwo[0].remove();            
        },
        removeThird(){
            this.$refs.ConditionThird[0].remove();            
        },
        addInput(){
            this.ranges.push('');
        },
        addType(){
            this.types.push('');
        },
        addStatus(){
            this.status.push('');
        },
        addConditions(){
            this.news.push('');            
        },
        deleteConditions(){
            this.news.splice(0,1)
        }
    }
    
}

</script>

<style scoped>
    .first{
        background-color:#FFFCF5;
    }
    .second{
        background-color: #F8FAFF;
    }
    .third{
        background-color: #FAFFF8;
    }
    .conditionNew{
        background-color: #FAFAFA;
    }

    .conditions{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:20px;
        margin-right:30px;
    }

    .conditions select{
        width: 350px;
        padding:5px;
        border-radius:8px;
    }
    .range{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .range input{
        border-radius:4px;
    }

    .buttons{
        display: flex;
        justify-content: center;
    }

    .button1,.button2{
        padding:5px;
        border-radius:5px;
        margin-top:20px;
        margin-bottom:20px;
    }

    .button1{
        border:2px solid greenyellow;
        margin-left:150px;
    }

    .button2{
        border:2px solid red;
        margin-left:140px;
    }

    h5{
        padding-top:10px;
    }

    .all{
        box-shadow: 7px 7px rgba(0,0,0,0.25), 5px 10px 10px rgba(0,0,0,0.22);
    }

    .addCondition{
        color: green;
        text-align: center;
        width:550px;
        padding:20px;
        margin:20px;
        background-color: white;
    }

    .footer{
        display: flex;
        justify-content: space-between;
        background-color: #F4F7F9;
    }

    .footer button{
        padding: 8px;
        margin:20px;
        border-radius:8px;
    }

    .footer button:first-child{
        color: green;
        background-color: white;
    }
    .footer button:last-child{
        color: white;
        background-color: green;
        border:1px solid green;
    }
</style>