// wait for the html to load
document.addEventListener("DOMContentLoaded", function() {
    flowerAnimation();
    loadGradeResources();
    scrollToTop();
});

// Load resources for all units in grade 1
function loadGradeResources() {
    const unitsContainer = document.getElementById("units-container"); 
    const units = teachingData.grade1;

    unitsContainer.innerHTML = ""; 

    // Iterate through each unit and create its section
    for (const unitId in units) {
        const unitSection = createUnitSection(unitId);
        unitsContainer.appendChild(unitSection);
    }
}

// Load resources for a specific unit
function createUnitSection(unitId) {
    // Step 1: Get the unit data from teachingData using the unitId
    const unitData = teachingData.grade1[unitId];
    

    // Step 2: Extract the number from unitId
    const unitNum = parseInt(unitId.replace("unit", ""));
    

    // Step 3: Calculate the progress percentage
    const progressPercent = (unitNum / 6) * 100; 
    

    // Step 4: Create the section wrapper div element
    const section = document.createElement("div");

    // Step 5: Add the class name 'wiki-section' to the section
    section.className = "wiki-section";
    

    // Step 6: Add the id attribute (should be unitId like "unit1")
    section.id = unitId;

    // Step 7: Build the HTML content inside the section
    section.innerHTML = `
        <h2 class="wiki-section-title">
            <span class="unit-number">${unitNum}</span>
                ${unitData.name}
        </h2>
        <div class="unit-progress">
            <div class="unit-progress-fill" style="width: ${progressPercent}%;"></div>
            <h3><span class="unit-progress-text">${unitData.topic}</span></h3>
        </div>                     
        <table class="wiki-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Lesson Name</th>
                    <th>Week</th>
                    <th>Description</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody id="${unitId}-resources">
            </tbody>
        </table>
    `;
    

    // Step 8: Find the empty tbody we just created
    const tbody = section.querySelector(`#${unitId}-resources`);
    

    // Step 9: Loop through all resources in unitData.resources
    unitData.resources.forEach((resource) => {
        const row = createTableRow(resource);
        tbody.appendChild(row);
    })
    

    // Step 10: Return the complete section element
    return section;
}

// Create a table row for a resource
function createTableRow(resource) {
    const row = document.createElement("tr");

    // Set the inner HTML of the row with resource data
    row.innerHTML = `
        <td class="icon-cell">${resource.icon}</td>
        <td class="name-cell"><strong>${resource.title}</strong></td>
        <td class="week-cell">${resource.week}</td>
        <td class="desc-cell">${resource.description}</td>
        <td>
            <img class="img-cell"
                src="${resource.img}" 
                alt="${resource.title}"
            >
        </td>
    `;

    // Return the constructed row to be appended to the table body
    return row;
}

// Flower petal animation
function flowerAnimation() {
    const petals = document.getElementsByClassName('petal');
    const middle = document.querySelector('.center');

    Array.from(petals).forEach(petal => {
        petal.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'white';
        });
        petal.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    middle.addEventListener('mouseenter', function() {
        Array.from(petals).forEach(petal => {
            petal.style.backgroundColor = 'MediumPurple';
        });
    });
    middle.addEventListener('mouseleave', function() {
        Array.from(petals).forEach(petal => {
            petal.style.backgroundColor = '';
        });
    });
}

// Scroll to top functionality
function scrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}