<script setup>
import { onMounted, ref } from "vue";

const textTask = ref("");
let idTask = ref(0);
const listTask = ref([]);

function addTaskTodo() {
    textTask.value = textTask.value.trim();
    if (textTask.value !== "") {
        listTask.value.unshift({
            id: idTask.value++,
            content: textTask.value,
            checked: false,
        });
    }
    addLocal();
    clearInputTask();
}

function clearInputTask() {
    textTask.value = "";
}

function addLocal() {
    localStorage.setItem("check", JSON.stringify(listTask.value));
}

function deleteTaskTodo(task) {
    listTask.value = listTask.value.filter((item) => item !== task);
    addLocal();
}

onMounted(() => {
    listTask.value = JSON.parse(localStorage.getItem("check")) || clearInputTask();
});
</script>

<template>
    <section class="todo">
        <div class="todo__inner">
            <div class="todo__task task">
                <input
                    v-model="textTask"
                    type="text"
                    class="task__input"
                    @keypress.enter="addTaskTodo"
                />
                <div class="task__action">
                    <button class="task__add button" @click="addTaskTodo">
                        ДОБАВИТЬ
                    </button>
                    <button class="task__clean button" @click="clearInputTask">
                        ОЧИСТИТЬ
                    </button>
                </div>
            </div>
            <ul class="todo__list" v-if="listTask.length">
                <li v-for="item of listTask" :key="item.id" class="todo__item">
                    <div
                        class="todo__container"
                        :class="{
                            'todo__container--done': item.checked === 'on',
                        }"
                    >
                        <input
                            type="checkbox"
                            name="todo-checkbox"
                            id="todo-checkbox"
                            class="todo__checkbox"
                            title="Отметить выполнение"
                            v-model="item.checked"
                            true-value="on"
                            false-value="off"
                        />
                        <p
                            class="todo__content"
                            :class="{
                                'todo__content--done': item.checked === 'on',
                            }"
                        >
                            {{ item.content }}
                        </p>
                        <button
                            type="button"
                            class="todo__delete button"
                            id="todo__delete"
                            @click="deleteTaskTodo(item)"
                        >
                            УДАЛИТЬ
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.todo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 15px;
    background-color: #dcefff6b;
    // .todo__inner

    &__inner {
        display: flex;
        flex-direction: column;
        row-gap: calc(var(--gap-12) * 2);
        width: 100%;
        max-width: 720px;
        padding: clamp(25px, 2.7vw, 52px);
        border-radius: 25px;
        background-color: #fff;
    }

    // .todo__task

    &__task {
    }

    // .todo__list

    &__list {
        display: flex;
        flex-direction: column;
        row-gap: var(--gap-12);
    }

    // .todo__item

    &__item {
        display: block;
    }

    // .todo__container

    &__container {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        gap: var(--gap-12);
        border-radius: 12px;
        padding: 12px;
        background-color: rgba(255, 130, 130, 0.411);
        &--done {
            background-color: rgba(165, 255, 130, 0.411);
        }
    }

    // .todo__checkbox

    &__checkbox {
        width: 16px;
        height: 16px;
    }

    // .todo__content

    &__content {
        &--done {
            text-decoration: line-through;
        }
    }

    // .todo__delete

    &__delete {
        margin-left: auto;
    }
}
.task {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: var(--gap-12);
    width: 100%;

    // .task__input

    &__input {
        padding: var(--gap-12) 10px;
        flex-grow: 1;
        border: none;
        border-bottom: 2px solid #3b3b3b;
        outline: none;
        font-size: 20px;
        font-weight: 400;
        &:focus {
            border-color: #afe6ff;
        }
    }

    // .task__action

    &__action {
        display: flex;
        align-items: center;
        gap: var(--gap-12);
    }
    // .task__add

    &__add {
    }

    // .task__delete

    &__delete {
    }
}
</style>
