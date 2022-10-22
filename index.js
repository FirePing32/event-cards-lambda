exports.handler = async (event) => {

    var title = event["queryStringParameters"]['title'];
    var date = event["queryStringParameters"]['date'];
    var time = event["queryStringParameters"]['time'];
    var link = event["queryStringParameters"]['link'];
    var location = event["queryStringParameters"]['location'];
    var description = event["queryStringParameters"]['description'];
    var image = event["queryStringParameters"]['image'];
    var tickets = event["queryStringParameters"]['tickets'];
    var progress = event["queryStringParameters"]['progress'];

    var response_body = ` <!-- 1st card design  -->
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></head>
    <style>
      @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css);
      @import url('https://fonts.googleapis.com/css?family=Playball');
      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        padding: 5%;
        font-family: 'Roboto', sans-serif;
        background-image: #fff;
      }
      ul {list-style: none;}
      a {text-decoration: none;}
      .h3, h3 {font-size: 24px;}
      main {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;width: 80%; }
      main:after {
        content: 'Salman Raza';
        font-family: 'Playball', cursive;
        position: absolute;
        bottom: -90px;
        left: 50%;
        color: rgba(0, 0, 0, 0.017);
        font-size: 150px;
        line-height: 140px;
        white-space: nowrap;
        text-transform: lowercase;
        transform: translateX(-50%);
        pointer-events: none;
        z-index: -1;
      }

      .evnt-edt-rmv-cont,
      .edt-rmv-tooltip,
      .upgrade-nw-btn,
      .upgrade-nw-icon,
      .listed-evnt-cont,
      .article-thumb-img,
      .article-thumb-img img,
      .aply-nw,
      .event-views,
      .event-img,
      .view-icon-OnHover,
      .view-icon-OnHover:before,
      .shorlist-btn:hover,
      .article-thumb-details li,
      .article-thumb-details li a
      {
        -webkit-transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        -ms-transition: all 0.3s ease-in-out 0s;
        -o-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }



      .listed-evnt-cont {
        width: 100%;
        min-width: 555px;
        max-width: 555px;
        height: 280px;
        position: relative;
        /*border: 1px solid #e6e6e6;*/
        background-color: #fff;
        padding: 20px;
        overflow: hidden;
        border-radius: 4px;
        margin: 0 auto 30px;
        /*float: left;*/
      }
      .listed-evnt-cont .article-thumb-img {
        width: 180px;
        height: 200px;
        float: left;
        margin-right: 20px;
        overflow: hidden;
      }
      .listed-evnt-cont .article-thumb-text-container {
        width: 61%;
        float: left;
        position: relative;
        height: 200px;
      }
      .evnt-edt-rmv-cont {
        position: absolute;
        top: 2px;
        left: -34px;
        width: 32px;
        height: auto;
        background-color: #fff;
        text-align: left;
        border: 1px solid #e73022;
      }
      .evnt-edt-rmv-cont ul {width: 100%;}
      .evnt-edt-rmv-cont ul li {position: relative;}
      .evnt-edt-rmv-cont ul li a {
        display: block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-bottom: 1px solid #e73022;
        color: #6b6b6b;
      }
      .evnt-edt-rmv-cont ul li:last-child a { border-bottom: 0; }
      .edt-rmv-tooltip {
        visibility: hidden;
        position: absolute;
        left: 60px;
        top: 50%;
        transform: translateY(-50%);
        background-color: red;
        padding: 2px 6px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 11px;
        font-weight: 500;
        color: #fff;
        z-index: -1;
      }
      .edt-rmv-tooltip:before {
        position: absolute;
        content: '';
        left: -4px;
        top: 50%;
        transform: translateY(-50%);
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 4px solid #e73022;
      }
      .listing-icon {
        vertical-align: top;
        background-color: #fff;
        display: inline-block;
        margin-right: 8px;
        float: left;
        margin-bottom: 2px;
        background-image: url(https://demosoft.indicsoft.com/SalmanDemo/onspon-html/other-pages/image/listing-icons.png);
        background-repeat: no-repeat;
      }
      .listing-icon.link, .listing-icon.info {background-image: url(https://demosoft.indicsoft.com/SalmanDemo/onspon-html/other-pages/image/lstd-evnt-icons.png);}
      .listing-icon.calender {width: 21px; height: 25px; background-position: -2px -2.5px; }
      .listing-icon.link {background-position: -25px -2px; width: 17px; height: 16px;}
      .listing-icon.like {width: 18px; height: 25px; background-position: -51px -2.5px; }
      .listing-icon.placeholder {width: 18px; height: 22px; background-position: -28px -2.5px; }
      .listing-icon.info {background-position: -8px -2px; width: 9px; height: 16px;}
      .listed-evnt-cont .article-thumb-heading {
        font-size: 20px;
        line-height: 22px;
        width: 100%;
        height: 55px;
        float: left;
        max-height: 26px;
        overflow: hidden;
        margin-bottom: 15px;
        font-weight: 400;
      }
      .article-thumb-info {width: 100%; float: left; list-style: none; }
      .article-thumb-info li {display: inline-block; float: left; width: auto; margin-bottom: 12px; font-size: 15px; line-height: 20px; color: #6b6b6b; }
      .listed-evnt-cont .article-thumb-info li a {display: block; color: #6b6b6b;text-decoration: none;}
      .listed-evnt-cont .article-thumb-info li:nth-child(1) {width: 50%; }
      .listed-evnt-cont .article-thumb-info li:nth-child(3) {margin-right: 0; }
      .listed-evnt-cont .article-thumb-info li:nth-child(2),
      .listed-evnt-cont .article-thumb-info li:nth-child(3)
      {
          width: 20%;
      }
      .listed-evnt-cont .article-thumb-info li {width: auto; font-size: 13px; color: #6b6b6b; margin-right: 15px; }
      .lstd-evnt-spnsr-updt {float: left; width: 100%; list-style: none; margin-top: 20px; }
      .lstd-evnt-spnsr-updt li {
        display: inline-block;
        width: 100%;
        float: left;
        text-align: center;
        font-size: 13px;
        line-height: 13px;
        color: #6b6b6b;
        border-right: 1px solid #b6b6b6;
        position: relative;
        cursor: pointer;
      }
      .lstd-evnt-spnsr-updt li:last-child {border-right: 0;}
      .rqr-evnt-views-cont, .spnsr-updt {
        display: block;
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translate(-50%);
        padding: 2px 8px;
        background-color: #e73022;
        color: #fff;
        letter-spacing: 1px;
      }
      .rqr-evnt-views-cont:before, .spnsr-updt:before {
        position: absolute;
        content: '';
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-top: 6px solid #e73022;
        left: 50%;
        transform: translateX(-50%);
        bottom: -6px;
      }
      .lstd-evnt-btns {width: 100%; height: 35px; position: absolute; bottom: 0; left: 0; line-height: 35px; }
      .evnt-type-cont {float: left; padding: 0 5px 0 10px; color: #000; }
      .evnt-type-cont, .upgrade-nw-btn {display: inline-block; width: 100%; height: 100%; border: 1px solid #b6b6b6; }
      .evnt-type-value {position: relative; display: inline-block; padding-left: 7px; margin-left: 3px; color: #e73022; }
      .evnt-type-value:before {
        position: absolute;
        content: '';
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        height: 15px;
        width: 1px;
        background-color: #b6b6b6;
      }
      .upgrade-nw-btn {text-align: center; color: #e73022; }
      .upgrade-nw-icon {
        width: 22px;
        height: 20px;
        vertical-align: sub;
        display: inline-block;
        background-image: url(https://demosoft.indicsoft.com/SalmanDemo/onspon-html/other-pages/image/lstd-evnt-icons.png);
        background-position: -57px -1px;
        margin-right: 4px;
      }
      .lstd-evnt-complition {float: left; width: 100%; margin-top: 15px; position: relative; }
      .evnt-cmlsn-heading {
        float: left;
        font-size: 12px;
        line-height: 16px;
        color: #6b6b6b;
        letter-spacing: 0.25px;
        transition: all 1s ease-in-out 0s;
      }
      .percentage-text {float: right; font-size: 16px; line-height: 16px; color: #e73022; letter-spacing: 0.25px; }
      .percentage-cont {
        width: 100%;
        float: left;
        margin-top: 5px;
        height: 5px;
        background-color: #dddddd;
        overflow: hidden;
        border-radius: 30px;
      }
      .percentage-bg {height: 10px; display: block; float: left; background-color: #e73022; transition: all 1s ease-in-out 0s;}

      /* [ ::hovers ] */
      .evnt-edt-rmv-cont ul li:hover a {color: #e73022;}
      .listed-evnt-cont:hover .evnt-edt-rmv-cont {left: 2px;}
      .evnt-edt-rmv-cont ul li:hover .edt-rmv-tooltip {left: 30px; z-index: 1; visibility: visible;}
      .upgrade-nw-btn:hover {background-color: #e73022; border-color: #e73022; color: #fff;}
      .upgrade-nw-btn:hover .upgrade-nw-icon {background-position: -84px -1px;}
      .listed-evnt-cont, .evnt-dsbrd-card {box-shadow: 0 0 15px rgba(0,0,0,0.2);}
      /* [ // ::hovers ] */
    </style>
    <div class="listed-evnt-cont">
      <div class="article-thumb-img focuspoint" data-focus-x="0" data-focus-y="0">
        <img src="${image}" style="width:180px;">
      </div>
      <div class="article-thumb-text-container">
        <h3 class="article-thumb-heading">${title}</h3>
        <ul class="article-thumb-info">
          <li><i class="fa fa-calendar"></i> ${date}</li>
          <li><a href="${link}"><i class="fa fa-external-link-square" aria-hidden="true"></i> Link</a></li>
          <li><i class="fa fa-clock-o" aria-hidden="true"></i> ${time}</li>
          <li><i class="fa fa-location-arrow" aria-hidden="true"></i> ${location}</li>
        </ul>
        <ul class="lstd-evnt-spnsr-updt">
          <li style="font-size: 20px">${description}</li>
        </ul>
        <div class="lstd-evnt-btns">
          <a href="${tickets}" class="upgrade-nw-btn">
            Buy Tickets
          </a>
        </div>
      </div>
      <div class="lstd-evnt-complition">
        <span class="evnt-cmlsn-heading">Event Complition</span>
        <h3 class="percentage-text">${progress}%</h3>
        <div class="percentage-cont">
          <span class="percentage-bg" style="width: ${progress}%;"></span>
        </div>
      </div>

    </div>
    <!-- // 1st card design  -->
    `;

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: response_body,
    };
    return response;
};
