import { h, ref, reactive } from 'vue'

export default {
  props: {
    name: String,
  },
  setup(props) {
    const count = ref('gg')
    const object = reactive({ foo: 'bar' })
    return () => h('div', [count.value, object.foo, props.name])
  },
}