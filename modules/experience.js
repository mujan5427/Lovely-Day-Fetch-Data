const request    = require('request');
const cheerio    = require('cheerio');
const fs         = require('fs');
const htmlDncode = require('js-htmlencode').htmlDecode;
const db         = require('../helpers/database.js');


exports.get = function (id, type) {
  const uri_path = `https://play.niceday.tw/product/${ id }`;
  var $, $1, source_id, title, price, content, cancelMethod, brief, image, image_path;


  request(uri_path, (error, response, body) => {
    $ = cheerio.load(response.body);

    // price
    price = $('.unstyled, .price > li > div').eq(2).text();
    price = price.replace(/\$/g, '');
    price = price.replace(/\,/g, '');

    // source id
    source_id = id;

    // title
    title = $('legend').text();

    // contetn
    content = $('.product-item, .product-frame, .intro').html();
    $1      = cheerio.load(content);
    $1('.row, .fb-panel').remove();
    content = htmlDncode($1.html());

    // brief
    brief = $('.panel-body > div:nth-of-type(4) ul:only-child').html();
    brief = htmlDncode(brief);

    // cancel method
    cancelMethod = $('.cancellation-rule > ol').html();
    cancelMethod = htmlDncode(cancelMethod);

    // images
    image = $('.carousel-inner img').eq(0).attr('src');
    request(image).pipe(fs.createWriteStream(`assets/${ source_id }_1.jpg`));

    image = $('.carousel-inner img').eq(1).attr('src');
    request(image).pipe(fs.createWriteStream(`assets/${ source_id }_2.jpg`));

    image = $('.carousel-inner img').eq(2).attr('src');
    request(image).pipe(fs.createWriteStream(`assets/${ source_id }_3.jpg`));

    image = $('.carousel-inner img').eq(3).attr('src');
    request(image).pipe(fs.createWriteStream(`assets/${ source_id }_4.jpg`));

    image_path = `${ source_id }_1,${ source_id }_2,${ source_id }_3,${ source_id }_4`;


    const sqlStatement = `
      INSERT INTO \`experience\` (source_id, title, price, content, brief, cancel_method, images, type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const sqlPlaceholder = [source_id, title, price, content, brief, cancelMethod, image_path, type];

    db.singleQuery.query(sqlStatement, sqlPlaceholder, (error, rows) => {
      if (error) {
        console.log(`error is happen : ${ error }`);
      }

      if (rows) {
          console.log('done');
      }
    });
  });
};
