//- Є масив coursesArray
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

// Приклад структури знаходиться у файлі example.png (папка img)




let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesContainer = document.createElement('div');
coursesContainer.classList.add('courses');

for (const course of coursesArray) {
   const courseDiv = document.createElement('div');
   courseDiv.classList.add('course');

   const titleDiv = document.createElement('div');
   titleDiv.classList.add('course-title');
   titleDiv.innerText = course.title;

   const infoDiv = document.createElement('div');
   infoDiv.classList.add('course-info');

    const monthDurationDiv = document.createElement('div');
    monthDurationDiv.classList.add('course-monthDuration');
    monthDurationDiv.textContent = `${course.monthDuration} міс.`;

    const hourDiv = document.createElement('div');
    hourDiv.classList.add('course-hour');
    hourDiv.textContent = `${course.hourDuration} год.`;

   infoDiv.append(monthDurationDiv, hourDiv);

   const modulesDiv = document.createElement('div');
   modulesDiv.classList.add('course-modules');



   const ul = document.createElement('ul');
    for (const moduleName of course.modules) {
        const li = document.createElement('li');
        li.innerText = moduleName;
        ul.appendChild(li);
    }
    modulesDiv.appendChild(ul);

    courseDiv.append(titleDiv, infoDiv, modulesDiv);
    coursesContainer.appendChild(courseDiv);
}

document.body.appendChild(coursesContainer);