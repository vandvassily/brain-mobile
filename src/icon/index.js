import { createNamespace, addUnit } from '../utils';
import { createBEM } from '../utils/create/bem';

const [createComponent] = createNamespace('icon');

// 复制vant的图标
const VantIconPrefix = 'van-icon';
const bem = createBEM(VantIconPrefix);

function isImage(url) {
  return url ? url.indexOf('/') !== -1 : false;
}

const icon = {
  props: {
    iconName: String,
    tag: {
      type: String,
      default: 'i'
    },
    size: [Number, String],
    image: String
  },
  methods: {},
  render() {
    const { iconName, color, size, image } = this;
    const ImageUrl = isImage(image);

    const name = VantIconPrefix + '-' + iconName;

    return (
      <this.tag
        class={[bem(), name]}
        style={{ color, fontSize: addUnit(size) }}
      >
        {ImageUrl && <img class={bem('image')} src={image} />}
      </this.tag>
    );
  }
};

// 返回sfc组件，带有install方法
export default createComponent(icon);
