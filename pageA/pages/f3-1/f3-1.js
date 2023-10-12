var app =getApp();

Page(
{
  
  data:{

  },
  goto1:function()
  {
    wx.navigateTo({
      url: '../f3/f3',
    })
  },
  bindInput1:function(e){
    app.globalData.locali=e.detail.value
  },
  bindInput2:function(e){
    app.globalData.localj=e.detail.value
  },

}

)
