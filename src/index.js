import Card from '@/components/Card'
import Fuzzy from '@/components/Fuzzy'
import EditableFuzzy from '@/components/EditableFuzzy'
import EditableInput from '@/components/EditableInput'



let kzui = { Card,Fuzzy,EditableFuzzy,EditableInput }
const install = () => {
  for (let k in kzui) {
    window.Vue.component(kzui[k].name, kzui[k]);
  }
}
(typeof window !== 'undefined' && window.Vue && install()) || (kzui.install = install)
export default kzui;

