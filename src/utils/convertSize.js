import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const UI_WIDTH = 750 / 2;
const scale = width / UI_WIDTH;
export const convertSize = size => {
  return Math.floor(size * scale);
};

const NEW_UI_WIDTH = 1148;
const newScale = width / NEW_UI_WIDTH;
export const newConvertSize = UIsize => {
  return Math.floor(UIsize * newScale);
};

/**
 * @author lxt
 * @date 2020/5/8
 * @param {Object} originStyles 需要进行转换尺寸的样式
 * @description 将页面所有的style进行遍历，将带有pt的样式属性转换为rn的标准单位
 */
export const convertStyles = originStyles => {
  const keys = Object.keys(originStyles);
  for (let key of keys) {
    if (typeof originStyles[key] === 'object') {
      originStyles[key] = convertStyles(originStyles[key]);
      continue;
    }
    if (typeof originStyles[key] === 'string') {
      let index = originStyles[key].indexOf('pt');
      if (index > -1) {
        let len = originStyles[key].length;
        let size = Number(originStyles[key].substring(0, len - 2));
        originStyles[key] = convertSize(size);
        continue;
      }
    }
  }
  return originStyles;
};

export const newUIConvertStyles = originStyles => {
  const keys = Object.keys(originStyles);
  for (let key of keys) {
    if (typeof originStyles[key] === 'object') {
      originStyles[key] = newUIConvertStyles(originStyles[key]);
      continue;
    }
    if (typeof originStyles[key] === 'string') {
      // 新UI设计稿单位为 px
      let index = originStyles[key].indexOf('px');
      if (index > -1) {
        let len = originStyles[key].length;
        let size = Number(originStyles[key].substring(0, len - 2));
        originStyles[key] = newConvertSize(size);
        continue;
      }
    }
  }
  return originStyles;

};
