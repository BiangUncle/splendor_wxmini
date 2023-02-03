// pages/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      top: [
        {
          "idx": 1,
          "pretise": 3,
          "type": 0,
          "req": [0, 2, 1, 0, 0],
        },
        {
          "idx": 2,
          "pretise": 1,
          "type": 1,
          "req": [0, 2, 1, 1, 1],
        },
        {
          "idx": 3,
          "pretise": 2,
          "type": 2,
          "req": [0, 0, 0, 2, 2],
        },
        {
          "idx": 4,
          "pretise": 3,
          "type": 3,
          "req": [1, 1, 1, 0, 1],
        },
      ],
      middle: [
        {
          "idx": 1,
          "pretise": 3,
          "type": 0,
          "req": [0, 2, 1, 0, 0],
        },
        {
          "idx": 2,
          "pretise": 1,
          "type": 1,
          "req": [0, 2, 1, 1, 1],
        },
        {
          "idx": 3,
          "pretise": 2,
          "type": 2,
          "req": [0, 0, 0, 2, 2],
        },
        {
          "idx": 4,
          "pretise": 3,
          "type": 3,
          "req": [1, 1, 1, 0, 1],
        },
      ],
      bottom: [
        {
          "idx": 1,
          "pretise": 3,
          "type": 0,
          "req": [0, 2, 1, 0, 0],
        },
        {
          "idx": 2,
          "pretise": 1,
          "type": 1,
          "req": [0, 2, 1, 1, 1],
        },
        {
          "idx": 3,
          "pretise": 2,
          "type": 2,
          "req": [0, 0, 0, 2, 2],
        },
        {
          "idx": 4,
          "pretise": 3,
          "type": 3,
          "req": [1, 1, 1, 0, 1],
        },
      ],
      nobles: [
        {
          "idx": 1,
          "pretise": 3,
          "req": [0, 3, 3, 3, 0],
        },
        {
          "idx": 2,
          "pretise": 3,
          "req": [4, 0, 0, 0, 4],
        }
      ],
      bc: '112233',
      tokens: [7, 7, 7, 7, 7, 5],
      color_map: {
        0: '#efefef',
        1: '#0E78BE',
        2: '#22AA74',
        3: '#FF3333',
        4: '#AA5555',
        5: '#FFFF77',
      },
      idx: -1,
      session_id: '',
      selected_token: [0, 1, 1],
  },

  cardSelect: function(e) {
    console.log(e)
    console.log(e.currentTarget.dataset.idx)

    wx.request({
      url: 'https://www.baidu.com', //仅为示例，并非真实的接口地址
      method: 'GET',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
      ,
      fail (res) {
        console.log(res)
      },
      complete (res) {
        console.log(res)
      }
    })
  },

  tableInfo: function(data) {

    var session_id = data.session_id;

    if (session_id == "") {
      session_id = wx.getStorageSync('sid')
    }

    wx.request({
      url: 'http://192.168.2.102:8765/table_info', //仅为示例，并非真实的接口地址
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json', // 默认值
        'cookie': session_id,
      },
      
      success: function(res) {
        console.log(res.data.tableInfo)
      }
    })
  },

  jsonGame: function() {
    var that = this;
    console.log(wx.getStorageSync('sid'))

    wx.request({
      url: 'http://192.168.2.102:8765/join', //仅为示例，并非真实的接口地址
      method: 'GET',
      data: {
        username: 'biang'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      success: function(res) {
        that.setData({
          session_id: res.data.session_id,
        })
        // console.log(res)
        wx.setStorageSync('sid', res.data.session_id)
      }
    })
    
    
    that.tableInfo(that.data)
  },

  takeToken: function(e) {
    var dataset = e.currentTarget.dataset;
    console.log(e)
    this.data.tokens[dataset.idx]--;
    this.data.selected_token.push(dataset.idx)
    console.log(this.data)
  },

  dropToken: function(e) {
    var dataset = e.currentTarget.dataset;
    console.log(e)
    this.data.tokens[dataset.idx]++;
    this.data.selected_token.splice(dataset.idx)
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})