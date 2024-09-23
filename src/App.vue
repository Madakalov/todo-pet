<script setup></script>

<template>
    <section class="todo">
        <div class="todo__inner">
            <div class="todo__task task">
                <input type="text" class="task__input" />
                <button class="task__add button"></button>
                <button class="task__delete button"></button>
            </div>
            <ul class="todo__list">
                <li class="todo__item">
                    <div class="todo__container">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            class="todo__checkbox"
                        />
                        <p class="todo__content"></p>
                        <button
                            type="button"
                            class="todo__delete button"
                            id="todo__delete"
                        ></button>
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
    background-color: #dcefff6b;
    // .todo__inner

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 520px;
      padding: clamp(25px, 2.70vw, 52px);
      border-radius: 25px;
      background-color: #fff;
    }

    // .todo__task

    &__task {
    }

    // .todo__list

    &__list {
    }

    // .todo__item

    &__item {
    }

    // .todo__container

    &__container {
    }

    // .todo__checkbox

    &__checkbox {
    }

    // .todo__content

    &__content {
    }

    // .todo__delete

    &__delete {
    }
}
.task {
    // .task__input

    &__input {
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
