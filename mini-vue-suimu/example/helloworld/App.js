import {h} from '../../lib/guide-mini-vue.esm.js'

window.self = null;

export const App = {
    render(){
        window.self = this;
        // ui
        return h(
            'div', 
            {
                id: "root",
                class: ["red", "hard"]
            }, 
            // string
            // setupState
            // this.$el -> get 当前组件的 root  element
            'hi, ' + this.msg
            // 'hi, mini-vue'
            // array
            // [h('p',{ class:"red" }, 'hi'), h('p', {class:'blue'}, 'mini-vue')]
        );
    },
    setup() {
        // composition api
        return {
            msg: "mini-vue"
        }
    }
}