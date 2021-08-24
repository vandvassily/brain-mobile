<template>
  <div>
    <van-form
      @submit="onSubmit"
      @failed="onFailed"
      scroll-to-error
      ref="vanform"
    >
      <div class="edit-area">
        <van-field
          v-model="data.name"
          label="收件人："
          name="name"
          placeholder="请输入收件人姓名"
          maxlength="8"
          @input="onInput"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="data.phone"
          name="phone"
          type="tel"
          label="手机号码："
          placeholder="请输入收件人手机号码"
          :error="false"
          :rules="[{ validator, message: '请输入正确的手机号码' }]"
        />
        <van-field
          :value="areaText"
          name="region"
          label="所在地区："
          placeholder="请输入省/市/区"
          right-icon="arrow"
          @click="showArea"
          readonly
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="data.address"
          name="address"
          label="详细地址："
          placeholder="请输入详细地址"
          maxlength="80"
          @input="onAddressInput"
          :rules="[{ required: true }]"
        />
      </div>
    </van-form>
    <slot name="tip" />
    <slot />
    <div class="save">
      <van-button type="info" size="large" round @click="submit"
        >保存</van-button
      >
    </div>
    <van-popup v-model="showAreaPop" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirm" @cancel="onCancel" />
    </van-popup>
  </div>
</template>

<script>
import { areaList } from './area.js';
import { Form, Field, Popup, Button, Area } from 'vant';

const defaultAddressData = {
  name: '',
  province: '',
  city: '',
  district: '',
  phone: '',
  address: ''
};

export default {
  name: 'address-edit',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Area.name]: Area
  },
  props: {
    region: String,
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultAddressData })
    }
  },
  data() {
    return {
      data: {},
      areaList,
      showAreaPop: false
    };
  },
  computed: {
    areaText() {
      const { province, city, district } = this.data;
      return province + city + district;
    }
  },
  watch: {
    addressInfo: {
      handler(val) {
        this.data = {
          ...defaultAddressData,
          ...val
        };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onSubmit(values) {
      this.$emit('submit', values);
    },
    onFailed(event) {
      this.$emit('failed', event);
    },
    submit() {
      this.$refs.vanform.submit();
    },
    showArea() {
      this.showAreaPop = true;
    },
    onConfirm(values) {
      let region = '';
      values.forEach(item => {
        item && (region += item.name);
      });
      this.data.province = values[0].name;
      this.data.city = values[1].name;
      this.data.district = (values[2] && values[2].name) || '';
      this.showAreaPop = false;
      this.$emit('change-area', values);
    },
    onCancel() {
      this.showAreaPop = false;
    },
    isEmojiCharacter(substring) {
      for (let i = 0; i < substring.length; i++) {
        const hs = substring.charCodeAt(i);
        let ls = '';
        if (hs >= 0xd800 && hs <= 0xdbff) {
          if (substring.length > 1) {
            ls = substring.charCodeAt(i + 1);
            const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
            if (uc >= 0x1d000 && uc <= 0x1f77f) {
              return true;
            }
          }
        } else if (substring.length > 1) {
          ls = substring.charCodeAt(i + 1);
          if (ls === 0x20e3) {
            return true;
          }
        } else {
          if (hs >= 0x2100 && hs <= 0x27ff) {
            return true;
          }
          if (hs >= 0x2b05 && hs <= 0x2b07) {
            return true;
          }
          if (hs >= 0x2934 && hs <= 0x2935) {
            return true;
          }
          if (hs >= 0x3297 && hs <= 0x3299) {
            return true;
          }
          if (
            hs === 0xa9 ||
            hs === 0xae ||
            hs === 0x303d ||
            hs === 0x3030 ||
            hs === 0x2b55 ||
            hs === 0x2b1c ||
            hs === 0x2b1b ||
            hs === 0x2b50
          ) {
            return true;
          }
        }
      }
    },
    onInput(value) {
      value = value.replace(
        /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g,
        ''
      );
      this.name = value;
    },
    onAddressInput(value) {
      value = value.replace(
        /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g,
        ''
      );
      this.address = value;
    },
    validatorEmoji(val) {
      return !this.isEmojiCharacter(val);
    },
    validator(val) {
      return /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9]|14[0-9])[0-9]{8}$/.test(
        val
      );
    },
    formatter(val) {
      const regStr = /(\ud83c[\udc00-\udfff])|(\ud83d[\udc00-\udfff])|(\ud83e[\udc00-\udfff])|[\u2100-\u32ff]|[\u0030-\u007f][\u20d0-\u20ff]|[\u0080-\u00ff]/g;
      return val.replace(regStr, '');
    }
  }
};
</script>

<style lang="less">
.content,
.van-form {
  position: relative;
}

.tips {
  margin-top: 36px;
  text-align: center;
  font-size: 24px;
  color: #ff3e3e;
}

.save {
  position: relative;
  padding: 24px;
}

.edit-area {
  .van-field__label {
    max-width: 30%;
    flex: none;
  }
}
</style>
