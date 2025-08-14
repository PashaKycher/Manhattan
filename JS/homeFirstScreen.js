
async function loadMetaData() {
    try {
        const response = await fetch('./firstScreen.json');
        if (!response.ok) {
            throw new Error(`HTTP error! : ${response.status}`);
        }

        data = await response.json();

        let elem1 = document.querySelector('.announcements-events1')
        let elem2 = document.querySelector('.announcements-events2')

        function getListContent1(elem) {
            data.slice(0, 4).forEach(item => {
                let imgElement = document.createElement('img');
                imgElement.className = 'announcements-events';
                imgElement.width = 160;
                imgElement.height = 200;
                imgElement.alt = `${item.name}`;
                imgElement.src = `${item.src}`;
                elem.append(imgElement);
            });
        }

        function getListContent2(elem) {
            data.slice(4, 9).forEach(item => {
                let imgElement = document.createElement('img');
                imgElement.className = 'announcements-events';
                imgElement.width = 160;
                imgElement.height = 200;
                imgElement.alt = `${item.name}`;
                imgElement.src = `${item.src}`;
                elem.append(imgElement);
            });
        }

        getListContent1(elem1)
        getListContent2(elem2)

    } catch (error) {
        console.error('Error loading meta.json:', error);
    }
}

loadMetaData();

function changeSryle1() {
    let announcementsBtn1 = document.querySelector('.btn-1')
    let announcementsBtn2 = document.querySelector('.btn-2')

    let elem1 = document.querySelector('.announcements-events1')
    let elem2 = document.querySelector('.announcements-events2')

    announcementsBtn1.style.backgroundColor = 'lab(55.24% 41.24 56.67 / 0.1)'
    elem1.style.display = 'grid'

    announcementsBtn2.style.backgroundColor = 'lab(55.24% 41.24 56.67 / 0)'
    elem2.style.display = 'none' 
}

function changeSryle2() {
    let announcementsBtn1 = document.querySelector('.btn-1')
    let announcementsBtn2 = document.querySelector('.btn-2')

    let elem1 = document.querySelector('.announcements-events1')
    let elem2 = document.querySelector('.announcements-events2')

    announcementsBtn2.style.backgroundColor = 'lab(55.24% 41.24 56.67 / 0.1)' 
    elem2.style.display = 'grid'

    announcementsBtn1.style.backgroundColor = 'lab(55.24% 41.24 56.67 / 0)' 
    elem1.style.display = 'none' 
}


