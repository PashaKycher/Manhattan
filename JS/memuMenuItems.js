
let firstItemList = 0;
let lastItemList = 12;

async function loadMetaData(firstItem, lastItem) {
    const url = 'https://chinese-food-db.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '590a838874msh94d5fde99e94ce4p18ad44jsnd61525a9b49a',
            'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const menu = document.querySelector('.main-menu-list')

        function getListContent(el) {
            el.innerHTML = '';

            data.slice(firstItem, lastItem).forEach(item => {
                let divElement = document.createElement('div');
                divElement.className = 'menu-list-item';

                let imgElement = document.createElement('img');
                imgElement.className = 'menu-list-item-img';
                imgElement.width = 110;
                imgElement.height = 110;
                imgElement.alt = `${item.title}`;
                imgElement.src = `${item.image}`;

                let nameElement = document.createElement('h3');
                nameElement.className = 'menu-list-item-name';
                nameElement.innerHTML = `${item.title}`

                divElement.append(imgElement);
                divElement.append(nameElement);

                el.append(divElement);
            });
        }

        getListContent(menu)
    } catch (error) {
        console.error(error);

    }
}

loadMetaData(firstItemList, lastItemList);

function nextItomList() {

    if (lastItemList === 168) {
        return
    }

    firstItemList += 12;
    lastItemList += 12;

    loadMetaData(firstItemList, lastItemList);
}

function beforeItomList() {

    if (firstItemList === 0) {
        return
    }

    firstItemList -= 12;
    lastItemList -= 12;

    loadMetaData(firstItemList, lastItemList);
}