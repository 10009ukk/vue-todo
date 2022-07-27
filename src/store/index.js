import { createStore } from 'vuex'

export default createStore({
  state: {
    // 2개 저장, today, inbox
    // ex) type: 'today'
    todos: [
      {
        title: 'youbin list',
        isComplete: false,
        key: 1
      },
      {
        title: 'list youbin',
        isComplete: false,
        key: 2
      }
    ]
  },
  getters: {
    todosGet(state) {
      return state.todos
    }
  },
  mutations: {
    todosPush: function (state, payload) {
      state.todos.push(payload)
    },
    todosPop: function (state, payload) {
      state.todos = state.toDos.filter(todo => {
        return todo.key !== payload
      })
    },
    todosChange: function (state, payload) {
      state.todos = state.todos.map(todo => {
        if (todo.key === payload.key) {
          todo = {
            title: payload.title ? payload.title : todo.title,
            isChecked: payload.isChecked ? payload.isChecked : todo.isChecked,
            key: todo.key,
          }
        }
        return todo
      })
      console.log(state.todos)
    }

    //set localstroge('type' ...)
  },
  actions: {
  },
  modules: {
  }
})
