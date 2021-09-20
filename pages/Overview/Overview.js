Page({
  data: {
    enter:'\n\n\n\n\n\n\n\n\n\n',

    wrongnum:3,
    runnum:7,
    overnum:4,

    wrong:[
      {"robotnumber":"0112345ABC","state":"故障"},
      {"robotnumber":"0212345ABC","state":"故障"},
      {"robotnumber":"0312345ABC","state":"故障"},
    ],
    run:[
      {"robotnumber":"0412345ABC","state":"运行"},
      {"robotnumber":"0512345ABC","state":"运行"},
      {"robotnumber":"0612345ABC","state":"运行"},
      {"robotnumber":"0712345ABC","state":"运行"},
      {"robotnumber":"0812345ABC","state":"运行"},
      {"robotnumber":"0912345ABC","state":"运行"},
      {"robotnumber":"1012345ABC","state":"运行"},
    ],
    over:[
      {"robotnumber":"1112345ABC","state":"完成"},
      {"robotnumber":"1212345ABC","state":"完成"},
      {"robotnumber":"1312345ABC","state":"完成"},
      {"robotnumber":"1412345ABC","state":"完成"},
    ],
  },

  onLoad: function () {
  console.log('onLoad')
  }
  
 })