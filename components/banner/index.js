// components/banner/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indicatorDots: {
      type: Boolean,
      value: true,
    },
    autoplay: {
      type: Boolean,
      value: true,
    },
    interval: {
      type: Number,
      value: 2000,
    },
    duration: {
      type: Number,
      value: 1000,
    },
    circular: {
      type: Boolean,
      value: true,
    },
    bannerData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
