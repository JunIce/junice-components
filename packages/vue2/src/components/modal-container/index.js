import Vue from 'vue';

const observable = Vue.version.match(/^(\d)\./)[1] ? Vue.observable : Vue.reactive;

let id = '';

export function createContainer() {
  const context = {
    list: [],
    open: (name, props) => {
      const modal = context.findByName(name);
      return modal.instance.open(props);
    },
    close: (name) => {
      const modal = context.findByName(name);
      modal.instance.close();
    },
    registry: (name, comp) => {
      const modal = createModal(name, comp);

      context.list.push({
        id: modal.id,
        name: name,
        instance: modal,
      });
    },
    findByName(name) {
      return context.list.find((c) => c.name == name);
    },
  };

  return context;
}

function createModal(name = '', comp) {
  const Comp = Vue.extend(comp);

  let resolvefn, rejectfn;

  const context = {
    id: ++id,
    name,
    visible: false,
    instance: null,
    props: {},
    resolve: (data) => {
      context.close();
      resolvefn && resolvefn(data);
    },
    reject: (err) => {
      context.close();
      rejectfn && rejectfn(err);
    },
    open: (props) => {
      if (!context.instance) {
        const vm = new Comp({
          propsData: {
            context,
          },
        });
        vm.$mount(anchor);
        context.instance = vm;
      }

      context.props = observable(props);
      context.visible = true;

      return new Promise((resolve, reject) => {
        resolvefn = resolve;
        rejectfn = reject;
      });
    },
    close: () => {
      console.log(context.visible);
      context.visible = false;
    },
  };

  const anchor = document.createElement('div');
  anchor.id = `modal_${context.id}`;
  document.body.appendChild(anchor);

  return context;
}

if (Vue.prototype.$container) {
  Vue.prototype.$dialogContainer = createContainer();
}
