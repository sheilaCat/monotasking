<template>
    <section>
        <b-field>
            <b-input v-model="todoInput" placeholder="添加新任务" @keyup.enter.native="onEnterInput"></b-input>
        </b-field>

        <section class="content">
            <b-field v-for="(todo, index) in todoList" :key="index">
                <b-input icon="account" placeholder="todo" disabled :value="todo" @ >
                </b-input>
            </b-field>
        </section>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                todoInput: '',
                todoList: JSON.parse(window.localStorage.getItem('todoList') || '[]')
            }
        },
        methods: {
            onEnterInput() {
                // 把当前的todoList存入缓存
                this.todoList.push(this.todoInput)
                window.localStorage.setItem('todoList', JSON.stringify(this.todoList))

                // enter后清空当前内容
                this.todoInput = ''
            }
        }
    }
</script>

<style scoped>
    tr.is-info {
        background: #167df0;
        color: #fff;
    }

    .content {
        height: 40rem;
        overflow: scroll;
    }
</style>