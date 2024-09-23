<script setup></script>

<template>
    <section class="todo">
        <div class="todo__inner">
            <div class="todo__task task">
                <input type="text" class="task__input" />
                <div class="task__action">
                    <button class="task__add button">ДОБАВИТЬ</button>
                    <button class="task__clean button">ОЧИСТИТЬ</button>
                </div>
            </div>
            <ul class="todo__list">
                <li class="todo__item">
                    <div class="todo__container">
                        <input
                            type="checkbox"
                            name="todo-checkbox"
                            id="todo-checkbox"
                            class="todo__checkbox"
                            title="Отметить выполнение"
                        />
                        <p class="todo__content">
                            Далеко-далеко за словесными горами в стране.
                        </p>
                        <button
                            type="button"
                            class="todo__delete button"
                            id="todo__delete"
                        >
                            УДАЛИТЬ
                        </button>
                    </div>
                </li>
                <li class="todo__item">
                    <div class="todo__container">
                        <input
                            type="checkbox"
                            name="todo-checkbox"
                            id="todo-checkbox"
                            class="todo__checkbox"
                            title="Отметить выполнение"
                        />
                        <p class="todo__content">
                            Далеко-далеко за словесными горами в стране.
                        </p>
                        <button
                            type="button"
                            class="todo__delete button"
                            id="todo__delete"
                        >
                            УДАЛИТЬ
                        </button>
                    </div>
                </li>
                <li class="todo__item">
                    <div class="todo__container">
                        <input
                            type="checkbox"
                            name="todo-checkbox"
                            id="todo-checkbox"
                            class="todo__checkbox"
                            title="Отметить выполнение"
                        />
                        <p class="todo__content">
                            Далеко-далеко за словесными горами в стране.
                        </p>
                        <button
                            type="button"
                            class="todo__delete button"
                            id="todo__delete"
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
      border-radius: 12px;
      padding: 12px;
      background-color: rgba(255, 130, 130, 0.411);      
    }

    // .todo__container

    &__container {
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      gap: var(--gap-12);
    }

    // .todo__checkbox

    &__checkbox {
      width: 16px;
      height: 16px;
    }

    // .todo__content

    &__content {
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
.button {
}
</style>
