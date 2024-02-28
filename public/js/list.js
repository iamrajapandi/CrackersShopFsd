const price = document.getElementsByClassName("row-price");
const itemCount = document.getElementsByClassName("calc");
const total = document.getElementsByClassName("amount");

let totItemElement  = document.getElementsByClassName("totItem");
let totAmountElement  = document.getElementsByClassName("totAmount");
let itemCountList = [];
let priceList = [];

for(let i=0;i<itemCount.length;i++)
{

    itemCount[i].addEventListener("change", function(){
         // console.log(price.textContent.slice(2));
        itemCountList[i] = Number(itemCount[i].value);
        total[i].value = itemCount[i].value * Number.parseInt(price[i].textContent.slice(3));
        priceList[i] = parseInt(total[i].value);

        let tprice = 0;
        let titems = 0;

        itemCountList.forEach(item => {
            titems += item;
        });

        priceList.forEach(price => {
            tprice += price;
        });

        totItemElement[0].value = titems;
        totAmountElement[0].value = tprice;
    }
    );
   
}

