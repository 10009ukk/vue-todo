import { createStore } from 'vuex'

export default createStore({
  state: {
    type: 'today',

    todos: [],
    focus: {},
  },
  getters: {
    getType(state) {
      return state.type
    },
    getTodos(state) {
      const items = JSON.parse(localStorage.getItem(state.type))
      if (items != null) {
        state.todos = items[0]
      }
      return state.todos
    },
    getFocus(state) {
      const items = JSON.parse(localStorage.getItem('focus'))
      if (items != null) {
        state.focus = items[0]
      }      
      return state.focus
    },
  },
  mutations: {
    updateType(state) {
      state.todos.splice(0)
      state.type = state.type === 'today' ? 'inbox' : 'today'
    },

    addTodos: function (state, payload) {
      state.todos.push(payload)
      localStorage.setItem(state.type, JSON.stringify([state.todos]))
    },
    removeTodos: function (state, payload) {
      state.todos = state.todos.filter(todo => {
        return todo.key !== payload.key
      })
      localStorage.setItem(state.type, JSON.stringify([state.todos]))
    },
    updateTodos: function (state, { title, isChecked, key}) {
      state.todos = state.todos.map(todo => {
        if (todo.key === key) {
          todo = {
            title: title || todo.title,
            isChecked: isChecked || todo.isChecked,
            key: key,
          }
        }
        return todo
      })
      localStorage.setItem(state.type, JSON.stringify([state.todos]))
    },

    updateFocus: function (state, { title, isChecked, key }) { 
      state.focus = {
        title: title || state.focus.title,
        isChecked: isChecked || state.focus.isChecked,
        key: key,
      }
      localStorage.setItem('focus', JSON.stringify([state.focus]))
    },
    removeFocus: function (state) {
      state.focus = new Object
      localStorage.removeItem('focus')
    },

    
  },
  actions: {

  },
  modules: {
  }
})
