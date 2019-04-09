// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likes: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: './images/like.png',
    noSre: './images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      let likes = this.properties.likes
      let count = this.properties.count

      count = count ? count - 1 : count + 1

      this.setData({
        count,
        likes:!likes
      })
    }
  }
})
