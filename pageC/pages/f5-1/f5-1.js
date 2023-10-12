var app =getApp();

Page(
{
  data:{

  },
  goto1:function()
  {
    wx.navigateTo({
      url: '../f5/f5',
    })
  },
  bindInput1:function(e){
    app.globalData.AIi=e.detail.value
  },
  bindInput2:function(e){
    app.globalData.AIj=e.detail.value
  },

}

)