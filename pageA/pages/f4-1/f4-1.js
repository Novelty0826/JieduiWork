var app =getApp();
Page(
{
  data:{

  },
  goto1:function()
  {
    wx.navigateTo({
      url: '../f4/f4',
    })
  },
  bindInput1:function(e){
    app.globalData.onlinei=e.detail.value
  },
  bindInput2:function(e){
    app.globalData.onlinej=e.detail.value
  },

}

)