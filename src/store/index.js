import { createStore } from 'vuex'

export default createStore({
  state: {
    // 2개 저장, today, inbox
    // ex) type: 'today'
    type: 'today',
    focus: {},
    todos: []
  },
  getters: {
    todosGet(state) {
      const items = JSON.parse(localStorage.getItem(state.type))
      if (items != null) {
        state.todos = items[0]
      }
      return state.todos
    },
    
    focusGet(state) {
      const items = JSON.parse(localStorage.getItem('focus'))
      if (items != null) {
        state.focus = items[0]
      }      
      return state.focus
    },
  },
  mutations: {
    todosPush: function (state, payload) {
      state.todos.push(payload)
      localStorage.setItem(state.type, JSON.stringify([state.todos]))
    },
    todosPop: function (state, payload) {
      state.todos = state.todos.filter(todo => {
        return todo.key !== payload.key
      })
      localStorage.setItem(state.type, JSON.stringify([state.todos]))
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
      localStorage.setItem(state.type, JSON.stringify([state.todos]))
    },

    focusAll: function (state, payload) {
      state.focus = {
        title: payload.title ? payload.title : state.focus.title,
        isChecked: payload.isChecked ? payload.isChecked : state.focus.isChecked,
        key: state.focus.key,
      }
      localStorage.setItem('focus', JSON.stringify([state.focus]))
    },
    focusPop: function (state) {
      state.focus = {}
      localStorage.setItem('focus', JSON.stringify([state.focus]))
    },
    
  },
  actions: {
  },
  modules: {
  }
})
