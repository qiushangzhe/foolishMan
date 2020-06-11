import { Component, Vue } from 'vue-property-decorator'
@Component({ name: '{{name}}' })
export default class {{name}} extends Vue {
  created () {
    console.log('created')
  }
}
