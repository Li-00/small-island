//定义个函数组件
import { Menu } from 'ant-design-vue';
const SubMenu = {
    template:`
    <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
      
        <i :class="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
      
      <template v-for="item in menuInfo.children">
        <a-menu-item v-if="!item.children" :key="item.path">
          <i :class="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-sub-menu>
  `,
  name:'SubMenu',
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
        type: Object,
        default: () => ({}),
      },
  }
}

export default {
    props:{
        menu:{
            type:Array,
            default:[]
        }
    },
    components: {
        'sub-menu': SubMenu
    },
    computed:{
        menuLists(){
            return this.menu
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}