
let firstItemList = 0;
let lastItemList = 10;

async function loadMetaData(firstItem, lastItem) {
    try {
        const response = await fetch('./homePageMenu.json');
        if (!response.ok) {
            throw new Error(`HTTP error! : ${response.status}`);
        }

        data = await response.json();

        let elem1 = document.querySelector('.kitchen-menu')

        function getListContent1(elem) {
            elem.innerHTML = '';

            data.slice(firstItem, lastItem).forEach(item => {
                let divElement = document.createElement('div');
                divElement.className = 'kitchen-item';

                let imgElement = document.createElement('img');
                imgElement.className = 'kitchen-item-img';
                imgElement.width = 110;
                imgElement.height = 110;
                imgElement.alt = `${item.img.name}`;
                imgElement.src = `${item.img.src}`;

                divElement.append(imgElement);

                let infoElement = document.createElement('div');
                infoElement.className = 'kitchen-item-info';

                let firstElement = document.createElement('div');
                firstElement.className = 'kitchen-info-first';

                let nameUnitElement = document.createElement('div');
                nameUnitElement.className = 'kitchen-item-nameUnit';

                let nameElement = document.createElement('h3');
                nameElement.className = 'kitchen-item-name';
                nameElement.innerHTML = `${item.name}`

                let unitElement = document.createElement('p');
                unitElement.className = 'kitchen-item-unit';
                unitElement.innerHTML = `${item.unit}`

                nameUnitElement.append(nameElement);
                nameUnitElement.append(unitElement);
                firstElement.append(nameUnitElement);

                let priseElement = document.createElement('p');
                priseElement.className = 'kitchen-item-prise';
                priseElement.innerHTML = `${item.prise}`
                firstElement.append(priseElement);
                infoElement.append(firstElement);

                let secondElement = document.createElement('div');
                secondElement.className = 'kitchen-info-second';
                secondElement.innerHTML = `${item.about}`
                infoElement.append(secondElement);

                divElement.append(infoElement);
                elem.append(divElement);
            });
        }

        getListContent1(elem1)

    } catch (error) {
        console.error('Error loading meta.json:', error);
    }
}

loadMetaData(firstItemList, lastItemList);

function nextItomList() {

    if (lastItemList === 40) {
        return
    }

    firstItemList += 10;
    lastItemList += 10;

    loadMetaData(firstItemList, lastItemList);
}

function beforeItomList() {

    if (firstItemList === 0) {
        return
    }

    firstItemList -= 10;
    lastItemList -= 10;

    loadMetaData(firstItemList, lastItemList);
}



