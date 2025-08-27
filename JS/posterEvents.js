
let firstItemList = 0;
let lastItemList = 4;

async function loadMetaData(firstItem, lastItem) {
    try {
        const response = await fetch('./poster.json');
        if (!response.ok) {
            throw new Error(`HTTP error! : ${response.status}`);
        }

        data = await response.json();

        const menu = document.querySelector('.main-poster-list')

        function getListContent(el) {
            menu.innerHTML = '';

            data.slice(firstItem, lastItem).forEach(item => {
                let divElement = document.createElement('div');
                divElement.className = 'poster-list-item';

                let imgElement = document.createElement('img');
                imgElement.className = 'poster-list-item-img';
                // imgElement.width = 150;
                // imgElement.height = 200;
                imgElement.alt = `${item.title}`;
                imgElement.src = `${item.photo}`;

                let divInfo = document.createElement('div');
                divInfo.className = 'poster-list-item-info';
                let nameElement = document.createElement('h3');
                nameElement.className = 'info-name';
                nameElement.innerHTML = `${item.title}`
                let infoElement = document.createElement('p');
                infoElement.className = 'info-p';
                infoElement.innerHTML = `${item.description}`
                divInfo.append(nameElement);
                divInfo.append(infoElement);

                let divPrice = document.createElement('div');
                divPrice.className = 'poster-list-item-price';
                let priceElement = document.createElement('p');
                priceElement.className = 'price-price';
                priceElement.innerHTML = `price: ${item.ticket_price}`
                let quanElement = document.createElement('p');
                quanElement.className = 'price-quan';
                quanElement.innerHTML = `quantity: ${item.ticket_quantity}`
                divPrice.append(priceElement);
                divPrice.append(quanElement);

                divElement.append(imgElement);
                divElement.append(divInfo);
                divElement.append(divPrice);

                menu.append(divElement);
            });
        }

        getListContent(data)
    } catch (error) {
        console.error(error);
    }
}

loadMetaData(firstItemList, lastItemList);

function nextItomList() {

    if (lastItemList === 24) {
        return
    }

    firstItemList += 4;
    lastItemList += 4;

    loadMetaData(firstItemList, lastItemList);
}

function beforeItomList() {

    if (firstItemList === 0) {
        return
    }

    firstItemList -= 4;
    lastItemList -= 4;

    loadMetaData(firstItemList, lastItemList);
}