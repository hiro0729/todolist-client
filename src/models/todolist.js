import todolistService from '../services/todolist'

const loadData = () => new Promise(resolve => {
  todolistService.all().then(res=>{
    resolve(res.data);
  })
});

const addData = (content) => new Promise(resolve => {
  todolistService.add(content).then(res=>{
    resolve(res.data);
  })
});

const delData = (id) => new Promise(resolve => {
  todolistService.del(id).then(res => {
    resolve(res.data);
  })
})


export default {
  namespace: 'todolist',
  state: {
    input: '',
    list: []
  },
  reducers: {
    'inputChange'(state, { value }) {
      return {input: value, list: state.list};
    },
    'clearInput'(state) {
      return {input: '', list: state.list};
    },
    'refresh'(state, { list }) {
      return {input: state.input, list };
    },
  },
  effects:{
    *load ({ payload }, { call, put}) {
      const list = yield call(loadData);
      yield put({ type: 'refresh', list});
    },
    *add({ content }, {call, put}) {
      yield call(addData, content);
      yield put({ type: 'load' });
    },
    *del({ id }, {call, put}) {
      yield call(delData, id);
      yield put({ type: 'load' });
    },
  },
  subscriptions: {
    setup({ history, dispatch}) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          console.log('load');
          dispatch({ type: 'load'});
        }
      })
    }
  }
};
