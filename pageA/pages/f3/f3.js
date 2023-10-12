// pages/f3/f3.js
var app =getApp();
Page({

  global : {
    timer : 0 ,
    isRand : false,
    total1: 0,
    total2 :0,
    count:0,

},
  /**
   * 页面的初始数据
   */
  data: {
  value1:'',
  value2:'',
    dice : ['first','second','third','fourth','fifth','sixth'],
    buttonType : 'primary',
    buttonValue : '开始',
    isShow:'hidden',
    num1 : 0,
    num2 : 0,
    num3 : 0,
    num4 : 0,
    num5 : 0,
    num6 : 0,
    num7 : 0,
    num8 : 0,
    num9 : 0,
    num10 : 0,
    total1: 0,
    score1:0,
    total2:0,
    score2:0,
    lunnum:0,
    dice1:0,
    dice2:0,
    dice3:0,
    dice4:0,
    dice5:0, 
dice6:0,
dice7:0,
dice8:0,
dice9:0,
dice10:0,
num1locked:1,
num2locked:1,
num3locked:1,
num4locked:1,
num5locked:1,
num6locked:1,
num7locked:1,
num8locked:1,
num9locked:1,
num10locked:1,
beilv:1,
  },
  shakeClick1 () { 
    var times=3;
    if(times<=3)
    {
        let me = this;
        var arr1=[1,2,3,4,5];
        var arr2=[0,0,0,0,0,0,0];
          var j = 0;
        this.global.isRand = !this.global.isRand;
        if ( this.global.isRand ) {
          this.global.timer = setInterval( ()=>{
  
            if(this.data.num1locked==1)
            {
                let num1 = Math.floor(Math.random()*6);
                arr1[0]=num1+1;
                me.setData({num1 : num1});
            }
            else{
                let num1=this.lockDice6();
                me.setData({num1 : num1});
            }
            if(this.data.num2locked==1)
            {
                let num2 = Math.floor(Math.random()*6);
                arr1[1]=num2+1;
                me.setData({num2 : num2});
            }
            else{
                let num2=this.lockDice7();
                me.setData({num2 : num2});
            }
            if(this.data.num3locked==1)
            {
                let num3 = Math.floor(Math.random()*6);
                arr1[2]=num3+1;
                me.setData({num3 : num3});
            }
            else{
                let num3=this.lockDice3();
                me.setData({num3 : num3});
            }
            if(this.data.num4locked==1)
            {
                let num4 = Math.floor(Math.random()*6);
                arr1[3]=num4+1;
                me.setData({num4 : num4});
              }
              else{
                  let num4=this.lockDice4();
                  me.setData({num4 : num4});
              }
              if(this.data.num5locked==1)
              {
                  let num5 = Math.floor(Math.random()*6);
                  arr1[4]=num5+1;
                  me.setData({num5 : num5});
              }
              else{
                  let num5=this.lockDice5();
                  me.setData({num5 : num5});
              }
              
              let score1=calculateScore(arr1,arr2);
              me.setData({score1:score1});
              me.setData({total1:score1+arr1[0]+arr1[1]+arr1[2]+arr1[3]+arr1[4]})
              
              
            },50);
            function calculateScore(arr1, arr2) {
              let dz = 0, sl = 0, sil = 0, wl = 0, ds = 0, xs = 0;
              let count = 0, sum = 0, score = 0;
              for(let i=0;i<7;i++)
              {
                  arr2[i]=0;
              }
            
              for (let i = 1; i < 7; i++) {
                for (let j = 0; j < 6; j++) {
                  if (arr1[j] == i) {
                    arr2[i]++;
                  }
                }
              }
            
              for (let i = 1; i < 7; i++) {
                if (arr2[i] == 2) {
                  dz++;
                }
                if (arr2[i] == 3) {
                  sl++;
                }
                if (arr2[i] == 4) {
                  sil++;
                }
                if (arr2[i] == 5) {
                  wl++;
                }
                if (arr2[i] == 1) {
                  count++;
                  sum += arr1[j];
                }
              }
            
              if (count == 5) 
              {
                if (sum == 15 || sum == 20) {
                  ds = 1;
                } else {
                  xs = 1;
                }
              }
            
              if (dz == 2) {
                score = 10;
              }
              if (sl == 1) {
                if (dz == 1) {
                  score = 20;
                } else {
                  score = 10;
                }
              }
              if (sil == 1) {
                score = 40;
              }
              if (wl == 1) {
                score = 100;
              }
              if (ds == 1) {
                score = 60;
              }
              if (xs == 1) {
                score = 30;
              }
            
              return score;
          }
  
        } else {
          clearInterval(this.global.timer);
        }
  
        this.setData({
          dice: this.data.dice, 
          buttonType: (this.global.isRand) ? 'default' : 'primary',
          buttonValue: (this.global.isRand) ? '停止' : '开始投掷',
          isShow: (this.global.isRand) ? 'hidden':'show',
        });
        times=times-1;
    }else if (times<=0)
    {
        this.setData({
            dice: this.data.dice, 
            buttonType: (this.global.isRand) ? 'default' : 'primary',
            buttonValue: (this.global.isRand) ? '结束' : '结束',
            isShow: (this.global.isRand) ? 'hidden':'show',
          });
    }
  
},
shakeClick2() { 
          let me = this;
          var arr3=[1,2,3,4,5];
          var arr4=[0,0,0,0,0,0,0];
  
         

            var j = 0;
          this.global.isRand = !this.global.isRand;
          if ( this.global.isRand ) {
            this.global.timer = setInterval( ()=>{
      
      if(this.data.num6locked==1)
      {
          let num6 = Math.floor(Math.random()*6);
          arr3[0]=num6+1;
          me.setData({num6 : num6});
      }
      else{
          let num6=this.lockDice6();
          me.setData({num6 : num6});
      }
      if(this.data.num7locked==1)
      {
          let num7 = Math.floor(Math.random()*6);
          arr3[1]=num7+1;
          me.setData({num7 : num7});
      }
      else{
          let num7=this.lockDice7();
          me.setData({num7 : num7});
      }
      if(this.data.num8locked==1)
      {
          let num8 = Math.floor(Math.random()*6);
          arr3[2]=num8+1;
          me.setData({num8 : num8});
      }
      else{
          let num8=this.lockDice8();
          me.setData({num8 : num8});
      }
      if(this.data.num9locked==1)
      {
          let num9 = Math.floor(Math.random()*6);
          arr3[3]=num9+1;
          me.setData({num9 : num9});
      }
      else{
          let num9=this.lockDice9();
          me.setData({num9 : num9});
      }
      if(this.data.num10locked==1)
      {
          let num10 = Math.floor(Math.random()*6);
          arr3[4]=num10+1;
          me.setData({num10 : num10});
        }
        else{
            let num10=this.lockDice10();
            me.setData({num10 : num10});
        }
      
                let score2=calculateScore(arr3,arr4);
                me.setData({score2:score2});
                me.setData({total2:score2+arr3[0]+arr3[1]+arr3[2]+arr3[3]+arr3[4]});
                
                
              },50);
    /* function lockednum6()
     {

         num6locked=true;
         return ;
     }*/
              function calculateScore(arr1, arr2){
                  let dz = 0, sl = 0, sil = 0, wl = 0, ds = 0, xs = 0;
                  let count = 0, sum = 0, score = 0;
                  for(let i=0;i<7;i++)
                  {
                      arr2[i]=0;
                  }
                
                  for (let i = 1; i < 7; i++) {
                    for (let j = 0; j < 6; j++) {
                      if (arr1[j] == i) {
                        arr2[i]++;
                      }
                    }
                  }
                
                  for (let i = 1; i < 7; i++) {
                    if (arr2[i] == 2) {
                      dz++;
                    }
                    if (arr2[i] == 3) {
                      sl++;
                    }
                    if (arr2[i] == 4) {
                      sil++;
                    }
                    if (arr2[i] == 5) {
                      wl++;
                    }
                    if (arr2[i] == 1) {
                      count++;
                      sum += arr1[j];
                    }
                  }
                
                  if (count == 5) 
                  {
                    if (sum == 15 || sum == 20) {
                      ds = 1;
                    } else {
                      xs = 1;
                    }
                  }
                  if (dz == 2) {
                    score = 10;
                  }
                  if (sl == 1) {
                    if (dz == 1) {
                      score = 20;
                    } else {
                      score = 10;
                    }
                  }
                  if (sil == 1) {
                    score = 40;
                  }
                  if (wl == 1) {
                    score = 100;
                  }
                  if (ds == 1) {
                    score = 60;
                  }
                  if (xs == 1) {
                    score = 30;
                  }
                
                  return score;
              }
            } else {
              clearInterval(this.global.timer);
            }
            this.setData({
              dice: this.data.dice, 
              buttonType: (this.global.isRand) ? 'default' : 'primary',
              buttonValue : (this.global.isRand) ? '停止' : '投掷',
              isShow: (this.global.isRand) ? 'hidden':'show',
            });
   
},
lockDice1() {
    let dice1=this.data.num1; // 将骰子的值复制一份并赋值给 data 中的 dice
    this.setData({
        num1locked: 0 
      });
      return dice1;
  } ,    
   lockDice2() {
        let dice2=this.data.num2; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num2locked: 0 
          });
          return dice2;
      } ,   
      lockDice3() {
        let dice3=this.data.num3; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num3locked: 0 
          });
          return dice3;
      } ,  
      lockDice4() {
        let dice4=this.data.num4; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num4locked: 0 
          });
          return dice4;
      } ,  
      lockDice5() {
        let dice5=this.data.num5; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num5locked: 0 
          });
          return dice5;
      } ,  
    lockDice6() {
        let dice6=this.data.num6; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num6locked: 0 
          });
          return dice6;
      } ,      
      lockDice7() {
        let dice7=this.data.num7; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num7locked: 0 
          });
          return dice7;
      } ,   
      lockDice8() {
        let dice8=this.data.num8; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num8locked: 0 
          });
          return dice8;
      } ,  
      lockDice9() {
        let dice9=this.data.num9; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num9locked: 0 
          });
          return dice9;
      } ,  
      lockDice10() {
        let dice10=this.data.num10; // 将骰子的值复制一份并赋值给 data 中的 dice
        this.setData({
            num10locked: 0 
          });
          return dice10;
      } ,  
      
      

      jumpToPage() {
        wx.navigateTo({
          url: '/pages/dice/dice' // 跳转到目标页面的路径
        });
      },
         
    goToDice() {
        wx.navigateTo({
       url: '/pages/dice/dice?key1=&id2=total2&id3=beilv' ,// 跳转到dice页面，并将data参数拼接到url中
      })
       },
    // 在需要弹出提示框的页面中，调用 showToast 方法

  
    

    addbeilv()
    {
        let me=this;
        var beilv;
        me.setData({beilv:this.data.beilv+1});
        return beilv;
    },
       
  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      value1:app.globalData.locali,
      value2:app.globalData.localj
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})