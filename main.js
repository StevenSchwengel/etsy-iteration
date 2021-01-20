
//trial section...

for (x = 0; x < bob; x++ )
  {
    console.log(x);
     console.log(items[x]["price"]);
  }


//trial ends
//

  // 1. Show me how to calculate the average price of all items. Please `console.log` the average.
  // ```
  // The average price is $23.63
  //

  var bob = items.length;
  var rPrice;
  var numberOfItems = 0;
  var tPrices;
  var bob;
  var totalPrices = 0;
  var prevPrices;
  var avgPrice;

  for (x = 0; x < bob; x++ )
    {
  //   console.log(x);
  //   console.log(items[x]["price"]);
      rPrice = (items[x]["price"]);
//     console.log('parseInit Number');
     rPrices = parseInt(rPrice);
  //   console.log(rPrices);
  //   console.log(rPrices);

     totalPrices = totalPrices + rPrices;
//     console.log(totalPrices);
       numberOfItems = numberOfItems + 1;
    }
    console.log("average price of items (total price / number of items)");
    avgPrice = (totalPrices / numberOfItems);

    // should also have to convert integer to float when math is not clean e.g $ 3.3333333 as the avg price of something

    console.log(avgPrice);
    console.log(numberOfItems);



    //
    // 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please `console.log` the answer.
    // ```
    // "Items that cost between $14.00 USD and $18.00 USD:"

  var c;
  var loopa;
  var xa;


  var loopa = items.length;

     console.log("prices between 14 dollars and 18 dollars");

    for (xa = 0; xa < loopa; xa++ )
      {
//        console.log(x);
//         console.log(items[x]["price"]);
         cPrice = (items[xa]["price"]);
  //       console.log(cPrice);

        if (cPrice >= 14 && cPrice <= 18) {
             console.log(cPrice);
             console.log(items[xa]["title"]);
      }
    }

    //
    // 3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.
    // ```
    // 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


    var c;
    var gloopa;
    var ga;
    var lookforgp;
    var gp;

    var gloopa = items.length;

       console.log("item with a GBP currency code");

      for (ga = 0; ga < gloopa; ga++ )
        {

           gp = (items[ga]["currency_code"]);
           if (gp == "GBP" )
             {
              console.log(items[ga]["description"]);
              console.log(items[ga]["price"]);
             }

      //       console.log(gp);
        }

        //
        // 4. Show me how to find which items are made of wood. Please `console.log` the ones you find.
        // ```

        var c;
        var gloopa;
        var ga;
        var lookforgp;
        var gp;
        var str;


        for (ga = 0; ga < gloopa; ga++ )
          {
             str = (items[ga]["materials"]);
                 if (n == str.includes("wood"));{
                console.log(items[ga]["materials"]);
                // console.log(n);
             }
          }
