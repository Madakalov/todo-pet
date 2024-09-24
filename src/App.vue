<script setup>
import { onMounted, ref } from "vue";

const textTask = ref("");
let idTask = ref(0);
const listTask = ref([]);
const editableTask = ref(null);

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

function editTask(task) {
    editableTask.value = { ...task };
}

function updateTask(task) {
    const taskIndex = listTask.value.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
        listTask.value[taskIndex].content = editableTask.value.content;
        addLocal();
        editableTask.value = null;
    }
}

function cancelEdit() {
    editableTask.value = null;
}

onMounted(() => {
    listTask.value =
        JSON.parse(localStorage.getItem("check")) || clearInputTask();
});
</script>

<template>
    <section class="todo">
        <div class="todo__inner">
            <div class="todo__task task">
                <input
                    v-model="textTask"
                    type="text"
                    class="task__input input"
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
                    <div class="todo__container">
                        <input
                            type="checkbox"
                            v-model="item.checked"
                            true-value="on"
                            false-value="off"
                            class="todo__checkbox"
                        />              
                        
                        <template v-if="editableTask && editableTask.id === item.id">
                            <input
                                v-model="editableTask.content"
                                @blur="updateTask(item)"
                                @keypress.enter="updateTask(item)"
                                type="text"
                                class="todo__edit-input input"
                            />
                            <button class="button" @click="updateTask(item)">Сохранить</button>
                            <button class="button" @click="cancelEdit">Отмена</button>
                        </template>
                        
                        <template v-else>
                            <p
                                @dblclick="editTask(item)"
                                :class="{ 'todo__content--done': item.checked === 'on' }"
                                class="todo__content"
                            >
                                {{ item.content }}
                            </p>
                            <button @click="deleteTaskTodo(item)" class="todo__delete button">
                                УДАЛИТЬ
                            </button>
                        </template>
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
    // .todo__edit-input

    &__edit-input {
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
