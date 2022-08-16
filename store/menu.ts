import {Menu as MenuEnum} from '../constants/common/menu'
class MenuStore {
  active: MenuEnum = MenuEnum.INDEX
  updateActive(active: MenuEnum) {
    this.active = active
  }
}

export default new MenuStore()