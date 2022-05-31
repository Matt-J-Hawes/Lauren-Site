// Unordered Lists
const animalListOne = document.getElementById('animal-description-one');
const animalListTwo = document.getElementById('animal-description-two');
const animalListThree = document.getElementById('animal-description-three');

// Titles (h4's)
const animalOne = document.getElementById('animal-name-one');
const animalTwo = document.getElementById('animal-name-two');
const animalThree = document.getElementById('animal-name-three');

// Empty array to push list tags into
let list = [];

// Create appropriate number of lists needed
function createList() {
    for(let x = 0; x <= 16; x++){
        list.push(document.createElement('li'));
    }

    return list;
};

// Call functions
createList()

// Array of animal information
const information = [
    {
        animal: 'Brown Bear',
        pointOne: 'The brown bear is typically larger than the black bear and has a large muscle mass above its shoulders; a concave, rather than straight or convex, facial profile; and much more aggressive behaviour',
        pointTwo: 'The grizzly bear is a subspecies of brown bear that once roamed large swaths of the mountains and prairies of the American West.',
        pointThree: 'They are adapted to life in forest and meadows.'
    },
    {
        animal: 'Canadian Lynx',
        pointOne: 'The Lynx have gray brown fur with white, buff, brown on throat and ruff; tufted ears; short tail; hind legs longer than front.',
        pointTwo: 'They are very rarely seen and can be found in their typical habitat of cold conifer forests.',
        pointThree: 'These Lynx are solitary, diurnal and nocturnal.'
    },
    {
        animal: 'Moose',
        pointOne: 'Moose are the largest members of the deer family in Yellowstone. They have long legs that enable them to wade into rivers and through deep snow, to swim, and to run fast. Moose, especially cows with calves, are unpredictable.',
        pointTwo: 'The principle staples of the moose diet are the leaves and twigs of the willow, followed by other woody browse species such as gooseberry and buffaloberry.',
        pointThree: 'They are usually found alone or in small family groups.'
    },
    {
        animal: 'Elk',
        pointOne: 'Elk are the most abundant large mammal found in Yellowstone and are an important species within the Greater Yellowstone Ecosystem.',
        pointTwo: 'These herds provide visitor enjoyment as well as revenue to local economies through hunting outside the park.',
        pointThree: 'They feed on grasses, sedges, other herbs and shrubs, bark of aspen trees, conifer needles, burned bark, aquatic plants.'
    },
    {
        animal: 'Wolves',
        pointOne: 'They inhabit most of the park, peak activity is at dawn and dusk. The northern range of Yellowstone is one of the best places in the world to watch wolves.',
        pointTwo: 'Two main colour variations exist in Yellowstone in approximately equal proportions: black and grey.',
        pointThree: 'Wolves are highly social animals and live in packs. In Yellowstone, average pack size is 11.8 individuals. January 12, 2020, marked the 25th Anniversary since wolves returned to Yellowstone.'

    },
    {
        animal: 'Bighorn Sheep (ram)',
        pointOne: 'These sheep provide visitor enjoyment as well as revenue to local economies through tourism, guiding, and sport hunting. ',
        pointTwo: 'They feed primarily on grasses, forage on shrubby plants in fall and winter.',
        pointThree: 'They can be found on the slopes of Mount Washburn, along Dunraven Pass.'
    }
];

// Append information to DOM 
// Callback function for each list
function appendInfo(animal, info){
    animal.innerHTML += info
};

appendInfo(animalOne, information[0].animal);
appendInfo(animalTwo, information[1].animal);
appendInfo(animalThree, information[2].animal);

// Append li tags to the unordered list
function appendListInfo(unorderedListOne, unorderedListTwo, unorderedListThree){
    for(let x = 0; x <= 8; x++){
        if(x < 3){
            unorderedListOne.appendChild(list[x])
        } else if(x >= 3 && x < 6){
            unorderedListTwo.appendChild(list[x])
        } else {
            unorderedListThree.appendChild(list[x])
        };
    };
};

// Call the function with appropriate parameters
appendListInfo(animalListOne, animalListTwo, animalListThree);

// First list info
function listInformation(list, info){
    return list.firstElementChild.innerHTML += info
}

// Second list info
function listInformationTwo(list, info){
    return list.children[1].innerHTML += info
}

// Third list info
function listInformationThree(list, info){
    return list.children[2].innerHTML += info
}

listInformation(animalListOne, information[0].pointOne);
listInformation(animalListTwo, information[1].pointOne);
listInformation(animalListThree, information[2].pointOne);

listInformationTwo(animalListOne, information[0].pointTwo);
listInformationTwo(animalListTwo, information[1].pointTwo);
listInformationTwo(animalListThree, information[2].pointTwo);

listInformationThree(animalListOne, information[0].pointThree);
listInformationThree(animalListTwo, information[1].pointThree);
listInformationThree(animalListThree, information[2].pointThree);

list.secondElementChild;