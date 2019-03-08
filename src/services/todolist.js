import request from '../utils/request';

// todolist nodejs server host
const host = 'http://localhost:7001';

function all() {
  return request(host+'/todolist');
}

function add(content) {
  return request(host+'/todolist',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({content})
  })
}

function del(id) {
  return request(host+'/todolist/'+id, {
    method: 'delete',
  });
}

export default {
  all,
  add,
  del
}
